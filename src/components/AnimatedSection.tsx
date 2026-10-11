import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { EASE_SMOOTH } from '../lib/motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
  as?: 'section' | 'div' | 'article'
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
  as: Tag = 'section',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLDivElement & HTMLElement>}
      id={id}
      className={className}
    >
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay, ease: EASE_SMOOTH }}
      >
        {children}
      </motion.div>
    </Tag>
  )
}
