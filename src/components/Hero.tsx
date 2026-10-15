import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, MapPin, Users, Sparkles, CheckCircle2 } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/content'
import { SectionTag } from './ui/SectionTag'
import { CtaButton } from './ui/CtaButton'
import { createFadeUp } from '../lib/motion'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const fadeUp = (delay = 0) => createFadeUp(delay, prefersReducedMotion)

  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-navy pt-24 pb-16 lg:py-28"
      aria-label="Presentación principal"
    >
      {/* Subtle architectural dot grid */}
      <div
        className="absolute inset-0 grid-dot-pattern pointer-events-none opacity-60"
        aria-hidden="true"
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle radial ambient gradients */}
      <div
        className="absolute -top-32 -left-32 w-[460px] h-[460px] rounded-full bg-brand-blue/6 blur-[110px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-16 w-[360px] h-[360px] rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-base relative z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, description, and CTAs */}
          <div className="lg:col-span-7">
            {/* Editorial Badge */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <SectionTag label="COMUNIDAD ESTUDIANTIL UTP" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              {...fadeUp(0.18)}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6 text-balance max-w-2xl"
            >
              Computación en la nube desde el campus universitario.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.26)}
              className="text-muted-dark text-lg sm:text-xl leading-relaxed mb-8 max-w-xl text-pretty"
            >
              Somos el AWS Student Builder Group de la Universidad Tecnológica de Pereira: un
              espacio abierto para estudiantes de cualquier programa que quieren aprender sobre
              arquitectura cloud, experimentar con servicios de AWS y compartir proyectos en
              comunidad.
            </motion.p>

            {/* CTAs — Meetup primary, WhatsApp secondary */}
            <motion.div
              {...fadeUp(0.34)}
              className="flex flex-col sm:flex-row gap-3.5 mb-6"
            >
              <CtaButton
                href={SOCIAL_LINKS.meetup}
                variant="primary"
                icon={ArrowUpRight}
                id="hero-cta-meetup"
              >
                Ver actividades en Meetup
              </CtaButton>
              <CtaButton
                href={SOCIAL_LINKS.whatsapp}
                variant="outline-white"
                id="hero-cta-whatsapp"
              >
                Unirse al grupo de WhatsApp
              </CtaButton>
            </motion.div>

            {/* Institutional note */}
            <motion.p
              {...fadeUp(0.4)}
              className="text-xs text-text-subtle-dark tracking-wide flex items-center gap-2"
            >
              <span>Comunidad estudiantil UTP</span>
              <span className="text-white/20">•</span>
              <span>Programa AWS Student Builder Groups</span>
            </motion.p>
          </div>

          {/* Right Column: Authentic Community Identity Card */}
          <div className="lg:col-span-5">
            <motion.div
              {...fadeUp(0.28)}
              className="relative rounded-2xl bg-navy-card/95 border border-white/10 p-6 sm:p-7 shadow-2xl overflow-hidden backdrop-blur-sm"
            >
              {/* Card top bar with official UTP chapter seal */}
              <div className="flex items-center justify-between pb-5 border-b border-white/8 mb-6">
                <div className="flex items-center gap-3.5">
                  <img
                    src="/assets/branding/sbg-logo-utp.webp"
                    alt="Sello oficial AWS SBG UTP"
                    className="w-12 h-12 rounded-lg object-cover border border-white/10 shadow-sm flex-shrink-0"
                    width="48"
                    height="48"
                  />
                  <div>
                    <span className="font-bold text-white text-base block leading-tight">
                      Comunidad UTP
                    </span>
                    <span className="text-xs text-muted-dark flex items-center gap-1 mt-0.5">
                      <MapPin size={12} className="text-brand-blue" aria-hidden="true" />
                      Pereira, Risaralda
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="/assets/branding/aws-logo-white.svg"
                    alt="Amazon Web Services"
                    className="h-4 w-auto opacity-70"
                    width="27"
                    height="16"
                  />
                </div>
              </div>

              {/* Ficha comunitaria real */}
              <div className="space-y-3.5 text-sm text-muted-dark leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-brand-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="text-white font-medium block">Sede académica</strong>
                    <span>Universidad Tecnológica de Pereira</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users size={16} className="text-brand-orange mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="text-white font-medium block">Participación</strong>
                    <span>Abierta a estudiantes de todas las facultades y semestres</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles size={16} className="text-brand-green mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="text-white font-medium block">Modalidad de actividades</strong>
                    <span>Encuentros presenciales en campus y sesiones virtuales</span>
                  </div>
                </div>
              </div>

              {/* Transparent metrics strip */}
              <div className="mt-6 pt-5 border-t border-white/8 grid grid-cols-3 gap-2 text-center">
                <div className="bg-white/5 rounded-lg py-2.5 px-2">
                  <span className="text-xs font-bold text-white block">100% Libre</span>
                  <span className="text-[11px] text-muted-dark">Sin costo</span>
                </div>
                <div className="bg-white/5 rounded-lg py-2.5 px-2">
                  <span className="text-xs font-bold text-white block">Desde cero</span>
                  <span className="text-[11px] text-muted-dark">Sin requisitos</span>
                </div>
                <div className="bg-white/5 rounded-lg py-2.5 px-2">
                  <span className="text-xs font-bold text-white block">Entre pares</span>
                  <span className="text-[11px] text-muted-dark">Colaborativo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
