import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Globe, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '7rem 2rem 4rem',
      }}
    >
      {/* Background glow orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '10%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,212,170,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: 900, textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: 100,
            border: '1px solid rgba(108,99,255,0.4)',
            background: 'rgba(108,99,255,0.1)',
            marginBottom: '2rem',
            fontSize: '0.82rem',
            fontWeight: 500,
            color: 'var(--primary-light)',
          }}
        >
          <Sparkles size={14} />
          Soluciones digitales a la medida
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
          }}
        >
          Tu visión,{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            nuestra arquitectura
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-muted)',
            maxWidth: 600,
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
          }}
        >
          Diseñamos y desarrollamos soluciones digitales personalizadas — aplicaciones web,
          móviles y sistemas robustos que impulsan el crecimiento de tu negocio.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#contacto"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.85rem 2rem',
              borderRadius: 12,
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              boxShadow: '0 8px 30px rgba(108,99,255,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(108,99,255,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(108,99,255,0.4)' }}
          >
            Iniciar proyecto <ArrowRight size={18} />
          </a>
          <a
            href="#sobre-nosotros"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.85rem 2rem',
              borderRadius: 12,
              background: 'var(--glass)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              backdropFilter: 'blur(10px)',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--glass)'; e.currentTarget.style.borderColor = 'var(--glass-border)' }}
          >
            Conocer más
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            display: 'flex', gap: '3rem', justifyContent: 'center',
            marginTop: '5rem', flexWrap: 'wrap',
          }}
        >
          {[
            { icon: <Globe size={20} />, value: 'Web', label: 'Aplicaciones' },
            { icon: <Smartphone size={20} />, value: 'Mobile', label: 'Desarrollo' },
            { icon: <Sparkles size={20} />, value: 'A medida', label: 'Cada solución' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                justifyContent: 'center',
                color: 'var(--primary-light)', marginBottom: '0.25rem',
              }}>
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
