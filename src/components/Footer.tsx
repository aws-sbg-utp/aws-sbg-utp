import { Mail, ArrowUpRight } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/content'

const CURRENT_YEAR = new Date().getFullYear()

interface SocialItem {
  label: string
  href: string
  ariaLabel: string
}

const SOCIAL_ITEMS: SocialItem[] = [
  { label: 'Meetup', href: SOCIAL_LINKS.meetup, ariaLabel: 'Ver eventos en Meetup' },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, ariaLabel: 'Instagram de AWS SBG UTP' },
  { label: 'WhatsApp', href: SOCIAL_LINKS.whatsapp, ariaLabel: 'Unirse al WhatsApp de la comunidad' },
  { label: 'GitHub', href: SOCIAL_LINKS.github, ariaLabel: 'GitHub de AWS SBG UTP' },
  { label: 'YouTube', href: SOCIAL_LINKS.youtube, ariaLabel: 'YouTube de AWS SBG UTP' },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, ariaLabel: 'LinkedIn de AWS SBG UTP' },
]

const FOOTER_LINKS = [
  { label: 'Sobre el grupo', href: '#sobre-el-grupo' },
  { label: 'Dinámica', href: '#dinamica' },
  { label: 'Cómo participar', href: '#como-participar' },
  { label: 'Encuentros', href: '#encuentros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Preguntas frecuentes', href: '#faq' },
]

export default function Footer() {
  return (
    <footer
      className="bg-navy border-t border-white/10"
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="container-base py-12">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10 pb-10 border-b border-white/8">

          {/* Brand column — SBG as primary */}
          <div>
            <div className="mb-5">
              <img
                src="/assets/branding/sbg-logo-simple.png"
                alt="AWS Student Builder Group"
                className="h-10 w-10"
                width="40"
                height="40"
                decoding="async"
              />
            </div>
            <p className="text-muted-dark text-sm leading-relaxed max-w-xs mb-1">
              Comunidad de estudiantes de la Universidad Tecnológica de Pereira orientada al
              aprendizaje y práctica de computación en la nube con Amazon Web Services.
            </p>

            {/* Email */}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="inline-flex items-center gap-2 mt-4 text-muted-dark hover:text-brand-blue focus-visible:text-brand-blue text-sm transition-colors"
              aria-label={`Enviar correo a ${SOCIAL_LINKS.email}`}
            >
              <Mail size={14} aria-hidden="true" />
              {SOCIAL_LINKS.email}
            </a>

            {/* AWS logo — secondary branding context */}
            <div className="mt-6">
              <img
                src="/assets/branding/aws-logo-white.svg"
                alt="Amazon Web Services"
                className="h-4 w-auto opacity-30"
                width="27"
                height="16"
                decoding="async"
              />
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <nav aria-label="Links del footer">
              <ul className="space-y-2.5" role="list">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted-dark hover:text-brand-blue focus-visible:text-brand-blue text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Canales oficiales
            </h3>
            <ul className="space-y-2.5" role="list">
              {SOCIAL_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted-dark hover:text-brand-blue focus-visible:text-brand-blue text-sm transition-colors"
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                    <ArrowUpRight size={11} aria-hidden="true" className="opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-dark">
          <p>
            © {CURRENT_YEAR} AWS Student Builder Group at UTP. Comunidad universitaria independiente
            respaldada por el programa AWS Student Builder Groups.
          </p>
          <p>
            Pereira, Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
