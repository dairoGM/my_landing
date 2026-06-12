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
      let current = 'inicio'
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id
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
        padding: '0 clamp(1rem, 3vw, 2rem)',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a href="#inicio" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 20px rgba(108,99,255,0.4)',
        }}>
          <Code2 size={18} color="white" />
        </div>
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 'clamp(1rem, 3vw, 1.3rem)',
          background: 'linear-gradient(135deg, #fff 0%, var(--primary-light) 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          YA&DAI
          <span style={{ fontWeight: 400, fontSize: '0.85rem', WebkitTextFillColor: 'var(--text-muted)' }}> Software</span>
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => {
          const isActive = active === l.id
          return (
            <a key={l.href} href={l.href}
              style={{
                color: isActive ? 'white' : 'var(--text-muted)',
                textDecoration: 'none', fontSize: '0.85rem',
                fontWeight: isActive ? 600 : 500,
                transition: 'color 0.2s', position: 'relative', paddingBottom: '4px',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = isActive ? 'white' : 'var(--text-muted)'}
            >
              {l.label}
              {isActive && (
                <motion.span layoutId="nav-indicator"
                  style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, borderRadius: 2, background: 'linear-gradient(90deg, var(--primary), var(--accent))' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          )
        })}
        <LangSwitcher />
        <a href="#contacto" style={{
          padding: '0.45rem 1.1rem', borderRadius: 8,
          background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
          color: 'white', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600,
          boxShadow: '0 4px 15px rgba(108,99,255,0.35)', transition: 'transform 0.2s, box-shadow 0.2s',
          whiteSpace: 'nowrap',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(108,99,255,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(108,99,255,0.35)' }}
        >{t('nav.hablemos')}</a>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none', padding: '0.25rem' }}
        className="mobile-menu-btn"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            style={{
              position: 'absolute', top: 64, left: 0, right: 0,
              background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--glass-border)',
              padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
              display: 'flex', flexDirection: 'column', gap: '0.2rem',
              maxHeight: 'calc(100vh - 64px)', overflowY: 'auto',
            }}
          >
            {links.map(l => {
              const isActive = active === l.id
              return (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{
                    color: isActive ? 'white' : 'var(--text-muted)',
                    textDecoration: 'none', fontSize: '0.95rem',
                    fontWeight: isActive ? 600 : 500,
                    padding: '0.6rem 0.75rem', borderRadius: 10,
                    background: isActive ? 'rgba(108,99,255,0.12)' : 'transparent',
                    borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  {l.label}
                </a>
              )
            })}
            <div style={{ paddingTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <LangSwitcher />
              <a href="#contacto" onClick={() => setOpen(false)} style={{
                padding: '0.55rem 1.25rem', borderRadius: 8,
                background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                color: 'white', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600,
                boxShadow: '0 4px 15px rgba(108,99,255,0.35)',
              }}>{t('nav.hablemos')}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
