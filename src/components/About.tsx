import AnimatedSection from './AnimatedSection'
import { SectionTag } from './ui/SectionTag'

export default function About() {
  return (
    <AnimatedSection
      id="sobre-el-grupo"
      className="section-padding bg-surface-subtle border-t border-navy/6"
    >
      <div className="container-base">
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-start">
          {/* Left: Tag, heading and official UTP seal */}
          <div>
            <div className="mb-4">
              <SectionTag label="SOBRE LA COMUNIDAD" variant="light" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-[1.12] tracking-tight text-balance mb-8">
              Una iniciativa estudiantil para aprender cloud juntos
            </h2>

            {/* Official UTP institutional seal card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-navy/10 inline-flex items-center gap-4 max-w-md shadow-sm">
              <img
                src="/assets/branding/sbg-logo-utp.webp"
                alt="Logo AWS Student Builder Group UTP"
                className="w-14 h-14 rounded-xl object-cover border border-navy/8 flex-shrink-0"
                width="56"
                height="56"
                decoding="async"
              />
              <div className="text-xs text-muted-light leading-snug">
                <span className="font-bold text-navy text-sm block mb-1">Comunidad UTP</span>
                Comunidad de estudiantes en la Universidad Tecnológica de Pereira.
              </div>
            </div>
          </div>

          {/* Right: Editorial narrative */}
          <div className="space-y-6 lg:pt-2">
            <p className="text-navy text-lg sm:text-xl font-normal leading-relaxed text-pretty">
              El <strong className="font-bold">AWS Student Builder Group UTP</strong> reúne a estudiantes
              interesados en entender cómo funciona la nube en la práctica. No somos un curso formal
              ni una asignatura académica: nos organizamos de manera colaborativa para estudiar
              conceptos, preparar actividades técnicas y ayudarnos mutuamente a avanzar.
            </p>

            <p className="text-muted-light text-base sm:text-lg font-normal leading-relaxed text-pretty">
              La comunidad está abierta a toda la comunidad estudiantil de la Universidad
              Tecnológica de Pereira, sin importar si estás en tus primeros semestres o cursando
              materias avanzadas, y sin requerir conocimientos técnicos previos sobre Amazon Web
              Services.
            </p>

            {/* AWS endorsement note */}
            <div className="flex items-start gap-3.5 text-muted-light text-sm leading-relaxed border-t border-navy/10 pt-5">
              <img
                src="/assets/branding/aws-logo-normal.svg"
                alt="Amazon Web Services"
                className="h-5 w-auto mt-0.5 flex-shrink-0"
                width="34"
                height="20"
                decoding="async"
              />
              <p>
                AWS Student Builder Groups es un programa de Amazon Web Services que apoya a
                comunidades impulsadas por estudiantes en distintas universidades del mundo,
                facilitando recursos y conexión con el ecosistema cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
