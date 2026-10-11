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
              <SectionTag label="04 // ACTIVIDADES Y TALLERES" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Agenda y próximos eventos
            </h2>
            <p className="text-[#9aa3b0] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Talleres técnicos, laboratorios en vivo y sesiones de networking en el campus de la UTP.
            </p>
          </div>

          {/* Meetup Event Hub Card */}
          <div className="rounded-2xl bg-[#1e2736]/95 border border-[#44b4ff]/25 p-7 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Top status bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#03e582] animate-pulse" aria-hidden="true" />
                <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                  CONVOCATORIA ACTIVA // MEETUP
                </span>
              </div>
              <span className="text-xs font-mono text-[#8b8e97]">
                Campus UTP • Pereira, Colombia
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
                    Talleres prácticos y grupos de estudio
                  </h3>
                  <p className="text-[#9aa3b0] text-sm sm:text-base leading-relaxed">
                    Publicamos cada una de nuestras actividades oficiales en Meetup. Al unirte al grupo recibes recordatorios de fecha, temarios previos y enlace de registro a laboratorios.
                  </p>
                </div>
              </div>

              {/* Format badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2">
                <span className="text-xs font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[#c0c8d2]">
                  ▸ Hands-on Labs
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[#c0c8d2]">
                  ▸ Cloud Practitioner Prep
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[#c0c8d2]">
                  ▸ Tech Talks
                </span>
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
                  Ver agenda en Meetup
                </CtaButton>
                <p className="text-xs font-mono text-[#8b8e97] text-center sm:text-right">
                  100% gratuito • Abierto a la comunidad UTP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
