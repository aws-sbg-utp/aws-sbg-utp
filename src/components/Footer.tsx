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
  { label: '¿Qué es?', href: '#que-es' },
  { label: '¿Qué hacemos?', href: '#que-hacemos' },
  { label: 'Nuestro camino', href: '#nuestro-camino' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Comunidad', href: '#comunidad' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Preguntas frecuentes', href: '#faq' },
]

export default function Footer() {
  return (
    <footer
      className="bg-[#161d26] border-t-2 border-[#44b4ff]/20"
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
              />
            </div>
            <p className="text-[#9aa3b0] text-sm leading-relaxed max-w-xs mb-1">
              Comunidad de estudiantes de la Universidad Tecnológica de Pereira para aprender y construir en torno a AWS y computación en la nube.
            </p>

            {/* Email */}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="inline-flex items-center gap-2 mt-4 text-[#9aa3b0] hover:text-[#44b4ff] focus-visible:text-[#44b4ff] text-sm transition-colors"
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
                className="h-4 w-auto opacity-20"
                width="27"
                height="16"
              />
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-4">
              // NAVEGACIÓN
            </h3>
            <nav aria-label="Links del footer">
              <ul className="space-y-2.5" role="list">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#9aa3b0] hover:text-[#44b4ff] focus-visible:text-[#44b4ff] text-sm transition-colors"
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
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-4">
              // CANALES
            </h3>
            <ul className="space-y-2.5" role="list">
              {SOCIAL_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#9aa3b0] hover:text-[#44b4ff] focus-visible:text-[#44b4ff] text-sm transition-colors"
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#9aa3b0] text-xs">
            © {CURRENT_YEAR} AWS Student Builder Group at UTP. Todos los derechos reservados.
          </p>
          <p className="text-[#9aa3b0] text-xs">
            Pereira, Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
