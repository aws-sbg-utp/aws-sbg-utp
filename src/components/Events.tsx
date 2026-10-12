import AnimatedSection from './AnimatedSection'
import { ArrowUpRight } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/content'
import { SectionTag } from './ui/SectionTag'
import { CtaButton } from './ui/CtaButton'

export default function Events() {
  return (
    <AnimatedSection
      id="eventos"
      className="section-padding bg-[#161d26]"
    >
      <div className="container-base">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="mb-4 inline-flex justify-center">
              <SectionTag label="04 // ENCUENTROS Y ACTIVIDADES" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Próximas actividades
            </h2>
            <p className="text-[#9aa3b0] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Publicamos las convocatorias y sesiones de la comunidad a través de Meetup.
            </p>
          </div>

          {/* Meetup Event Hub Card */}
          <div className="rounded-2xl bg-[#1e2736]/95 border border-[#44b4ff]/25 p-7 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Top status bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#03e582]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                  CANAL OFICIAL // MEETUP
                </span>
              </div>
              <span className="text-xs font-mono text-[#8b8e97]">
                Comunidad UTP • Pereira, Colombia
              </span>
            </div>

            {/* Card Content */}
            <div className="space-y-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#44b4ff]/10 border border-[#44b4ff]/25 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/assets/icons/speaker-icons/speaker-icon-blue.svg"
                    alt=""
                    className="w-7 h-7"
                    width="28"
                    height="28"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Actividades en Meetup
                  </h3>
                  <p className="text-[#9aa3b0] text-sm sm:text-base leading-relaxed">
                    Utilizamos Meetup como plataforma para anunciar los próximos encuentros y gestionar la asistencia a cada sesión.
                  </p>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <CtaButton
                  href={SOCIAL_LINKS.meetup}
                  variant="primary"
                  icon={ArrowUpRight}
                  id="events-cta-meetup"
                  className="w-full sm:w-auto"
                >
                  Consultar eventos en Meetup
                </CtaButton>
                <p className="text-xs font-mono text-[#8b8e97] text-center sm:text-right">
                  Abierto a la comunidad estudiantil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
