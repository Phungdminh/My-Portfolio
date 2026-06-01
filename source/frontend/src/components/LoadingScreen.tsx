import { AnimatePresence, motion } from 'framer-motion';
import { content } from '../data/content';

type LoadingScreenProps = {
  isVisible: boolean;
};

export function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-[var(--color-bg)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="grid h-20 w-20 place-items-center rounded-full border border-[var(--color-stroke)] bg-[var(--color-surface)] text-xl font-semibold tracking-[0.35em]">
              {content.brand.initials}
            </div>
            <motion.p
              className="text-sm uppercase tracking-[0.4em] text-[var(--color-muted)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
            >
              {content.loading.label}
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
