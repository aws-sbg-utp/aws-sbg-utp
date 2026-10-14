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
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE_SMOOTH },
    },
  }

  return (
    <section
      ref={ref}
      id="que-hacemos"
      className="section-padding bg-[#161d26]"
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
            <SectionTag label="02 // LO QUE HACEMOS" />
          </div>
          <h2
            id="que-hacemos-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4"
          >
            Nuestra dinámica de aprendizaje
          </h2>
          <p className="text-[#9aa3b0] text-base sm:text-lg max-w-2xl leading-relaxed">
            Tres ejes de actividad para aprender conceptos, practicar con herramientas de AWS y conectar con la comunidad.
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
              className={`rounded-xl bg-[#1e2736]/90 border ${block.borderColor} p-6 sm:p-7 relative flex flex-col justify-between group ${block.hoverBorderColor} transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[11px] font-mono font-bold tracking-widest uppercase ${block.badgeBg} px-2.5 py-1 rounded border`}>
                    {block.badge}
                  </span>
                  <span className="text-3xl font-black font-mono text-white/10 select-none" aria-hidden="true">
                    {block.step}
                  </span>
                </div>
                <div className={`w-12 h-12 rounded-lg ${block.badgeBg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                  <img
                    src={block.iconSrc}
                    alt={block.iconAlt}
                    className="w-7 h-7"
                    width="28"
                    height="28"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {block.title}
                </h3>
                <p className="text-[#9aa3b0] text-sm leading-relaxed mb-6">
                  {block.description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/8 text-xs font-mono text-[#8b8e97] space-y-1.5">
                {block.bullets.map((bullet, idx) => (
                  <div key={idx} className="text-white/80">▸ {bullet}</div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
