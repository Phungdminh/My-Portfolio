import { motion } from 'framer-motion';
import type { MouseDirection, MousePosition } from '../hooks/useMouseGradient';

interface CursorRepulsionFieldProps {
  mousePos: MousePosition;
  direction: MouseDirection;
  isReducedMotion: boolean;
}

interface RepulsionBlock {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  radius: string;
  color: string;
  borderColor: string;
  depth: number;
  rotate: number;
}

const INFLUENCE_RADIUS = 240;
const MAX_OFFSET = 72;
const BLOCK_COLORS = {
  green: 'var(--block-green)',
  orange: 'var(--block-orange)',
  deepgreen: 'var(--block-deepgreen)',
};

const BLOCK_ALPHA = {
  soft: '1f',
  medium: '24',
  strong: '2d',
};

const BORDER_ALPHA = {
  soft: '50',
  medium: '55',
  strong: '66',
};

const BLOCKS: RepulsionBlock[] = [
  { id: 1, x: 8, y: 18, width: 88, height: 38, radius: '999px', color: '#37b8541f', borderColor: '#37b85455', depth: 0.8, rotate: -8 },
  { id: 2, x: 19, y: 31, width: 48, height: 48, radius: '16px', color: '#ffae1624', borderColor: '#ffae1655', depth: 1.15, rotate: 12 },
  { id: 3, x: 34, y: 15, width: 118, height: 28, radius: '999px', color: '#2a9a4326', borderColor: '#2a9a4355', depth: 0.9, rotate: 6 },
  { id: 4, x: 53, y: 23, width: 54, height: 54, radius: '18px', color: '#37b85422', borderColor: '#37b85455', depth: 1.2, rotate: -14 },
  { id: 5, x: 72, y: 14, width: 96, height: 36, radius: '999px', color: '#ffae161f', borderColor: '#ffae1650', depth: 0.85, rotate: 10 },
  { id: 6, x: 88, y: 28, width: 42, height: 42, radius: '14px', color: '#2a9a4322', borderColor: '#2a9a4355', depth: 1.1, rotate: -10 },
  { id: 7, x: 12, y: 52, width: 52, height: 52, radius: '18px', color: '#ffae1622', borderColor: '#ffae1655', depth: 1.05, rotate: 16 },
  { id: 8, x: 27, y: 61, width: 126, height: 34, radius: '999px', color: '#37b8541f', borderColor: '#37b85455', depth: 0.95, rotate: -5 },
  { id: 9, x: 45, y: 49, width: 46, height: 46, radius: '15px', color: '#2a9a4324', borderColor: '#2a9a4355', depth: 1.25, rotate: 18 },
  { id: 10, x: 64, y: 59, width: 104, height: 30, radius: '999px', color: '#ffae161d', borderColor: '#ffae1650', depth: 0.88, rotate: 7 },
  { id: 11, x: 82, y: 51, width: 56, height: 56, radius: '20px', color: '#37b85422', borderColor: '#37b85455', depth: 1.18, rotate: -18 },
  { id: 12, x: 93, y: 72, width: 86, height: 34, radius: '999px', color: '#2a9a4320', borderColor: '#2a9a4350', depth: 0.82, rotate: 12 },
  { id: 13, x: 17, y: 80, width: 96, height: 30, radius: '999px', color: '#2a9a4320', borderColor: '#2a9a4350', depth: 0.84, rotate: 7 },
  { id: 14, x: 38, y: 83, width: 42, height: 42, radius: '14px', color: '#37b85424', borderColor: '#37b85455', depth: 1.1, rotate: -12 },
  { id: 15, x: 58, y: 78, width: 128, height: 32, radius: '999px', color: '#ffae161f', borderColor: '#ffae1650', depth: 0.92, rotate: -6 },
  { id: 16, x: 76, y: 83, width: 44, height: 44, radius: '15px', color: '#2a9a4322', borderColor: '#2a9a4355', depth: 1.28, rotate: 15 },
  { id: 17, x: 5, y: 70, width: 34, height: 118, radius: '999px', color: '#37b85418', borderColor: '#37b85444', depth: 0.75, rotate: 0 },
  { id: 18, x: 96, y: 44, width: 34, height: 118, radius: '999px', color: '#ffae1618', borderColor: '#ffae1644', depth: 0.75, rotate: 0 },
  { id: 19, x: 24, y: 21, width: 36, height: 36, radius: '12px', color: '#37b8542d', borderColor: '#37b85466', depth: 1.32, rotate: 21 },
  { id: 20, x: 43, y: 32, width: 74, height: 26, radius: '999px', color: '#ffae162b', borderColor: '#ffae1666', depth: 1.05, rotate: -18 },
  { id: 21, x: 61, y: 35, width: 32, height: 32, radius: '11px', color: '#2a9a432d', borderColor: '#2a9a4366', depth: 1.38, rotate: 24 },
  { id: 22, x: 78, y: 39, width: 76, height: 26, radius: '999px', color: '#37b8542b', borderColor: '#37b85466', depth: 1.04, rotate: -14 },
  { id: 23, x: 21, y: 44, width: 32, height: 32, radius: '11px', color: '#ffae162d', borderColor: '#ffae1666', depth: 1.34, rotate: -20 },
  { id: 24, x: 36, y: 70, width: 76, height: 24, radius: '999px', color: '#2a9a432b', borderColor: '#2a9a4366', depth: 1.02, rotate: 15 },
  { id: 25, x: 51, y: 68, width: 34, height: 34, radius: '12px', color: '#37b8542d', borderColor: '#37b85466', depth: 1.36, rotate: -25 },
  { id: 26, x: 69, y: 72, width: 72, height: 24, radius: '999px', color: '#ffae162b', borderColor: '#ffae1666', depth: 1.02, rotate: 18 },
  { id: 27, x: 86, y: 64, width: 34, height: 34, radius: '12px', color: '#2a9a432d', borderColor: '#2a9a4366', depth: 1.34, rotate: -22 },
  { id: 28, x: 9, y: 37, width: 72, height: 24, radius: '999px', color: '#37b85428', borderColor: '#37b8545c', depth: 0.98, rotate: 18 },
];

