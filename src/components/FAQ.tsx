import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionTag } from './ui/SectionTag'
import { FAQ_ITEMS } from '../data/content'
import { EASE_SMOOTH } from '../lib/motion'

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('costo')
  const prefersReducedMotion = useReducedMotion()

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="faq"
      className="section-padding bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="container-base">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-14">
            <div className="mb-4 inline-flex justify-center">
              <SectionTag label="07 // PREGUNTAS FRECUENTES" variant="light" />
            </div>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight mb-4"
            >
              Preguntas frecuentes
            </h2>
            <p className="text-muted-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Respuestas a dudas habituales sobre la comunidad, requisitos y cómo participar.
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id
              const btnId = `faq-btn-${item.id}`
              const panelId = `faq-panel-${item.id}`

              return (
                <div
                  key={item.id}
                  className={`rounded-xl bg-surface-subtle border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-brand-blue-dark shadow-sm' : 'border-navy/10 hover:border-brand-blue-dark/40'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={btnId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 font-bold text-navy text-base sm:text-lg hover:text-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-dark transition-colors cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        size={20}
                        className={`text-brand-blue-dark transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: EASE_SMOOTH }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-muted-light text-sm sm:text-base leading-relaxed border-t border-navy/8">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
