import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function SuccessModal({ open, onClose }) {
  const { t } = useTranslation()

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}
          />

          {/* Centering container — flex, no transform conflict */}
          <div style={{
            position: 'fixed', inset: 0, zIndex: 2001,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
            pointerEvents: 'none',
          }}>
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.85, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 16 }}
              transition={{ type: 'spring', stiffness: 340, damping: 28 }}
              style={{
                width: '100%', maxWidth: 360,
                borderRadius: 24, overflow: 'hidden',
                boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
                background: 'var(--dark-3)',
                pointerEvents: 'all',
              }}
            >
              {/* Header verde */}
              <div style={{ padding: 'clamp(1.75rem, 5vw, 2.5rem) clamp(1.25rem, 4vw, 2rem) clamp(1.5rem, 4vw, 2rem)', background: 'linear-gradient(135deg, #00C08B, #00D4AA)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', position: 'relative' }}>
                <button
                  onClick={onClose}
                  style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.35)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                >
                  <X size={14} />
                </button>
                <motion.div
                  initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.15 }}
                  style={{ width: 'clamp(60px, 15vw, 80px)', height: 'clamp(60px, 15vw, 80px)', borderRadius: '50%', border: '3px solid rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.25 }}>
                    <CheckCircle size={44} color="white" strokeWidth={1.8} />
                  </motion.div>
                </motion.div>
              </div>

              {/* Cuerpo */}
              <div style={{ padding: 'clamp(1.25rem, 4vw, 2rem)', textAlign: 'center' }}>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.6rem', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {t('modal.title')}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
                  style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem', whiteSpace: 'pre-line' }}
                >
                  {t('modal.desc')}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                  onClick={onClose}
                  style={{ padding: '0.75rem 2.5rem', borderRadius: 50, background: 'linear-gradient(135deg, #00C08B, #00D4AA)', border: 'none', color: 'white', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 6px 20px rgba(0,212,170,0.4)', transition: 'transform 0.2s, box-shadow 0.2s', fontFamily: 'Inter, sans-serif' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,212,170,0.55)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,212,170,0.4)' }}
                >
                  {t('modal.btn')}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
