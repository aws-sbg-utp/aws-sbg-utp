import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NAV_ITEMS, SOCIAL_LINKS } from '../data/content'
import { CtaButton } from './ui/CtaButton'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        const toggleBtn = document.getElementById('mobile-menu-button')
        toggleBtn?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMenu()
    window.history.pushState(null, '', href)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#161d26]/95 backdrop-blur-md border-b border-[#44b4ff]/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
          }`}
        role="banner"
      >
        <div className="container-base">
          <nav
            className="flex items-center justify-between h-16"
            aria-label="Navegación principal"
          >
            {/* Logo — sbg-logo-simple.png as main brand mark */}
            <a
              href="#"
              className="flex items-center gap-2.5 flex-shrink-0 min-w-0"
              aria-label="AWS Student Builder Group UTP — inicio"
              onClick={(e) => {
                e.preventDefault()
                window.history.pushState(null, '', window.location.pathname)
                window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
              }}
            >
              <img
                src="/assets/branding/sbg-icon-blue.svg"
                alt="AWS Student Builder Group"
                className="h-8 w-8"
                width="32"
                height="32"
              />
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <CtaButton
                href={SOCIAL_LINKS.meetup}
                variant="primary"
                size="sm"
                icon={ArrowUpRight}
                id="nav-cta-desktop"
              >
                Ver eventos
              </CtaButton>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 text-white rounded-lg border border-white/10 hover:border-[#44b4ff]/40 focus-visible:border-[#44b4ff] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              id="mobile-menu-button"
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#161d26]/98 backdrop-blur-md border-b border-[#44b4ff]/10"
          >
            <div className="container-base py-4">
              <nav className="flex flex-col gap-1" aria-label="Menú móvil">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-white/80 hover:text-[#44b4ff] hover:bg-white/5 font-medium text-base py-3 px-3 rounded-md transition-colors"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <CtaButton
                  href={SOCIAL_LINKS.meetup}
                  variant="primary"
                  icon={ArrowUpRight}
                  id="nav-cta-meetup-mobile"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Ver eventos en Meetup
                </CtaButton>
                <CtaButton
                  href={SOCIAL_LINKS.whatsapp}
                  variant="outline-white"
                  id="nav-cta-whatsapp-mobile"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Únete a la comunidad
                </CtaButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}
