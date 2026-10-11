import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { SectionTag } from './ui/SectionTag'
import { WHAT_WE_DO_BLOCKS, ACTIVITY_FORMATS } from '../data/content'
import { EASE_SMOOTH } from '../lib/motion'

export default function WhatWeDo() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const prefersReducedMotion = useReducedMotion()

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

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
            Tres ejes complementarios diseñados para que pases de la teoría a desplegar soluciones reales en la nube de Amazon Web Services.
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

        {/* Planned activity formats */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 pt-10 border-t border-white/8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Formatos de actividad previstos
              </h3>
              <p className="text-xs sm:text-sm text-[#9aa3b0] mt-1">
                Dinámicas planificadas según la evolución y el interés de los estudiantes en el campus.
              </p>
            </div>
            <span className="text-[11px] font-mono font-bold text-[#44b4ff] bg-[#44b4ff]/10 px-2.5 py-1 rounded border border-[#44b4ff]/20 uppercase self-start sm:self-auto flex-shrink-0">
              // DINÁMICAS EN DESARROLLO
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list" aria-label="Formatos de actividades">
            {ACTIVITY_FORMATS.map((fmt) => (
              <div
                key={fmt.title}
                role="listitem"
                className="p-5 rounded-xl bg-[#1e2736]/60 border border-white/8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#44b4ff] block mb-2">
                    {fmt.badge}
                  </span>
                  <h4 className="font-bold text-white text-base mb-1.5">
                    {fmt.title}
                  </h4>
                  <p className="text-[#9aa3b0] text-xs leading-relaxed">
                    {fmt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical pipeline indicator */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-12 py-4 px-6 rounded-lg bg-[#1e2736]/50 border border-white/8 flex items-center justify-center gap-3 sm:gap-6 flex-wrap font-mono text-xs text-[#8b8e97]"
          aria-label="Ruta secuencial"
        >
          <span className="text-[#44b4ff] font-bold">APRENDE // FUNDAMENTOS</span>
          <span className="text-white/20 hidden sm:inline" aria-hidden="true">────▶</span>
          <span className="text-[#ff9900] font-bold">CONSTRUYE // SERVICIOS REALES</span>
          <span className="text-white/20 hidden sm:inline" aria-hidden="true">────▶</span>
          <span className="text-[#03e582] font-bold">CONECTA // COMUNIDAD TECH</span>
        </motion.div>
      </div>
    </section>
  )
}
