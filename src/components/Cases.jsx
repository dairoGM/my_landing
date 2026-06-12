import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Target, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const COLORS = ['#6C63FF', '#00D4AA', '#FF6B9D']
const GRADIENTS = [
  'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(108,99,255,0.04))',
  'linear-gradient(135deg, rgba(0,212,170,0.15), rgba(0,212,170,0.04))',
  'linear-gradient(135deg, rgba(255,107,157,0.15), rgba(255,107,157,0.04))',
]

export default function Cases() {
  const { t } = useTranslation()
  const [ref, inView] = useInView(0.1)
  const items = t('cases.items', { returnObjects: true })

  return (
    <section id="casos" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '30%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: 6, background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)', color: 'var(--primary-light)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            {t('cases.badge')}
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            {t('cases.headline1')}{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--primary-light), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {t('cases.headline2')}
            </span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>{t('cases.desc')}</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '1.5rem' }}>
          {items.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{ borderRadius: 24, background: 'var(--dark-3)', border: `1px solid rgba(${i === 0 ? '108,99,255' : i === 1 ? '0,212,170' : '255,107,157'},0.2)`, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.25s, box-shadow 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = `0 20px 50px ${COLORS[i]}18` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Card header */}
              <div style={{ padding: '1.75rem 1.75rem 1.25rem', background: GRADIENTS[i], borderBottom: `1px solid rgba(${i === 0 ? '108,99,255' : i === 1 ? '0,212,170' : '255,107,157'},0.15)` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: `${COLORS[i]}22`, border: `1px solid ${COLORS[i]}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS[i], flexShrink: 0 }}>
                    {c.icon === 'web' ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      : c.icon === 'mobile' ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                      : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                    }
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', color: COLORS[i], fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{c.sector}</p>
                    <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', lineHeight: 1.3 }}>{c.title}</h3>
                  </div>
                </div>
              </div>

              {/* RSR: Reto → Solución → Resultado */}
              <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.1rem', flex: 1 }}>
                {[
                  { icon: <Target size={14} />, label: t('cases.reto'), text: c.reto, color: '#FF6B9D' },
                  { icon: <Lightbulb size={14} />, label: t('cases.solucion'), text: c.solucion, color: '#FFB347' },
                  { icon: <TrendingUp size={14} />, label: t('cases.resultado'), text: c.resultado, color: '#00D4AA' },
                ].map((row, j) => (
                  <div key={j}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem', color: row.color }}>
                      {row.icon}
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{row.label}</span>
                    </div>
                    <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.6, paddingLeft: '1.35rem' }}>{row.text}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div style={{ padding: '1rem 1.75rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'flex-end' }}>
                <a href="#contacto" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: COLORS[i], textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600 }}>
                  {t('cases.similar')} <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '2rem', opacity: 0.6 }}
        >
          {t('cases.disclaimer')}
        </motion.p>
      </div>
    </section>
  )
}
