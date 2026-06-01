import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { MouseDirection, MousePosition } from '../hooks/useMouseGradient';

interface CursorWakeProps {
  mousePos: MousePosition;
  direction: MouseDirection;
  isReducedMotion: boolean;
}

interface AirTrail {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
}

const AIR_GRADIENT = 'radial-gradient(circle at 38% 50%, rgba(55,184,84,0.46) 0%, rgba(255,174,22,0.32) 34%, rgba(42,154,67,0.24) 58%, transparent 78%)';
const AIR_SHADOW = '0 0 46px rgba(55,184,84,0.28), 0 0 82px rgba(255,174,22,0.16)';

function getDirectionAngle(direction: MouseDirection) {
  if (Math.abs(direction.x) < 1 && Math.abs(direction.y) < 1) return 0;
  return (Math.atan2(direction.y, direction.x) * 180) / Math.PI;
}

function getSpeed(direction: MouseDirection) {
  return Math.min(Math.sqrt(direction.x * direction.x + direction.y * direction.y), 48);
}

export function CursorWake({ mousePos, direction, isReducedMotion }: CursorWakeProps) {
  const [trails, setTrails] = useState<AirTrail[]>([]);
  const lastSpawnRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    if (isReducedMotion) {
      setTrails([]);
      return;
    }

    const speed = getSpeed(direction);
    if (speed < 6) return;

    const now = performance.now();
    if (now - lastSpawnRef.current < 48) return;
    lastSpawnRef.current = now;

    const nextTrail = {
      id: idRef.current++,
      x: mousePos.x,
      y: mousePos.y,
      angle: getDirectionAngle(direction),
      speed,
    };

    setTrails((current) => [...current.slice(-10), nextTrail]);
  }, [direction, isReducedMotion, mousePos.x, mousePos.y]);

  if (isReducedMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen">
      <AnimatePresence initial={false}>
        {trails.map((trail) => {
          const drift = 72 + trail.speed * 2.4;
          const width = 120 + trail.speed * 3.1;
          const height = 52 + trail.speed * 0.9;

          return (
            <motion.div
              key={trail.id}
              className="absolute h-1 w-1"
              initial={{ opacity: 0.72, scale: 0.62 }}
              animate={{ opacity: 0, scale: 1.48 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.18, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => {
                setTrails((current) => current.filter((candidate) => candidate.id !== trail.id));
              }}
              style={{ left: trail.x, top: trail.y, rotate: trail.angle }}
            >
              <motion.span
                className="absolute left-0 top-0 rounded-full blur-xl"
                initial={{ x: -18, y: -height * 0.36, width: 42, height: height * 0.9, opacity: 0.78, scaleX: 0.5, scaleY: 0.65 }}
                animate={{ x: -drift, y: -height * 0.58, width, height, opacity: 0, scaleX: 1.18, scaleY: 1.05 }}
                transition={{ duration: 1.18, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: AIR_GRADIENT,
                  boxShadow: AIR_SHADOW,
                  transformOrigin: 'right center',
                }}
              />
              <motion.span
                className="absolute left-0 top-0 rounded-full blur-xl"
                initial={{ x: -18, y: height * 0.08, width: 42, height: height * 0.9, opacity: 0.78, scaleX: 0.5, scaleY: 0.65 }}
                animate={{ x: -drift, y: height * 0.24, width, height, opacity: 0, scaleX: 1.18, scaleY: 1.05 }}
                transition={{ duration: 1.18, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: AIR_GRADIENT,
                  boxShadow: AIR_SHADOW,
                  transformOrigin: 'right center',
                }}
              />
              <motion.span
                className="absolute left-0 top-0 rounded-full blur-2xl"
                initial={{ x: -8, y: -height * 0.24, width: 28, height: height * 1.2, opacity: 0.38 }}
                animate={{ x: -drift * 0.62, y: 0, width: width * 0.66, height: height * 1.35, opacity: 0 }}
                transition={{ duration: 1.26, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'radial-gradient(circle, rgba(255,174,22,0.20), rgba(55,184,84,0.16) 44%, transparent 72%)',
                  transformOrigin: 'right center',
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
