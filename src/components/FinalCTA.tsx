import AnimatedSection from './AnimatedSection'
import { ArrowUpRight } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/content'
import { SectionTag } from './ui/SectionTag'
import { CtaButton } from './ui/CtaButton'

export default function FinalCTA() {
  return (
    // bg-[#0f1520] — slightly darker than navbar sections for clear separation from footer
    <AnimatedSection
      id="unete"
      className="section-padding bg-[#0f1520] relative overflow-hidden"
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 grid-dot-pattern pointer-events-none"
        aria-hidden="true"
      />
      {/* Top accent — clear visual boundary from Community (white) */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#44b4ff]/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle centered glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-[#44b4ff]/6 blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-base relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Technical Tag */}
          <div className="inline-flex justify-center mb-6">
            <SectionTag label="EMPIEZA HOY // UTP BUILDERS" hasDot />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.12] tracking-tight mb-5">
            ¿Listo para empezar
            <br />
            <span className="text-gradient-blue">a construir en la nube?</span>
          </h2>

          <p className="text-[#9aa3b0] text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Encuentra las próximas sesiones en Meetup o comunícate a través del grupo de WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center mb-8">
            <CtaButton
              href={SOCIAL_LINKS.meetup}
              variant="primary"
              icon={ArrowUpRight}
              id="final-cta-meetup"
            >
              Ver eventos en Meetup
            </CtaButton>
            <CtaButton
              href={SOCIAL_LINKS.whatsapp}
              variant="outline-white"
              id="final-cta-whatsapp"
            >
              Únete a la comunidad
            </CtaButton>
          </div>

          <p className="text-xs font-mono text-[#9aa3b0] tracking-wider uppercase">
            // UNIVERSIDAD TECNOLÓGICA DE PEREIRA
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
