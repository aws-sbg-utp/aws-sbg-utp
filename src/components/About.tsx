import AnimatedSection from './AnimatedSection'
import { SectionTag } from './ui/SectionTag'

export default function About() {
  return (
    <AnimatedSection
      id="que-es"
      className="section-padding bg-white"
    >
      <div className="container-base">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">

          {/* Left: Section tag, heading and official UTP seal */}
          <div>
            <div className="mb-4">
              <SectionTag label="01 // SOBRE NOSOTROS" variant="light" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#161d26] leading-[1.1] tracking-tight mb-8">
              ¿Qué es el AWS<br />Student Builder Group?
            </h2>

            {/* Official UTP + SBG institutional seal */}
            <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#161d26]/8 inline-flex items-center gap-4 max-w-md">
              <img
                src="/assets/branding/sbg-logo-utp.jpeg"
                alt="Logo AWS Student Builder Group UTP"
                className="w-16 h-16 rounded-lg object-cover border border-[#161d26]/10 shadow-sm flex-shrink-0"
                width="64"
                height="64"
              />
              <div className="text-xs text-[#526071] leading-snug">
                <span className="font-bold text-[#161d26] text-sm block mb-1">Capítulo UTP</span>
                Comunidad estudiantil en la Universidad Tecnológica de Pereira.
              </div>
            </div>
          </div>

          {/* Right: Editorial content */}
          <div className="space-y-6">
            <p className="text-[#161d26] text-lg sm:text-xl font-normal leading-relaxed">
              Somos una comunidad de estudiantes de la{' '}
              <strong className="font-bold text-[#161d26]">Universidad Tecnológica de Pereira (UTP)</strong>{' '}
              enfocada en el aprendizaje colaborativo de tecnologías cloud y Amazon Web Services mediante proyectos y práctica guiada.
            </p>

            <p className="text-[#526071] text-base sm:text-lg font-normal leading-relaxed">
              El espacio está abierto a estudiantes de cualquier programa académico y semestre, con o sin experiencia previa en tecnología.
            </p>

            {/* AWS endorsement note */}
            <div className="flex items-start gap-3.5 text-[#526071] text-sm leading-relaxed border-t border-[#161d26]/8 pt-5">
              <img
                src="/assets/branding/aws-logo-normal.svg"
                alt="Amazon Web Services"
                className="h-5 w-auto mt-0.5 flex-shrink-0"
                width="34"
                height="20"
              />
              <p>
                AWS Student Builder Groups es un programa de Amazon Web Services que apoya a comunidades impulsadas por estudiantes en distintas universidades del mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
