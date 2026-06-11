import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Send, MessageCircle, Mail, User, FileText, Loader2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SuccessModal from './SuccessModal'
import { sendContactForm } from '../services/sendNotifications'

const WA_DAIRO  = 'https://wa.me/5355848425'
const WA_YAMILA = 'https://wa.me/5353572771'

const inputBase = {
  width: '100%', padding: '0.85rem 1rem', borderRadius: 12,
  background: 'var(--dark-4)', border: '1px solid var(--glass-border)',
  color: 'var(--text)', fontSize: '0.92rem', outline: 'none',
  transition: 'border-color 0.2s', fontFamily: 'Inter, sans-serif',
}

export default function Contact() {
  const { t } = useTranslation()
  const [ref, inView] = useInView(0.1)
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [error, setError]     = useState('')

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))
  const isValid = form.name && form.email && form.subject && form.message

  const handleSend = async () => {
    if (!isValid || loading) return
    setLoading(true)
    setError('')
    try {
      await sendContactForm(form)
      setForm({ name: '', email: '', subject: '', message: '' })
      setShowModal(true)
    } catch {
      setError(t('contact.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SuccessModal open={showModal} onClose={() => setShowModal(false)} />

      <section id="contacto" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, background: 'radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="grid-2">

            {/* Left info */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
              <div style={{ display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: 6, background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)', color: 'var(--primary-light)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                {t('contact.badge')}
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                {t('contact.headline1')}{' '}
                <span style={{ background: 'linear-gradient(135deg, var(--primary-light), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {t('contact.headline2')}
                </span>
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>{t('contact.desc')}</p>

              {[
                { label: t('contact.labelDairo'),  value: '+53 55848425', href: WA_DAIRO },
                { label: t('contact.labelYamila'), value: '+53 53572771', href: WA_YAMILA },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', borderRadius: 14, background: 'var(--dark-3)', border: '1px solid var(--glass-border)', textDecoration: 'none', marginBottom: '0.75rem', transition: 'border-color 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#25D36650'; e.currentTarget.style.transform = 'translateX(4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.transform = 'translateX(0)' }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: '#25D36615', border: '1px solid #25D36630', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', flexShrink: 0 }}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>{c.label}</p>
                    <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text)' }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Right form */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
              style={{ padding: '2rem', borderRadius: 24, background: 'var(--dark-3)', border: '1px solid var(--glass-border)' }}
            >
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text)' }}>{t('contact.formTitle')}</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                    <User size={13} /> {t('contact.name')}
                  </label>
                  <input type="text" value={form.name} onChange={set('name')} placeholder={t('contact.namePlaceholder')} style={inputBase}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                    <Mail size={13} /> {t('contact.email')}
                  </label>
                  <input type="email" value={form.email} onChange={set('email')} placeholder={t('contact.emailPlaceholder')} style={inputBase}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                    <FileText size={13} /> {t('contact.subject')}
                  </label>
                  <input type="text" value={form.subject} onChange={set('subject')} placeholder={t('contact.subjectPlaceholder')} style={inputBase}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                    <MessageCircle size={13} /> {t('contact.message')}
                  </label>
                  <textarea value={form.message} onChange={set('message')} placeholder={t('contact.messagePlaceholder')} rows={4}
                    style={{ ...inputBase, resize: 'vertical', minHeight: 110 }}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                {error && (
                  <p style={{ padding: '0.7rem 1rem', borderRadius: 10, background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)', color: '#ff6b6b', fontSize: '0.82rem', lineHeight: 1.5 }}>
                    {error}
                  </p>
                )}

                <button onClick={handleSend} disabled={!isValid || loading}
                  style={{
                    width: '100%', padding: '0.95rem', borderRadius: 12,
                    background: isValid && !loading ? 'linear-gradient(135deg, var(--primary), var(--accent))' : 'var(--dark-4)',
                    border: 'none', color: isValid && !loading ? 'white' : 'var(--text-muted)',
                    fontWeight: 700, fontSize: '0.95rem',
                    cursor: isValid && !loading ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    boxShadow: isValid && !loading ? '0 6px 24px rgba(108,99,255,0.4)' : 'none',
                    transition: 'transform 0.2s', fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={e => (isValid && !loading) && (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {loading
                    ? <><Loader2 size={17} style={{ animation: 'spin 1s linear infinite' }} /> {t('contact.sending')}</>
                    : <><Send size={16} /> {t('contact.send')}</>
                  }
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
                  {t('contact.note')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </>
  )
}
