import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/content'
import { SectionTag } from './ui/SectionTag'
import { CtaButton } from './ui/CtaButton'
import { createFadeUp } from '../lib/motion'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) => createFadeUp(delay, prefersReducedMotion)

  const handleScrollDown = () => {
    const target = document.querySelector('#que-es')
    if (target) {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    }
  }

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy"
      aria-label="Sección principal"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 grid-dot-pattern pointer-events-none"
        aria-hidden="true"
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle blue glow */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle orange accent — AWS identity */}
      <div
        className="absolute -bottom-24 -right-16 w-[380px] h-[380px] rounded-full bg-brand-orange/4 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-base relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, description, and CTAs */}
          <div className="lg:col-span-7">
            {/* Technical Eyebrow */}
            <motion.div {...fadeUp(0.12)} className="mb-6">
              <SectionTag label="AWS SBG // UTP CAMPUS" hasDot />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              {...fadeUp(0.22)}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6 max-w-lg"
            >
              Aprende cloud{' '}
              <span className="text-gradient-blue inline-block">construyendo</span>{' '}
              cosas reales.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.32)}
              className="text-muted-dark text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Comunidad de estudiantes de la Universidad Tecnológica de Pereira para aprender sobre AWS,
              desarrollar proyectos y conectar con otros entusiastas de la tecnología.
            </motion.p>

            {/* CTAs — Meetup primary, WhatsApp secondary */}
            <motion.div
              {...fadeUp(0.42)}
              className="flex flex-col sm:flex-row gap-3.5 mb-5"
            >
              <CtaButton
                href={SOCIAL_LINKS.meetup}
                variant="primary"
                icon={ArrowUpRight}
                id="hero-cta-meetup"
              >
                Ver eventos en Meetup
              </CtaButton>
              <CtaButton
                href={SOCIAL_LINKS.whatsapp}
                variant="outline-white"
                id="hero-cta-whatsapp"
              >
                Únete a la comunidad
              </CtaButton>
            </motion.div>

            {/* Technical footnote */}
            <motion.p
              {...fadeUp(0.48)}
              className="text-[11px] font-mono text-muted-dark tracking-wider uppercase"
            >
              // COMUNIDAD ESTUDIANTIL UTP • PROGRAMA AWS STUDENT BUILDER GROUPS
            </motion.p>
          </div>

          {/* Right Column: Builder Terminal Card (Technical Identity) */}
          <div className="lg:col-span-5">
            <motion.div
              {...fadeUp(0.35)}
              className="relative rounded-xl bg-navy-card/95 border border-brand-blue/20 shadow-2xl p-5 sm:p-6 font-mono text-xs sm:text-sm overflow-hidden"
            >
              {/* Terminal top bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5757]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
                  <span className="text-white/40 text-[11px] ml-2 tracking-wider">aws-sbg-utp ~ bash</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/25 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  ACTIVE
                </div>
              </div>

              {/* Terminal body */}
              <div className="space-y-3 leading-relaxed text-[#c0c8d2]">
                <div className="flex items-center gap-2 text-white/95">
                  <span className="text-brand-blue font-bold">$</span>
                  <span>aws-sbg info --campus utp</span>
                </div>
                <div className="pl-3 border-l-2 border-brand-blue/35 text-white/80 space-y-1.5 text-xs">
                  <div><span className="text-brand-blue">community:</span> "AWS Student Builder Group"</div>
                  <div><span className="text-brand-blue">campus:</span> "Univ. Tecnológica de Pereira"</div>
                  <div><span className="text-brand-blue">focus:</span> ["cloud", "projects", "community"]</div>
                  <div><span className="text-brand-blue">type:</span> "student-community"</div>
                </div>
                <div className="pt-2 flex items-center justify-between text-[11px] text-text-subtle-dark border-t border-white/5">
                  <span className="text-brand-green">✔ status: active</span>
                  <span className="text-text-subtle-dark">pereira / colombia</span>
                </div>
              </div>

              {/* Subtle watermark chip in background */}
              <div className="absolute -bottom-6 -right-6 opacity-10 pointer-events-none" aria-hidden="true">
                <img
                  src="/assets/branding/sbg-icon-blue.svg"
                  alt=""
                  className="w-32 h-32"
                  width="128"
                  height="128"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pixel icons row — SBG identity decoration */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex items-center gap-5 mt-16 pt-8 border-t border-white/8"
          aria-hidden="true"
        >
          <img
            src="/assets/icons/ladder-icons/ladder-icon-blue.svg"
            alt=""
            className="w-6 h-6 opacity-60"
            width="24"
            height="24"
            decoding="async"
          />
          <img
            src="/assets/icons/bolt-icons/bolt-icon-blue.svg"
            alt=""
            className="w-6 h-6 opacity-60"
            width="24"
            height="24"
            decoding="async"
          />
          <img
            src="/assets/icons/team-icons/team-icon-blue.svg"
            alt=""
            className="w-6 h-6 opacity-60"
            width="24"
            height="24"
            decoding="async"
          />
          <img
            src="/assets/icons/speaker-icons/speaker-icon-amber.svg"
            alt=""
            className="w-6 h-6 opacity-60"
            width="24"
            height="24"
            decoding="async"
          />
          <div className="flex-1 h-px bg-gradient-to-r from-brand-blue/20 to-transparent" />
          <img
            src="/assets/branding/aws-logo-white.svg"
            alt=""
            className="h-4 w-auto opacity-35"
            width="27"
            height="16"
            decoding="async"
          />
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on mobile to prevent overlap on short screens */}
      <motion.button
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-white/30 hover:text-brand-blue focus-visible:text-brand-blue transition-colors cursor-pointer border-0 bg-transparent"
        aria-label="Ir a la siguiente sección"
      >
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase font-mono" aria-hidden="true">scroll</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} aria-hidden="true" />
        </motion.div>
      </motion.button>
    </section>
  )
}
