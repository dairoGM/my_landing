import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Code2, Database, Layers, ClipboardCheck, Users, Star, Download, FileUser } from 'lucide-react'

const team = [
  {
    name: 'Dairo',
    role: 'Arquitecto & Full Stack Developer',
    desc: 'Especialista en diseño de arquitecturas de software escalables y desarrollo full stack. Con experiencia en bases de datos y sistemas complejos, convierte ideas en soluciones técnicas sólidas y eficientes.',
    skills: [
      { icon: <Layers size={15} />, label: 'Arquitectura de Software' },
      { icon: <Code2 size={15} />, label: 'Desarrollo Full Stack' },
      { icon: <Database size={15} />, label: 'Bases de Datos' },
    ],
    gradient: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
    accentColor: '#6C63FF',
    initials: 'D',
    cvFile: '/cv/CV_Dairo_Espanol.pdf',
    cvName: 'CV-Dairo-YADAI.pdf',
  },
  {
    name: 'Yamila',
    role: 'PM · PO · QA Specialist',
    desc: 'Experta en gestión de proyectos, bases de datos y aseguramiento de la calidad. Garantiza que cada proyecto se entregue en tiempo, con los más altos estándares y alineado a los objetivos del negocio.',
    skills: [
      { icon: <ClipboardCheck size={15} />, label: 'QA & Calidad' },
      { icon: <Users size={15} />, label: 'PM / Product Owner' },
      { icon: <Database size={15} />, label: 'Bases de Datos' },
    ],
    gradient: 'linear-gradient(135deg, #FF6B9D, #FFB347)',
    accentColor: '#FF6B9D',
    initials: 'Y',
    cvFile: '/cv/CV_YamilaMateu_QA_PM1.0.pdf',
    cvName: 'CV-Yamila-YADAI.pdf',
  },
]

function CvButton({ cvFile, cvName, accentColor, gradient }) {
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
    <button
      onClick={handleDownload}
      style={{
        marginTop: '1.5rem',
        width: '100%',
        padding: '0.85rem 1.25rem',
        borderRadius: 14,
        background: 'transparent',
        border: `1.5px dashed ${accentColor}60`,
        color: accentColor,
        fontWeight: 600,
        fontSize: '0.88rem',
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
        transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${accentColor}15`
        e.currentTarget.style.borderColor = accentColor
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.borderColor = `${accentColor}60`
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <FileUser size={16} />
      Descargar Currículum
      <Download size={14} style={{ marginLeft: 'auto' }} />
    </button>
  )
}

export default function Team() {
  const [ref, inView] = useInView(0.15)

  return (
    <section
      id="equipo"
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
        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
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
            background: 'rgba(0,212,170,0.12)',
            border: '1px solid rgba(0,212,170,0.3)',
            color: 'var(--accent)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>
            Nuestro Equipo
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Las personas detrás de{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--primary-light), var(--accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              YADAI
            </span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Dos profesionales, un equipo cohesionado. Unimos tecnología y estrategia para crear productos digitales excepcionales.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
          gap: '2rem',
        }}>
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                padding: '2.5rem',
                borderRadius: 24,
                background: 'var(--dark-3)',
                border: '1px solid var(--glass-border)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.25s, transform 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${member.accentColor}50`
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--glass-border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Background accent */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 200, height: 200,
                background: `radial-gradient(circle, ${member.accentColor}12 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Avatar + name */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{
                  flexShrink: 0,
                  width: 72, height: 72, borderRadius: 20,
                  background: member.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem', fontWeight: 800, color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif',
                  boxShadow: `0 8px 24px ${member.accentColor}40`,
                }}>
                  {member.initials}
                </div>
                <div>
                  <h3 style={{
                    fontWeight: 800, fontSize: '1.5rem',
                    background: member.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.25rem',
                  }}>
                    {member.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>{member.role}</p>
                  <div style={{ display: 'flex', gap: '0.2rem', marginTop: '0.4rem' }}>
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} fill={member.accentColor} color={member.accentColor} />
                    ))}
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                {member.desc}
              </p>

              {/* Skills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {member.skills.map((s, j) => (
                  <div key={j} style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.6rem 0.9rem',
                    borderRadius: 10,
                    background: `${member.accentColor}0D`,
                    border: `1px solid ${member.accentColor}25`,
                    color: member.accentColor,
                    fontSize: '0.83rem',
                    fontWeight: 500,
                  }}>
                    {s.icon} {s.label}
                  </div>
                ))}
              </div>

              {/* CV Download */}
              <CvButton
                cvFile={member.cvFile}
                cvName={member.cvName}
                accentColor={member.accentColor}
                gradient={member.gradient}
              />

              {/* CV note */}
              <p style={{
                marginTop: '0.6rem',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                textAlign: 'center',
              }}>
                Formato PDF · Currículum actualizado
              </p>
            </motion.div>
          ))}
        </div>

        {/* Together banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: '3rem',
            padding: '2.5rem',
            borderRadius: 24,
            background: 'linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(0,212,170,0.08) 100%)',
            border: '1px solid rgba(108,99,255,0.25)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>
            Juntos, somos YADAI Software
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: 600, margin: '0 auto' }}>
            La combinación de habilidades técnicas y de gestión nos permite acompañarte desde la idea
            hasta el producto final con un enfoque integral y humano.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
