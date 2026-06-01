import { useEffect, useRef, useState } from 'react';

export interface MousePosition {
  x: number;
  y: number;
}

export interface MouseDirection {
  x: number;
  y: number;
}

/**
 * Tracks pointer position inside an element for decorative hero effects.
 * Uses requestAnimationFrame to avoid updating React state on every raw mouse event.
 */
export function useMouseGradient(elementRef: React.RefObject<HTMLElement | null>) {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [direction, setDirection] = useState<MouseDirection>({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const rafRef = useRef<number | undefined>(undefined);
  const lastPosRef = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotion = () => setIsReducedMotion(mediaQuery.matches);

    updateReducedMotion();
    mediaQuery.addEventListener('change', updateReducedMotion);

    return () => mediaQuery.removeEventListener('change', updateReducedMotion);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || isReducedMotion) return;

    const setCenteredPosition = () => {
      const center = {
        x: element.clientWidth / 2,
        y: element.clientHeight / 2,
      };
      lastPosRef.current = center;
      setMousePos(center);
      setDirection({ x: 0, y: 0 });
    };

    setCenteredPosition();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const nextPos = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      const previousPos = lastPosRef.current;
      const nextDirection = {
        x: nextPos.x - previousPos.x,
        y: nextPos.y - previousPos.y,
      };

      if (Math.abs(nextDirection.x) < 1 && Math.abs(nextDirection.y) < 1) return;

      lastPosRef.current = nextPos;

      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setMousePos(nextPos);
        setDirection(nextDirection);
      });
    };

    const handleMouseLeave = () => {
      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(setCenteredPosition);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [elementRef, isReducedMotion]);

  return { mousePos, direction, isReducedMotion };
}
