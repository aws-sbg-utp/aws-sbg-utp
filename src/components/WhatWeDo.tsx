import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { SectionTag } from './ui/SectionTag'
import { WHAT_WE_DO_BLOCKS } from '../data/content'
import { EASE_SMOOTH, createStaggerContainer } from '../lib/motion'

export default function WhatWeDo() {
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
      id="que-hacemos"
      className="section-padding bg-white border-t border-navy/6"
      aria-labelledby="que-hacemos-heading"
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
            <SectionTag label="QUÉ HACEMOS" variant="light" />
          </div>
          <h2
            id="que-hacemos-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight text-balance mb-4"
          >
            Cómo aprendemos en el grupo
          </h2>
          <p className="text-muted-light text-base sm:text-lg max-w-2xl leading-relaxed text-pretty">
            Nuestras sesiones combinan explicaciones claras, práctica en vivo en la consola de AWS
            y espacios abiertos para resolver dudas entre todos.
          </p>
        </motion.div>

        {/* Three structural pillars */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
          role="list"
          aria-label="Ejes de actividad de la comunidad"
        >
          {WHAT_WE_DO_BLOCKS.map((block) => (
            <motion.article
              key={block.id}
              variants={cardVariants}
              role="listitem"
              className="rounded-2xl bg-surface-subtle border border-navy/10 hover:border-brand-blue-dark/40 p-6 sm:p-7 relative flex flex-col justify-between group shadow-sm transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue-dark bg-brand-blue-dark/10 border border-brand-blue-dark/20 px-2.5 py-1 rounded-md">
                    {block.badge}
                  </span>
                  <span className="text-xs font-bold font-mono text-muted-light/60 select-none">
                    EJE {block.step}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-white border border-navy/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <img
                    src={block.iconSrc}
                    alt={block.iconAlt}
                    className="w-6 h-6"
                    width="24"
                    height="24"
                  />
                </div>

                <h3 className="text-xl font-bold text-navy mb-2.5">
                  {block.title}
                </h3>
                <p className="text-muted-light text-sm leading-relaxed mb-6">
                  {block.description}
                </p>
              </div>

              <div className="pt-4 border-t border-navy/8 text-xs text-muted-light space-y-2">
                {block.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-navy/80">
                    <span className="text-brand-blue-dark font-bold">▸</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
