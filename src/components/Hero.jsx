import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Globe, Smartphone, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const WA_DAIRO = 'https://wa.me/5355848425'

function openWhatsApp(msg) {
  window.open(`${WA_DAIRO}?text=${encodeURIComponent(msg)}`, '_blank')
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="inicio" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '7rem 1.5rem 4rem',
    }}>
      {/* Glows — tamaño relativo al viewport para no desbordar */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: 'clamp(260px, 45vw, 500px)', height: 'clamp(260px, 45vw, 500px)', background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '8%', right: '2%', width: 'clamp(200px, 35vw, 400px)', height: 'clamp(200px, 35vw, 400px)', background: 'radial-gradient(circle, rgba(0,212,170,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)`, backgroundSize: 'clamp(40px, 8vw, 60px) clamp(40px, 8vw, 60px)' }} />

      <div style={{ maxWidth: 900, width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: 100, border: '1px solid rgba(108,99,255,0.4)', background: 'rgba(108,99,255,0.1)', marginBottom: '1.75rem', fontSize: '0.8rem', fontWeight: 500, color: 'var(--primary-light)' }}
        >
          <Sparkles size={13} /> {t('hero.badge')}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}
        >
          {t('hero.headline1')}{' '}
          <span style={{ background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--accent) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {t('hero.headline2')}
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto 2.25rem', lineHeight: 1.8 }}
        >
          {t('hero.desc')}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.82rem clamp(1.25rem, 4vw, 1.75rem)', borderRadius: 12, background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.92rem', boxShadow: '0 8px 30px rgba(108,99,255,0.4)', transition: 'transform 0.2s, box-shadow 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(108,99,255,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(108,99,255,0.4)' }}
          >
            {t('hero.cta1')} <ArrowRight size={17} />
          </a>
          <button
            onClick={() => openWhatsApp(t('hero.waMessage'))}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.82rem clamp(1.25rem, 4vw, 1.75rem)', borderRadius: 12, background: '#25D366', border: 'none', color: 'white', fontWeight: 600, fontSize: '0.92rem', cursor: 'pointer', boxShadow: '0 8px 30px rgba(37,211,102,0.35)', transition: 'transform 0.2s, box-shadow 0.2s', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,211,102,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.35)' }}
          >
            <Phone size={16} /> {t('hero.cta2')}
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: 'flex', gap: 'clamp(1.5rem, 5vw, 3rem)', justifyContent: 'center', marginTop: '4rem', flexWrap: 'wrap' }}
        >
          {[
            { icon: <Globe size={18} />, value: t('hero.stat1value'), label: t('hero.stat1label') },
            { icon: <Smartphone size={18} />, value: t('hero.stat2value'), label: t('hero.stat2label') },
            { icon: <Sparkles size={18} />, value: t('hero.stat3value'), label: t('hero.stat3label') },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', color: 'var(--primary-light)', marginBottom: '0.25rem' }}>
                {s.icon}
                <span style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 700, color: 'white' }}>{s.value}</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
