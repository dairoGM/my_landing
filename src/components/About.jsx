import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Target, Lightbulb, Users, Award } from 'lucide-react'

const values = [
  { icon: <Target size={22} />, title: 'Enfoque en resultados', desc: 'Cada línea de código tiene un propósito: hacer crecer tu negocio.' },
  { icon: <Lightbulb size={22} />, title: 'Innovación constante', desc: 'Aplicamos las tecnologías más modernas para mantener tu producto vigente.' },
  { icon: <Users size={22} />, title: 'Trabajo colaborativo', desc: 'Somos una extensión de tu equipo, no solo un proveedor externo.' },
  { icon: <Award size={22} />, title: 'Calidad de proceso', desc: 'Metodologías ágiles y control de calidad en cada etapa del proyecto.' },
]

export default function About() {
  const [ref, inView] = useInView(0.15)

  return (
    <section
      id="sobre-nosotros"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'var(--dark-2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              display: 'inline-block',
              padding: '0.3rem 0.9rem',
              borderRadius: 6,
              background: 'rgba(0,212,170,0.12)',
              border: '1px solid rgba(0,212,170,0.3)',
              color: 'var(--accent)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Sobre Nosotros
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}>
              Dos expertos,{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--primary-light), var(--accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                un solo objetivo
              </span>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '1rem' }}>
              <strong style={{ color: 'var(--text)' }}>YADAI Software</strong> nace de la unión de dos
              profesionales con perfiles complementarios: arquitectura de software y gestión estratégica de proyectos.
              Juntos ofrecemos una visión 360° del desarrollo de productos digitales.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '1rem' }}>
              Entendemos que cada negocio es único. Por eso diseñamos soluciones a la medida —
              sin plantillas genéricas, sin código innecesario. Solo lo que tu proyecto necesita para escalar.
            </p>
          </motion.div>

          {/* Right — value cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                style={{
                  padding: '1.5rem',
                  borderRadius: 16,
                  background: 'var(--glass)',
                  border: '1px solid var(--glass-border)',
                  transition: 'border-color 0.2s, transform 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,170,0.15))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary-light)',
                  marginBottom: '0.75rem',
                }}>
                  {v.icon}
                </div>
                <h4 style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--text)' }}>{v.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
