import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

type Direction = 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right' | 'idle';

interface MouseParticlesProps {
  mousePos: { x: number; y: number };
  direction: Direction;
  rainbowColor: string;
  isEnabled: boolean;
  containerRef: React.RefObject<HTMLElement | null>;
}

/**
 * Get velocity vector based on direction
 * Particles burst in the opposite direction of mouse movement
 */
function getVelocityFromDirection(direction: Direction): { vx: number; vy: number }[] {
  const velocities: Record<Direction, { vx: number; vy: number }[]> = {
    idle: [],
    up: [
      { vx: -2, vy: -8 },
      { vx: 0, vy: -10 },
      { vx: 2, vy: -8 },
    ],
    down: [
      { vx: -2, vy: 8 },
      { vx: 0, vy: 10 },
      { vx: 2, vy: 8 },
    ],
    left: [
      { vx: -10, vy: -2 },
      { vx: -8, vy: 0 },
      { vx: -8, vy: 2 },
    ],
    right: [
      { vx: 10, vy: -2 },
      { vx: 8, vy: 0 },
      { vx: 8, vy: 2 },
    ],
    'up-left': [
      { vx: -8, vy: -8 },
      { vx: -10, vy: -6 },
      { vx: -6, vy: -10 },
    ],
    'up-right': [
      { vx: 8, vy: -8 },
      { vx: 10, vy: -6 },
      { vx: 6, vy: -10 },
    ],
    'down-left': [
      { vx: -8, vy: 8 },
      { vx: -10, vy: 6 },
      { vx: -6, vy: 10 },
    ],
    'down-right': [
      { vx: 8, vy: 8 },
      { vx: 10, vy: 6 },
      { vx: 6, vy: 10 },
    ],
  };

  return velocities[direction] || [];
}

export function MouseParticles({
  mousePos,
  direction,
  rainbowColor,
  isEnabled,
  containerRef,
}: MouseParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const containerRefLocal = useRef<HTMLDivElement>(null);
  const particleCounterRef = useRef(0);

  // Check for prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Create particles when direction changes
  useEffect(() => {
    if (!isEnabled || prefersReducedMotion || direction === 'idle') {
      return;
    }

    const velocities = getVelocityFromDirection(direction);
    if (velocities.length === 0) return;

    const newParticles: Particle[] = velocities.map((vel) => ({
      id: `particle-${particleCounterRef.current++}`,
      x: mousePos.x,
      y: mousePos.y,
      vx: vel.vx + (Math.random() - 0.5) * 2,
      vy: vel.vy + (Math.random() - 0.5) * 2,
      color: rainbowColor,
      size: 4 + Math.random() * 4,
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    // Animate particles
    newParticles.forEach((particle) => {
      const element = particlesRef.current.get(particle.id);
      if (!element) return;

      gsap.to(element, {
        x: particle.x + particle.vx * 40,
        y: particle.y + particle.vy * 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
          // Remove particle after animation
          setParticles((prev) => prev.filter((p) => p.id !== particle.id));
          particlesRef.current.delete(particle.id);
        },
      });
    });
  }, [direction, mousePos, isEnabled, prefersReducedMotion, rainbowColor]);

  if (!isEnabled || prefersReducedMotion) {
    return null;
  }

  return (
    <div
      ref={containerRefLocal}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          ref={(el) => {
            if (el) {
              particlesRef.current.set(particle.id, el);
            }
          }}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 1.5}px ${particle.color}`,
            opacity: 0.8,
            transform: 'translate(-50%, -50%)',
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
}
