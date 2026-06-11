import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'

const LANGS = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'pt', label: 'PT', flag: '🇧🇷' },
]

export default function LangSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const current = LANGS.find(l => l.code === i18n.language) || LANGS[0]

  const select = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.35rem',
          padding: '0.4rem 0.75rem',
          borderRadius: 8,
          background: 'var(--glass)',
          border: '1px solid var(--glass-border)',
          color: 'var(--text)',
          cursor: 'pointer',
          fontSize: '0.82rem',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif',
          transition: 'border-color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(108,99,255,0.5)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>

      {open && (
        <>
          {/* backdrop */}
          <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 998 }} />
          <div style={{
            position: 'absolute', top: 'calc(100% + 8px)', right: 0,
            zIndex: 999,
            background: 'var(--dark-3)',
            border: '1px solid var(--glass-border)',
            borderRadius: 10,
            overflow: 'hidden',
            minWidth: 110,
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          }}>
            {LANGS.map(l => (
              <button
                key={l.code}
                onClick={() => select(l.code)}
                style={{
                  width: '100%',
                  padding: '0.6rem 1rem',
                  background: l.code === i18n.language ? 'rgba(108,99,255,0.15)' : 'transparent',
                  border: 'none',
                  color: l.code === i18n.language ? 'var(--primary-light)' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: l.code === i18n.language ? 700 : 500,
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'background 0.15s',
                  textAlign: 'left',
                }}
                onMouseEnter={e => { if (l.code !== i18n.language) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                onMouseLeave={e => { if (l.code !== i18n.language) e.currentTarget.style.background = 'transparent' }}
              >
                <span>{l.flag}</span> {l.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
