export type EaseTuple = [number, number, number, number]

export const EASE_SMOOTH: EaseTuple = [0.4, 0, 0.2, 1]

/**
 * Generates fade-up motion props respecting prefersReducedMotion.
 */
export function createFadeUp(
  delay = 0,
  prefersReducedMotion: boolean | null = false,
  yDistance = 24,
  duration = 0.6
) {
  return {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: yDistance },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE_SMOOTH },
  }
}

/**
 * Stagger container variants for lists/grids.
 */
export function createStaggerContainer(
  staggerChildren = 0.12,
  delayChildren = 0.1,
  prefersReducedMotion: boolean | null = false
) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerChildren,
        delayChildren: prefersReducedMotion ? 0 : delayChildren,
      },
    },
  }
}
