import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { PATH_STEPS } from '../data/content'
import { SectionTag } from './ui/SectionTag'
import { EASE_SMOOTH } from '../lib/motion'

export default function LearningPath() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      ref={ref}
      id="nuestro-camino"
      className="section-padding bg-white"
      aria-labelledby="camino-heading"
    >
      <div className="container-base">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE_SMOOTH }}
          className="mb-14 lg:mb-18"
        >
          <div className="mb-4">
            <SectionTag label="03 // RUTA DE APRENDIZAJE" variant="light" />
          </div>
          <h2
            id="camino-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#161d26] leading-tight tracking-tight mb-4"
          >
            Nuestro camino
          </h2>
          <p className="text-[#526071] text-base sm:text-lg max-w-xl leading-relaxed">
            Una ruta progresiva paso a paso para avanzar con confianza, desde el primer taller hasta el despliegue de arquitectura real.
          </p>
        </motion.div>

        {/* Steps — Blueprint Roadmap */}
        <div className="relative">

          {/* Horizontal connector line — desktop only (aligned to circle center at 1.75rem) */}
          <div
            className="hidden lg:block absolute top-[1.75rem] left-[1.75rem] right-[1.75rem] h-px"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#1a6fa0]/40 via-[#44b4ff]/40 to-[#1a6fa0]/20"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE_SMOOTH }}
            />
          </div>

          <div
            className="grid lg:grid-cols-4 gap-0 lg:gap-6"
            role="list"
            aria-label="Etapas del camino"
          >
            {PATH_STEPS.map((step, index) => (
              <motion.div
                key={step.label}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: prefersReducedMotion ? 0 : 0.2 + index * 0.12,
                  ease: EASE_SMOOTH,
                }}
                role="listitem"
                className="relative flex lg:flex-col items-start lg:items-start gap-4 lg:gap-0"
              >
                {/* Mobile vertical connector */}
                {index < PATH_STEPS.length - 1 && (
                  <div
                    className="lg:hidden absolute left-[1.75rem] top-[3.5rem] w-px h-[calc(100%-3.5rem)] bg-[#1a6fa0]/25"
                    aria-hidden="true"
                  />
                )}

                {/* Step circle */}
                <div
                  className="relative z-10 flex-shrink-0 w-[3.5rem] h-[3.5rem] rounded-full bg-[#161d26] border-2 border-[#44b4ff]/30 flex items-center justify-center lg:mb-5 shadow-sm"
                  aria-hidden="true"
                >
                  <img
                    src={step.iconSrc}
                    alt=""
                    className="w-5 h-5 opacity-85"
                    width="20"
                    height="20"
                  />
                </div>

                {/* Text content */}
                <div className="pb-8 lg:pb-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-[#1a6fa0] tracking-wider uppercase" aria-hidden="true">
                      FASE {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#161d26] mb-1.5">
                    {step.label}
                  </h3>
                  <p className="text-[#526071] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blueprint callout note */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7, ease: EASE_SMOOTH }}
          className="mt-14 p-5 sm:p-6 rounded-xl bg-[#f0f7fc] border border-[#1a6fa0]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-start sm:items-center gap-3">
            <span className="text-[11px] font-mono font-bold text-[#1a6fa0] bg-[#1a6fa0]/10 px-2.5 py-1 rounded border border-[#1a6fa0]/25 uppercase flex-shrink-0">
              // ACCESO TOTAL
            </span>
            <p className="text-[#161d26] text-sm leading-relaxed font-medium">
              No necesitas experiencia previa. Si nunca has abierto la consola de AWS, este es el lugar para empezar.
            </p>
          </div>
          <span className="text-xs font-mono text-[#526071] flex-shrink-0">
            UTP • PEREIRA
          </span>
        </motion.div>
      </div>
    </section>
  )
}
