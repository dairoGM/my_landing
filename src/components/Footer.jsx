import { Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      padding: '2rem',
      background: 'var(--dark-2)',
      borderTop: '1px solid var(--glass-border)',
      textAlign: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Code2 size={14} color="white" />
        </div>
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 700,
          fontSize: '1rem',
          background: 'linear-gradient(135deg, #fff, var(--primary-light))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          YADAI Software
        </span>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} YADAI Software · Soluciones digitales a la medida
      </p>
    </footer>
  )
}
