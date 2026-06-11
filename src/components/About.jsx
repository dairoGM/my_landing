import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Target, Lightbulb, Users, Award } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ICONS = [<Target size={22} />, <Lightbulb size={22} />, <Users size={22} />, <Award size={22} />]

export default function About() {
  const { t } = useTranslation()
  const [ref, inView] = useInView(0.15)
  const values = t('about.values', { returnObjects: true })

  return (
    <section id="sobre-nosotros" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--dark-2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="grid-2">

          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: 6, background: 'rgba(0,212,170,0.12)', border: '1px solid rgba(0,212,170,0.3)', color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              {t('about.badge')}
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              {t('about.headline1')}{' '}
              <span style={{ background: 'linear-gradient(135deg, var(--primary-light), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {t('about.headline2')}
              </span>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '1rem' }}
              dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '1rem' }}>{t('about.p2')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
            className="grid-values"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignContent: 'start' }}
          >
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                style={{ padding: '1.25rem', borderRadius: 16, background: 'var(--glass)', border: '1px solid var(--glass-border)', transition: 'border-color 0.2s, transform 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,170,0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)', marginBottom: '0.65rem' }}>
                  {ICONS[i]}
                </div>
                <h4 style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text)' }}>{v.title}</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
