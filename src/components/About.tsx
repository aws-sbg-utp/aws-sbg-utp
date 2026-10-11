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
                <span className="font-bold text-[#161d26] text-sm block mb-1">Capítulo Oficial UTP</span>
                Comunidad estudiantil avalada en la Universidad Tecnológica de Pereira.
              </div>
            </div>
          </div>

          {/* Right: Editorial content and structural breakdown */}
          <div className="space-y-8">
            <p className="text-[#161d26] text-lg sm:text-xl font-normal leading-relaxed">
              Somos una comunidad oficial creada por estudiantes de la{' '}
              <strong className="font-bold text-[#161d26]">Universidad Tecnológica de Pereira (UTP)</strong>.
              Un espacio abierto para cualquier estudiante, sin importar su semestre o carrera,
              enfocado en aprender sobre Amazon Web Services y arquitectura en la nube mediante proyectos reales.
            </p>

            {/* Three key pillars breakdown */}
            <div className="grid sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-lg bg-[#f8fafc] border border-[#161d26]/6">
                <div className="text-[10px] font-mono font-bold text-[#1a6fa0] uppercase mb-1">01 // ACCESO</div>
                <div className="font-bold text-[#161d26] text-sm mb-1.5">Desde Cero</div>
                <div className="text-xs text-[#526071] leading-relaxed">Sin experiencia previa ni requisitos de carrera. 100% gratuito.</div>
              </div>
              <div className="p-4 rounded-lg bg-[#f8fafc] border border-[#161d26]/6">
                <div className="text-[10px] font-mono font-bold text-[#1a6fa0] uppercase mb-1">02 // PRÁCTICA</div>
                <div className="font-bold text-[#161d26] text-sm mb-1.5">Hands-On Real</div>
                <div className="text-xs text-[#526071] leading-relaxed">Consola de AWS, arquitectura real y despliegues paso a paso.</div>
              </div>
              <div className="p-4 rounded-lg bg-[#f8fafc] border border-[#161d26]/6">
                <div className="text-[10px] font-mono font-bold text-[#1a6fa0] uppercase mb-1">03 // RED</div>
                <div className="font-bold text-[#161d26] text-sm mb-1.5">Comunidad UTP</div>
                <div className="text-xs text-[#526071] leading-relaxed">Networking entre pares y preparación para certificaciones oficiales.</div>
              </div>
            </div>

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
                AWS Student Builder Groups son comunidades estudiantiles respaldadas
                por Amazon Web Services en universidades de todo el mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
