import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Globe, Smartphone, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const WA_DAIRO  = 'https://wa.me/5355848425'
const WA_YAMILA = 'https://wa.me/5353572771'

function openWhatsApp(msg) {
  const encoded = encodeURIComponent(msg)
  // Open Dairo's WhatsApp with pre-filled message
  window.open(`${WA_DAIRO}?text=${encoded}`, '_blank')
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="inicio" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '7rem 2rem 4rem',
    }}>
      <div style={{ position: 'absolute', top: '15%', left: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,212,170,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div style={{ maxWidth: 900, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: 100, border: '1px solid rgba(108,99,255,0.4)', background: 'rgba(108,99,255,0.1)', marginBottom: '2rem', fontSize: '0.82rem', fontWeight: 500, color: 'var(--primary-light)' }}
        >
          <Sparkles size={14} /> {t('hero.badge')}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}
        >
          {t('hero.headline1')}{' '}
          <span style={{ background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--accent) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {t('hero.headline2')}
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto 2.5rem', lineHeight: 1.8 }}
        >
          {t('hero.desc')}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', padding: '0 1rem' }}
        >
          <a href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', borderRadius: 12, background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', boxShadow: '0 8px 30px rgba(108,99,255,0.4)', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(108,99,255,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(108,99,255,0.4)' }}
          >
            {t('hero.cta1')} <ArrowRight size={18} />
          </a>
          <button
            onClick={() => openWhatsApp(t('hero.waMessage'))}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', borderRadius: 12, background: '#25D366', border: 'none', color: 'white', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 8px 30px rgba(37,211,102,0.35)', transition: 'transform 0.2s, box-shadow 0.2s', fontFamily: 'Inter, sans-serif' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,211,102,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.35)' }}
          >
            <Phone size={17} /> {t('hero.cta2')}
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '4rem', flexWrap: 'wrap', padding: '0 1rem' }}
        >
          {[
            { icon: <Globe size={20} />, value: t('hero.stat1value'), label: t('hero.stat1label') },
            { icon: <Smartphone size={20} />, value: t('hero.stat2value'), label: t('hero.stat2label') },
            { icon: <Sparkles size={20} />, value: t('hero.stat3value'), label: t('hero.stat3label') },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', color: 'var(--primary-light)', marginBottom: '0.25rem' }}>
                {s.icon}
                <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white' }}>{s.value}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
