import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LangSwitcher from './LangSwitcher'

const SECTION_IDS = ['inicio', 'sobre-nosotros', 'servicios', 'casos', 'equipo', 'faq', 'contacto']

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  const links = [
    { href: '#inicio',         id: 'inicio',         label: t('nav.inicio') },
    { href: '#sobre-nosotros', id: 'sobre-nosotros',  label: t('nav.sobre') },
    { href: '#servicios',      id: 'servicios',       label: t('nav.servicios') },
    { href: '#casos',          id: 'casos',           label: t('nav.casos') },
    { href: '#equipo',         id: 'equipo',          label: t('nav.equipo') },
    { href: '#faq',            id: 'faq',             label: t('nav.faq') },
    { href: '#contacto',       id: 'contacto',        label: t('nav.contacto') },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Detectar sección visible
      let current = 'inicio'
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // La sección se considera activa cuando su top entra en el tercio superior de la ventana
          if (rect.top <= window.innerHeight * 0.35) {
            current = id
          }
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 2rem', height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a href="#inicio" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 20px rgba(108,99,255,0.4)',
        }}>
          <Code2 size={20} color="white" />
        </div>
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.3rem',
          background: 'linear-gradient(135deg, #fff 0%, var(--primary-light) 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          YA&DAI
          <span style={{ fontWeight: 400, fontSize: '0.85rem', WebkitTextFillColor: 'var(--text-muted)' }}> Software</span>
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => {
          const isActive = active === l.id
          return (
            <a key={l.href} href={l.href}
              style={{
                color: isActive ? 'white' : 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive ? 600 : 500,
                transition: 'color 0.2s',
                position: 'relative',
                paddingBottom: '4px',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = isActive ? 'white' : 'var(--text-muted)'}
            >
              {l.label}
              {/* Underline indicator */}
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: 2, borderRadius: 2,
                    background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          )
        })}
        <LangSwitcher />
        <a href="#contacto" style={{
          padding: '0.5rem 1.25rem', borderRadius: 8,
          background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
          color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600,
          boxShadow: '0 4px 15px rgba(108,99,255,0.35)', transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(108,99,255,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(108,99,255,0.35)' }}
        >{t('nav.hablemos')}</a>
      </div>

      {/* Mobile button */}
      <button onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
        className="mobile-menu-btn"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '72px', left: 0, right: 0,
              background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--glass-border)',
              padding: '1.5rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '0.25rem',
            }}
          >
            {links.map(l => {
              const isActive = active === l.id
              return (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{
                    color: isActive ? 'white' : 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 500,
                    padding: '0.65rem 0.75rem',
                    borderRadius: 10,
                    background: isActive ? 'rgba(108,99,255,0.12)' : 'transparent',
                    borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  {l.label}
                </a>
              )
            })}
            <div style={{ paddingTop: '0.75rem' }}>
              <LangSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
