import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/content'
import { SectionTag } from './ui/SectionTag'
import { CtaButton } from './ui/CtaButton'
import { EASE_SMOOTH, createStaggerContainer } from '../lib/motion'

function MeetupIcon({ className }: { className?: string }) {
  return (
    <img
      src="/assets/icons/social/meetup.png"
      alt="Meetup"
      className={`${className ?? 'w-6 h-6'} object-contain`}
      width="24"
      height="24"
    />
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Community() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const prefersReducedMotion = useReducedMotion()

  const staggerVariants = createStaggerContainer(0.1, 0.1, prefersReducedMotion)

  return (
    <section
      ref={ref}
      id="encuentros"
      className="section-padding bg-navy border-t border-white/8"
      aria-labelledby="encuentros-heading"
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
            <SectionTag label="ENCUENTROS Y COMUNICACIÓN" />
          </div>
          <h2
            id="encuentros-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight text-balance mb-4"
          >
            Dónde nos encontramos
          </h2>
          <p className="text-muted-dark text-base sm:text-lg max-w-xl leading-relaxed text-pretty">
            Organizamos actividades periódicas y mantenemos canales abiertos para que puedas
            comunicarte con el grupo en cualquier momento.
          </p>
        </motion.div>

        {/* Tier 1: Two Featured Primary Channels (Meetup & WhatsApp) */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Meetup Card */}
          <div className="p-7 sm:p-8 rounded-2xl bg-navy-card/95 border border-brand-blue/30 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <MeetupIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-md border border-brand-blue/20">
                  Calendario oficial
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Actividades en Meetup
              </h3>
              <p className="text-muted-dark text-sm sm:text-base leading-relaxed mb-6">
                En Meetup publicamos las fechas, temas y modalidades (presenciales en el campus de la
                UTP o virtuales) de cada sesión. Regístrate en la plataforma para asegurar tu
                asistencia y recibir recordatorios.
              </p>
            </div>

            <div className="pt-5 border-t border-white/8">
              <CtaButton
                href={SOCIAL_LINKS.meetup}
                variant="primary"
                icon={ArrowUpRight}
                id="channel-meetup"
              >
                Ver actividades en Meetup
              </CtaButton>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-7 sm:p-8 rounded-2xl bg-navy-card/95 border border-white/10 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-md border border-[#25D366]/20">
                  Grupo de chat
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Comunidad en WhatsApp
              </h3>
              <p className="text-muted-dark text-sm sm:text-base leading-relaxed mb-6">
                El grupo de mensajería para hacer preguntas técnicas, compartir noticias y recursos
                sobre cloud, y coordinar con el equipo antes y después de cada encuentro.
              </p>
            </div>

            <div className="pt-5 border-t border-white/8">
              <CtaButton
                href={SOCIAL_LINKS.whatsapp}
                variant="outline-white"
                icon={ArrowUpRight}
                id="channel-whatsapp"
              >
                Unirse al grupo de WhatsApp
              </CtaButton>
            </div>
          </div>
        </div>

        {/* Tier 2: Secondary Platforms */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* GitHub */}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-navy-card/80 border border-white/8 hover:border-brand-blue/40 transition-all flex flex-col justify-between group no-underline"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/70 group-hover:text-brand-blue transition-colors">
                  <GitHubIcon className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-dark">
                  Código
                </span>
              </div>
              <h4 className="font-bold text-white text-base mb-1 group-hover:text-brand-blue transition-colors">
                GitHub
              </h4>
              <p className="text-muted-dark text-xs leading-relaxed">
                Repositorios y recursos técnicos de los talleres.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 mt-4 border-t border-white/8 text-xs font-semibold text-brand-blue">
              <span>Ver GitHub</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </div>
          </a>

          {/* Instagram */}
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-navy-card/80 border border-white/8 hover:border-brand-blue/40 transition-all flex flex-col justify-between group no-underline"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/70 group-hover:text-brand-blue transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-dark">
                  Social
                </span>
              </div>
              <h4 className="font-bold text-white text-base mb-1 group-hover:text-brand-blue transition-colors">
                Instagram
              </h4>
              <p className="text-muted-dark text-xs leading-relaxed">
                Avisos, resúmenes visuales y novedades del grupo.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 mt-4 border-t border-white/8 text-xs font-semibold text-brand-blue">
              <span>Ver perfil</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </div>
          </a>

          {/* YouTube */}
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-navy-card/80 border border-white/8 hover:border-brand-blue/40 transition-all flex flex-col justify-between group no-underline"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/70 group-hover:text-brand-blue transition-colors">
                  <YouTubeIcon className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-dark">
                  Video
                </span>
              </div>
              <h4 className="font-bold text-white text-base mb-1 group-hover:text-brand-blue transition-colors">
                YouTube
              </h4>
              <p className="text-muted-dark text-xs leading-relaxed">
                Sesiones grabadas y material audiovisual técnico.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 mt-4 border-t border-white/8 text-xs font-semibold text-brand-blue">
              <span>Ver canal</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-navy-card/80 border border-white/8 hover:border-brand-blue/40 transition-all flex flex-col justify-between group no-underline"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/70 group-hover:text-brand-blue transition-colors">
                  <LinkedInIcon className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-dark">
                  Profesional
                </span>
              </div>
              <h4 className="font-bold text-white text-base mb-1 group-hover:text-brand-blue transition-colors">
                LinkedIn
              </h4>
              <p className="text-muted-dark text-xs leading-relaxed">
                Página oficial para presencia y networking.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 mt-4 border-t border-white/8 text-xs font-semibold text-brand-blue">
              <span>Ver página</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </div>
          </a>
        </motion.div>

        {/* Contact Strip */}
        <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-dark">
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-brand-blue" aria-hidden="true" />
            <span>Contacto directo:</span>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-white hover:text-brand-blue underline">
              {SOCIAL_LINKS.email}
            </a>
          </span>
          <span>Pereira, Risaralda • Universidad Tecnológica de Pereira</span>
        </div>
      </div>
    </section>
  )
}