function getRepelledTransform(block: RepulsionBlock, mousePos: MousePosition, direction: MouseDirection) {
  const viewportWidth = typeof window === 'undefined' ? 1440 : window.innerWidth;
  const viewportHeight = typeof window === 'undefined' ? 900 : window.innerHeight;
  const blockX = (block.x / 100) * viewportWidth;
  const blockY = (block.y / 100) * viewportHeight;
  const dx = blockX - mousePos.x;
  const dy = blockY - mousePos.y;
  const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
  const strength = Math.max(0, 1 - distance / INFLUENCE_RADIUS);
  const cursorMomentum = Math.min(Math.sqrt(direction.x * direction.x + direction.y * direction.y) / 40, 1);
  const offset = strength * MAX_OFFSET * block.depth * (1 + cursorMomentum * 0.35);

  return {
    x: (dx / distance) * offset,
    y: (dy / distance) * offset,
    rotate: block.rotate + (direction.x / 22) * strength,
    scale: 1.04 + strength * 0.12,
    opacity: 0.34 + strength * 0.5,
  };
}

export function CursorRepulsionField({ mousePos, direction, isReducedMotion }: CursorRepulsionFieldProps) {
  if (isReducedMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle,var(--block-grid)_1px,transparent_1.5px)] [background-size:44px_44px] [mask-image:radial-gradient(circle_at_center,black_0%,transparent_72%)]" />
      {BLOCKS.map((block, index) => {
        const transform = getRepelledTransform(block, mousePos, direction);
        const colorKeys = Object.keys(BLOCK_COLORS) as Array<keyof typeof BLOCK_COLORS>;
        const color = BLOCK_COLORS[colorKeys[index % colorKeys.length]];

        return (
          <motion.div
            key={block.id}
            className="absolute border shadow-[0_22px_90px_rgba(0,0,0,0.36)] backdrop-blur-md mix-blend-screen"
            animate={transform}
            transition={{ type: 'spring', stiffness: 140, damping: 22, mass: 0.65 }}
            style={{
              left: `${block.x}%`,
              top: `${block.y}%`,
              width: block.width,
              height: block.height,
              borderRadius: block.radius,
              background: `linear-gradient(135deg, color-mix(in oklch, ${color} 22%, transparent), var(--block-overlay))`,
              borderColor: `color-mix(in oklch, ${color} 42%, transparent)`,
              boxShadow: `0 0 58px color-mix(in oklch, ${color} 30%, transparent), 0 20px 80px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.32)`,
            }}
          />
        );
      })}
    </div>
  );
}
