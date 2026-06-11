import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Globe, Smartphone, Database, Settings, BarChart3, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Desarrollo Web',
    desc: 'Aplicaciones web modernas, rápidas y escalables. Desde landing pages hasta sistemas empresariales complejos con arquitecturas sólidas.',
    tags: ['React', 'Node.js', 'Next.js'],
    color: '#6C63FF',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Apps Móviles',
    desc: 'Aplicaciones móviles nativas y multiplataforma que brindan experiencias fluidas tanto en iOS como en Android.',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
    color: '#00D4AA',
  },
  {
    icon: <Database size={28} />,
    title: 'Bases de Datos',
    desc: 'Diseño, optimización y administración de bases de datos relacionales y NoSQL. Arquitecturas que garantizan rendimiento y consistencia.',
    tags: ['PostgreSQL', 'MongoDB', 'MySQL'],
    color: '#FF6B9D',
  },
  {
    icon: <Settings size={28} />,
    title: 'Arquitectura de Software',
    desc: 'Diseño de arquitecturas escalables, microservicios, APIs REST/GraphQL y sistemas distribuidos pensados para crecer con tu negocio.',
    tags: ['Microservicios', 'APIs', 'Cloud'],
    color: '#FFB347',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Gestión de Proyectos',
    desc: 'Dirección estratégica de proyectos tecnológicos con metodologías ágiles. Planificación, seguimiento y entrega de resultados medibles.',
    tags: ['Scrum', 'Agile', 'Kanban'],
    color: '#9B59B6',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'QA & Calidad',
    desc: 'Aseguramiento de la calidad en cada etapa del proceso. Testing manual y automatizado para entregar software sin errores.',
    tags: ['Testing', 'QA', 'CI/CD'],
    color: '#3498DB',
  },
]

export default function Services() {
  const [ref, inView] = useInView(0.1)

  return (
    <section
      id="servicios"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'var(--dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(108,99,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-block',
            padding: '0.3rem 0.9rem',
            borderRadius: 6,
            background: 'rgba(108,99,255,0.12)',
            border: '1px solid rgba(108,99,255,0.3)',
            color: 'var(--primary-light)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>
            Lo que hacemos
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Servicios que{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--primary-light), var(--accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              transforman negocios
            </span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Combinamos experiencia técnica y visión estratégica para entregar soluciones que realmente funcionan.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                padding: '1.75rem',
                borderRadius: 20,
                background: 'var(--dark-3)',
                border: '1px solid var(--glass-border)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.25s, transform 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${s.color}50`
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--glass-border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Glow top-left */}
              <div style={{
                position: 'absolute', top: -30, left: -30,
                width: 120, height: 120,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${s.color}22 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `${s.color}1A`,
                border: `1px solid ${s.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color,
                marginBottom: '1.25rem',
              }}>
                {s.icon}
              </div>

              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem', color: 'var(--text)' }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {s.desc}
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: 6,
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}30`,
                    color: s.color,
                    fontSize: '0.72rem',
                    fontWeight: 600,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
