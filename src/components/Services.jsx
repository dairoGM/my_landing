import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Globe, Smartphone, Database, Settings, BarChart3, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ICONS  = [<Globe size={28} />, <Smartphone size={28} />, <Database size={28} />, <Settings size={28} />, <BarChart3 size={28} />, <ShieldCheck size={28} />]
const COLORS = ['#6C63FF', '#00D4AA', '#FF6B9D', '#FFB347', '#9B59B6', '#3498DB']

export default function Services() {
  const { t } = useTranslation()
  const [ref, inView] = useInView(0.1)
  const items = t('services.items', { returnObjects: true })

  return (
    <section id="servicios" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(108,99,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: 6, background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)', color: 'var(--primary-light)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            {t('services.badge')}
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            {t('services.headline1')}{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--primary-light), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {t('services.headline2')}
            </span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>{t('services.desc')}</p>
        </motion.div>

        <div className="grid-auto">
          {items.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ padding: '1.75rem', borderRadius: 20, background: 'var(--dark-3)', border: '1px solid var(--glass-border)', position: 'relative', overflow: 'hidden', transition: 'border-color 0.25s, transform 0.25s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${COLORS[i]}50`; e.currentTarget.style.transform = 'translateY(-6px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ position: 'absolute', top: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: `radial-gradient(circle, ${COLORS[i]}22 0%, transparent 70%)`, pointerEvents: 'none' }} />
              <div style={{ width: 52, height: 52, borderRadius: 14, background: `${COLORS[i]}1A`, border: `1px solid ${COLORS[i]}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS[i], marginBottom: '1.25rem' }}>
                {ICONS[i]}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem', color: 'var(--text)' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
