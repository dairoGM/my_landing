import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Star, Download, FileUser } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const MEMBER_META = [
  { gradient: 'linear-gradient(135deg, #6C63FF, #00D4AA)', accentColor: '#6C63FF', initials: 'D', cvFile: '/cv/CV_Dairo_Espanol.pdf', cvName: 'CV-Dairo-YA&DAI.pdf' },
  { gradient: 'linear-gradient(135deg, #FF6B9D, #FFB347)', accentColor: '#FF6B9D', initials: 'Y', cvFile: '/cv/CV_YamilaMateu_QA_PM1.0.pdf', cvName: 'CV-Yamila-YA&DAI.pdf' },
]

function CvButton({ cvFile, cvName, accentColor, label }) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = cvFile
    link.download = cvName
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button onClick={handleDownload} style={{
      marginTop: '1.5rem', width: '100%', padding: '0.85rem 1.25rem', borderRadius: 14,
      background: 'transparent', border: `1.5px dashed ${accentColor}60`,
      color: accentColor, fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
      transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
      fontFamily: 'Inter, sans-serif',
    }}
      onMouseEnter={e => { e.currentTarget.style.background = `${accentColor}15`; e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = `${accentColor}60`; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      <FileUser size={16} /> {label} <Download size={14} style={{ marginLeft: 'auto' }} />
    </button>
  )
}

export default function Team() {
  const { t } = useTranslation()
  const [ref, inView] = useInView(0.15)
  const members = t('team.members', { returnObjects: true })

  return (
    <section id="equipo" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--dark-2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: 6, background: 'rgba(0,212,170,0.12)', border: '1px solid rgba(0,212,170,0.3)', color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            {t('team.badge')}
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            {t('team.headline1')}{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--primary-light), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {t('team.headline2')}
            </span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>{t('team.desc')}</p>
        </motion.div>

        <div className="grid-2">
          {members.map((member, i) => {
            const meta = MEMBER_META[i]
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ padding: '2rem', borderRadius: 24, background: 'var(--dark-3)', border: '1px solid var(--glass-border)', position: 'relative', overflow: 'hidden', transition: 'border-color 0.25s, transform 0.25s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${meta.accentColor}50`; e.currentTarget.style.transform = 'translateY(-6px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: `radial-gradient(circle, ${meta.accentColor}12 0%, transparent 70%)`, pointerEvents: 'none' }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <div style={{ flexShrink: 0, width: 64, height: 64, borderRadius: 18, background: meta.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', fontWeight: 800, color: 'white', fontFamily: 'Space Grotesk, sans-serif', boxShadow: `0 8px 24px ${meta.accentColor}40` }}>
                    {meta.initials}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', background: meta.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.2rem' }}>
                      {member.name}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', fontWeight: 500 }}>{member.role}</p>
                    <div style={{ display: 'flex', gap: '0.2rem', marginTop: '0.35rem' }}>
                      {[...Array(5)].map((_, j) => <Star key={j} size={11} fill={meta.accentColor} color={meta.accentColor} />)}
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.9rem' }}>{member.desc}</p>

                <CvButton cvFile={meta.cvFile} cvName={meta.cvName} accentColor={meta.accentColor} label={member.cvLabel} />
                <p style={{ marginTop: '0.6rem', fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center' }}>{member.cvNote}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '2.5rem', padding: '2rem', borderRadius: 24, background: 'linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(0,212,170,0.08) 100%)', border: '1px solid rgba(108,99,255,0.25)', textAlign: 'center' }}
        >
          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>{t('team.banner')}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>{t('team.bannerDesc')}</p>
        </motion.div>
      </div>
    </section>
  )
}
