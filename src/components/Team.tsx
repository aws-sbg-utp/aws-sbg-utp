import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Globe, Link as LinkIcon, Share2 } from 'lucide-react'
import { SectionTag } from './ui/SectionTag'
import { TEAM_MEMBERS } from '../data/content'
import { EASE_SMOOTH } from '../lib/motion'

export default function Team() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const prefersReducedMotion = useReducedMotion()

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE_SMOOTH },
    },
  }

  // Neutral icons for the 3 generic link spaces
  const SLOT_ICONS = [Globe, LinkIcon, Share2]

  return (
    <section
      ref={ref}
      id="equipo"
      className="section-padding bg-[#161d26]"
      aria-labelledby="equipo-heading"
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
            <SectionTag label="06 // EQUIPO LÍDER" />
          </div>
          <h2
            id="equipo-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4"
          >
            Equipo que lidera y gestiona
          </h2>
          <p className="text-[#9aa3b0] text-base sm:text-lg max-w-2xl leading-relaxed">
            Estudiantes de la UTP que coordinan las actividades, proyectos y encuentros de la comunidad.
          </p>
        </motion.div>

        {/* Team Grid: 2x3 on desktop, 2 cols on tablet, 1 col on mobile */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          role="list"
          aria-label="Integrantes del equipo que lidera y gestiona"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.article
              key={member.id}
              variants={cardVariants}
              role="listitem"
              className="rounded-xl bg-[#1e2736]/90 border border-white/10 hover:border-[#44b4ff]/40 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Photo container with uniform aspect ratio */}
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-5 bg-[#161d26] border border-white/8">
                  <img
                    src={member.photoSrc}
                    alt={member.photoAlt}
                    className="w-full h-full object-cover object-top sm:object-center group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    width="400"
                    height="500"
                  />
                </div>

                {/* Role badge */}
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#44b4ff] block mb-1.5">
                  {member.role}
                </span>

                {/* Full name */}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {member.name}
                </h3>
              </div>

              {/* Three generic link spaces */}
              <div
                className="pt-4 border-t border-white/8 flex items-center gap-2.5 mt-5"
                aria-label={`Espacios de enlaces para ${member.name}`}
              >
                {member.links.map((link, idx) => {
                  const IconComponent = SLOT_ICONS[idx % SLOT_ICONS.length]
                  const hasUrl = Boolean(link.url && link.url.trim().length > 0)

                  if (hasUrl) {
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#44b4ff]/40 hover:text-[#44b4ff] text-white/70 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44b4ff]"
                        aria-label={`${link.label} de ${member.name}`}
                      >
                        <IconComponent size={14} aria-hidden="true" />
                      </a>
                    )
                  }

                  return (
                    <div
                      key={idx}
                      className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 text-white/20 flex items-center justify-center cursor-default select-none"
                      title="Espacio de enlace"
                      aria-hidden="true"
                    >
                      <IconComponent size={14} />
                    </div>
                  )
                })}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
