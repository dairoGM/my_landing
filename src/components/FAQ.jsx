import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const { t } = useTranslation()
  const [ref, inView] = useInView(0.1)
  const [open, setOpen] = useState(null)
  const items = t('faq.items', { returnObjects: true })

  return (
    <section id="faq" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--dark-2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: 6, background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.3)', color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            {t('faq.badge')}
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            {t('faq.headline1')}{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--primary-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {t('faq.headline2')}
            </span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>{t('faq.desc')}</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{ borderRadius: 16, background: 'var(--dark-3)', border: `1px solid ${isOpen ? 'rgba(0,212,170,0.3)' : 'var(--glass-border)'}`, overflow: 'hidden', transition: 'border-color 0.25s' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{ width: '100%', padding: '1.25rem 1.5rem', background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', textAlign: 'left', fontFamily: 'Inter, sans-serif' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={16} color={isOpen ? 'var(--accent)' : 'var(--text-muted)'} style={{ flexShrink: 0, transition: 'color 0.2s' }} />
                    <span style={{ fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.4 }}>{item.q}</span>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0 }}>
                    <ChevronDown size={18} color={isOpen ? 'var(--accent)' : 'var(--text-muted)'} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 1.5rem 1.25rem 3.25rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginTop: '2.5rem', padding: '1.75rem 2rem', borderRadius: 20, background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(0,212,170,0.08))', border: '1px solid rgba(108,99,255,0.2)', textAlign: 'center' }}
        >
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>{t('faq.ctaText')}</p>
          <a href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.75rem', borderRadius: 10, background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem', boxShadow: '0 6px 20px rgba(108,99,255,0.35)', transition: 'transform 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {t('faq.ctaBtn')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
