import AnimatedSection from './AnimatedSection'
import { ArrowUpRight } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/content'
import { SectionTag } from './ui/SectionTag'
import { CtaButton } from './ui/CtaButton'

export default function FinalCTA() {
  return (
    <AnimatedSection
      id="unete"
      className="section-padding bg-navy-darker relative overflow-hidden"
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 grid-dot-pattern pointer-events-none"
        aria-hidden="true"
      />
      {/* Top accent — clear visual boundary from Community (white) */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle centered glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-brand-blue/6 blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-base relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Editorial Tag */}
          <div className="inline-flex justify-center mb-6">
            <SectionTag label="EMPIEZA CON NOSOTROS" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.12] tracking-tight text-balance mb-5">
            Conéctate al próximo encuentro
          </h2>

          <p className="text-muted-dark text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed text-pretty">
            Únete al grupo de WhatsApp para conocer las novedades o consulta en Meetup las sesiones
            programadas. La comunidad está abierta para ti.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center mb-8">
            <CtaButton
              href={SOCIAL_LINKS.meetup}
              variant="primary"
              icon={ArrowUpRight}
              id="final-cta-meetup"
            >
              Consultar eventos en Meetup
            </CtaButton>
            <CtaButton
              href={SOCIAL_LINKS.whatsapp}
              variant="outline-white"
              id="final-cta-whatsapp"
            >
              Entrar al grupo de WhatsApp
            </CtaButton>
          </div>

          <p className="text-xs text-text-subtle-dark tracking-wide">
            Universidad Tecnológica de Pereira • Pereira, Colombia
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
