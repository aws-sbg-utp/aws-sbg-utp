import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { HOW_TO_JOIN_STEPS } from '../data/content'
import { SectionTag } from './ui/SectionTag'
import { EASE_SMOOTH, createStaggerContainer } from '../lib/motion'

export default function LearningPath() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const prefersReducedMotion = useReducedMotion()

  const staggerVariants = createStaggerContainer(0.12, 0.1, prefersReducedMotion)

  const cardVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE_SMOOTH },
    },
  }

  return (
    <section
      ref={ref}
      id="como-participar"
      className="section-padding bg-surface-subtle border-t border-navy/6"
      aria-labelledby="participar-heading"
    >
      <div className="container-base">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE_SMOOTH }}
          className="mb-12 lg:mb-16"
        >
          <div className="mb-4">
            <SectionTag label="PRIMEROS PASOS" variant="light" />
          </div>
          <h2
            id="participar-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight text-balance mb-4"
          >
            Cómo sumarte a la comunidad
          </h2>
          <p className="text-muted-light text-base sm:text-lg max-w-xl leading-relaxed text-pretty">
            Si quieres participar en las actividades, no necesitas postularte formalmente ni cumplir
            requisitos previos. Puedes integrarte siguiendo estos tres pasos:
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
          role="list"
          aria-label="Pasos para integrarse a la comunidad"
        >
          {HOW_TO_JOIN_STEPS.map((step) => (
            <motion.div
              key={step.step}
              variants={cardVariants}
              role="listitem"
              className="rounded-2xl bg-white border border-navy/10 hover:border-brand-blue-dark/40 p-6 sm:p-7 flex flex-col justify-between group shadow-sm transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-xl bg-navy text-white font-mono font-bold text-sm flex items-center justify-center shadow-sm">
                    {step.step}
                  </span>
                  <span className="text-xs text-muted-light font-medium">Paso directo</span>
                </div>

                <h3 className="text-xl font-bold text-navy mb-2.5">
                  {step.label}
                </h3>
                <p className="text-muted-light text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-navy/8">
                {step.actionHref ? (
                  <a
                    href={step.actionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-dark hover:text-navy transition-colors"
                  >
                    <span>{step.actionLabel}</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-xs font-medium text-muted-light">
                    {step.actionLabel}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
