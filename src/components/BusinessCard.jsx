import { useRef, useState } from 'react'
import { Code2, Mail, Phone, MessageCircle } from 'lucide-react'

// Tarjeta de visita estándar: 3.5" × 2" a 300dpi = 1050 × 600px
const W = 1050
const H = 600

/* ─────────────────────────────────────────
   CARA FRONTAL — Impacto visual / branding
───────────────────────────────────────── */
function CardFront() {
  return (
    <div style={{
      width: W, height: H,
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(145deg, #0A0A14 0%, #0F0F1E 55%, #080810 100%)',
      fontFamily: "'Inter', 'Space Grotesk', sans-serif",
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      {/* ── Decoración de fondo ── */}
      {/* Glow principal púrpura */}
      <div style={{ position: 'absolute', top: -120, left: -120, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.28) 0%, transparent 60%)', pointerEvents: 'none' }} />
      {/* Glow teal derecha */}
      <div style={{ position: 'absolute', bottom: -100, right: -80, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.22) 0%, transparent 60%)', pointerEvents: 'none' }} />
      {/* Grid sutil */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(108,99,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.05) 1px, transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
      {/* Línea degradada izquierda */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 6, background: 'linear-gradient(180deg, #6C63FF 0%, #00D4AA 100%)' }} />
      {/* Línea superior */}
      <div style={{ position: 'absolute', top: 0, left: 6, right: 0, height: 1, background: 'linear-gradient(90deg, rgba(108,99,255,0.9), rgba(0,212,170,0.5), transparent 60%)' }} />
      {/* Arco decorativo */}
      <div style={{ position: 'absolute', right: -180, top: '50%', transform: 'translateY(-50%)', width: 480, height: 480, borderRadius: '50%', border: '1px solid rgba(108,99,255,0.12)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: -120, top: '50%', transform: 'translateY(-50%)', width: 360, height: 360, borderRadius: '50%', border: '1px solid rgba(0,212,170,0.08)', pointerEvents: 'none' }} />

      {/* ── Contenido ── */}
      <div style={{ position: 'relative', zIndex: 1, padding: '52px 60px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

        {/* Top: logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 54, height: 54, borderRadius: 15, background: 'linear-gradient(135deg, #6C63FF, #00D4AA)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px rgba(108,99,255,0.6)', flexShrink: 0 }}>
            <Code2 size={27} color="white" strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '2rem', lineHeight: 1, letterSpacing: '-0.02em', background: 'linear-gradient(135deg, #fff 0%, #C4C0FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              YA<span style={{ WebkitTextFillColor: '#8B85FF' }}>&</span>DAI
            </div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(136,136,168,0.8)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 3, fontWeight: 500 }}>Software</div>
          </div>
        </div>

        {/* Center: headline principal */}
        <div>
          <div style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 6, background: 'rgba(108,99,255,0.14)', border: '1px solid rgba(108,99,255,0.3)', color: '#8B85FF', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 20 }}>
            Consultoría de Software · Desarrollo Digital
          </div>
          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '3.1rem', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 18, color: 'white', maxWidth: 560 }}>
            Tu visión,{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B85FF 0%, #00D4AA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              nuestra arquitectura
            </span>
          </h1>
          <p style={{ color: 'rgba(136,136,168,0.85)', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 440 }}>
            Transformamos ideas en productos digitales robustos.
            Desarrollo web, móvil y consultoría estratégica de software.
          </p>
        </div>

        {/* Bottom: servicios pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            { label: 'Desarrollo Web', c: '#6C63FF' },
            { label: 'Apps Móviles', c: '#00D4AA' },
            { label: 'Arquitectura de Software', c: '#6C63FF' },
            { label: 'Gestión de Proyectos', c: '#00D4AA' },
            { label: 'QA & Calidad', c: '#6C63FF' },
            { label: 'Bases de Datos', c: '#00D4AA' },
          ].map((s, i) => (
            <span key={i} style={{ padding: '5px 14px', borderRadius: 100, background: `${s.c}14`, border: `1px solid ${s.c}30`, color: s.c, fontSize: '0.7rem', fontWeight: 600 }}>{s.label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   CARA TRASERA — Contacto + propuesta valor
───────────────────────────────────────── */
function CardBack() {
  return (
    <div style={{
      width: W, height: H,
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(145deg, #0F0F1E 0%, #0A0A14 50%, #12121F 100%)',
      fontFamily: "'Inter', 'Space Grotesk', sans-serif",
      display: 'flex',
    }}>
      {/* ── Decoración ── */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.2) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -60, width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.16) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
      {/* Barra derecha */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 6, background: 'linear-gradient(180deg, #00D4AA 0%, #6C63FF 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 6, height: 1, background: 'linear-gradient(270deg, rgba(108,99,255,0.9), rgba(0,212,170,0.5), transparent 60%)' }} />

      {/* ── Columna izquierda: equipo ── */}
      <div style={{ position: 'relative', zIndex: 1, flex: '0 0 46%', padding: '50px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid rgba(108,99,255,0.1)' }}>

        {/* Logo pequeño */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #6C63FF, #00D4AA)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 18px rgba(108,99,255,0.5)', flexShrink: 0 }}>
            <Code2 size={18} color="white" strokeWidth={2.2} />
          </div>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.15rem', background: 'linear-gradient(135deg, #fff, #C4C0FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.01em' }}>
            YA<span style={{ WebkitTextFillColor: '#8B85FF' }}>&</span>DAI Software
          </span>
        </div>

        {/* Equipo */}
        <div>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(136,136,168,0.55)', marginBottom: 18 }}>Nuestro Equipo</p>

          {[
            { initials: 'D', name: 'Dairo', role: 'Arquitecto & Full Stack Developer', gradient: 'linear-gradient(135deg, #6C63FF, #00D4AA)', glow: '#6C63FF', phone: '+53 55848425' },
            { initials: 'Y', name: 'Yamila', role: 'PM · PO · QA Specialist', gradient: 'linear-gradient(135deg, #FF6B9D, #FFB347)', glow: '#FF6B9D', phone: '+53 53572771' },
          ].map((m, i) => (
            <div key={i} style={{ marginBottom: i === 0 ? 22 : 0, padding: '14px 16px', borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: m.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.05rem', fontWeight: 800, color: 'white', fontFamily: 'Space Grotesk, sans-serif', boxShadow: `0 4px 16px ${m.glow}35`, flexShrink: 0 }}>
                  {m.initials}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'white', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.2 }}>{m.name}</p>
                  <p style={{ fontSize: '0.68rem', color: 'rgba(136,136,168,0.75)', fontWeight: 500, marginTop: 2 }}>{m.role}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <Phone size={11} color="#25D366" />
                <span style={{ fontSize: '0.75rem', color: 'rgba(232,232,240,0.7)', fontWeight: 500 }}>{m.phone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Slogan bottom */}
        <p style={{ fontSize: '0.72rem', color: 'rgba(136,136,168,0.45)', fontStyle: 'italic', lineHeight: 1.6 }}>
          "Dos expertos. Un equipo. Tu solución."
        </p>
      </div>

      {/* ── Columna derecha: contacto + propuesta ── */}
      <div style={{ position: 'relative', zIndex: 1, flex: 1, padding: '50px 48px 50px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

        {/* Contacto */}
        <div>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(136,136,168,0.55)', marginBottom: 18 }}>Contáctanos</p>

          {[
            { icon: <Mail size={15} />, label: 'Email', value: 'yadaisoftware@gmail.com', color: '#00D4AA' },
            { icon: <MessageCircle size={15} />, label: 'WhatsApp Dairo', value: '+53 55848425', color: '#25D366' },
            { icon: <MessageCircle size={15} />, label: 'WhatsApp Yamila', value: '+53 53572771', color: '#25D366' },
          ].map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: `${c.color}14`, border: `1px solid ${c.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color, flexShrink: 0 }}>
                {c.icon}
              </div>
              <div>
                <p style={{ fontSize: '0.62rem', color: 'rgba(136,136,168,0.5)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1 }}>{c.label}</p>
                <p style={{ fontSize: '0.82rem', color: 'rgba(232,232,240,0.9)', fontWeight: 600, marginTop: 2 }}>{c.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Propuesta de valor */}
        <div>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(136,136,168,0.55)', marginBottom: 14 }}>¿Por qué elegirnos?</p>
          {[
            { emoji: '✓', text: 'Primera consulta 100% gratuita' },
            { emoji: '✓', text: 'Contrato formal en cada proyecto' },
            { emoji: '✓', text: 'Entregamos el código fuente completo' },
            { emoji: '✓', text: 'Trabajo remoto con clientes en cualquier país' },
          ].map((v, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <span style={{ color: '#00D4AA', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0, lineHeight: 1.5 }}>{v.emoji}</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(232,232,240,0.75)', lineHeight: 1.5 }}>{v.text}</span>
            </div>
          ))}
        </div>

        {/* CTA badge */}
        <div style={{ padding: '12px 18px', borderRadius: 12, background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,170,0.1))', border: '1px solid rgba(108,99,255,0.25)' }}>
          <p style={{ fontSize: '0.78rem', color: 'white', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 3 }}>
            ¿Tienes un proyecto en mente?
          </p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(136,136,168,0.8)', lineHeight: 1.5 }}>
            Escríbenos hoy. Sin compromiso, sin costo.
            <br />
            <span style={{ color: '#8B85FF', fontWeight: 600 }}>Cotización personalizada en 24h.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   PÁGINA PRINCIPAL
───────────────────────────────────────── */
export default function BusinessCard() {
  const frontRef = useRef(null)
  const backRef  = useRef(null)
  const [downloading, setDownloading] = useState(null) // 'front' | 'back' | null

  const exportCard = async (ref, filename, side) => {
    setDownloading(side)
    try {
      const { default: html2canvas } = await import('html2canvas')
      const canvas = await html2canvas(ref.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        width: W,
        height: H,
        logging: false,
      })
      const link = document.createElement('a')
      link.download = filename
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error(err)
    } finally {
      setDownloading(null)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#07070F', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', gap: '3.5rem' }}>

      {/* Encabezado */}
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', background: 'linear-gradient(135deg, #fff, #8B85FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>
          Tarjeta de Presentación
        </h1>
        <p style={{ color: 'rgba(136,136,168,0.7)', fontSize: '0.9rem' }}>YA&DAI Software · Formato 3.5" × 2" (1050 × 600 px)</p>
      </div>

      {/* ── CARA FRONTAL ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', width: '100%', maxWidth: W }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #6C63FF, #00D4AA)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, color: 'white' }}>1</div>
          <p style={{ color: 'white', fontWeight: 700, fontSize: '1rem', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}>Cara Frontal — Identidad de marca</p>
        </div>
        <div style={{ width: '100%', maxWidth: W, borderRadius: 28, overflow: 'hidden', boxShadow: '0 30px 80px rgba(108,99,255,0.3), 0 0 0 1px rgba(108,99,255,0.15)' }}>
          <div ref={frontRef} style={{ width: W, transformOrigin: 'top left' }}>
            <CardFront />
          </div>
        </div>
        <button
          onClick={() => exportCard(frontRef, 'YADAI-BusinessCard-Frente.png', 'front')}
          disabled={downloading !== null}
          style={btnStyle(downloading === 'front')}
          onMouseEnter={e => downloading === null && (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          {downloading === 'front' ? '⏳ Generando...' : '⬇ Descargar Cara Frontal'}
        </button>
      </div>

      {/* Separador */}
      <div style={{ width: '100%', maxWidth: 600, height: 1, background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.3), transparent)' }} />

      {/* ── CARA TRASERA ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', width: '100%', maxWidth: W }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #00D4AA, #6C63FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, color: 'white' }}>2</div>
          <p style={{ color: 'white', fontWeight: 700, fontSize: '1rem', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}>Cara Trasera — Contacto y propuesta de valor</p>
        </div>
        <div style={{ width: '100%', maxWidth: W, borderRadius: 28, overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,212,170,0.2), 0 0 0 1px rgba(0,212,170,0.12)' }}>
          <div ref={backRef} style={{ width: W, transformOrigin: 'top left' }}>
            <CardBack />
          </div>
        </div>
        <button
          onClick={() => exportCard(backRef, 'YADAI-BusinessCard-Trasera.png', 'back')}
          disabled={downloading !== null}
          style={btnStyle(downloading === 'back', true)}
          onMouseEnter={e => downloading === null && (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          {downloading === 'back' ? '⏳ Generando...' : '⬇ Descargar Cara Trasera'}
        </button>
      </div>

      {/* Nota */}
      <p style={{ color: 'rgba(136,136,168,0.45)', fontSize: '0.78rem', textAlign: 'center', maxWidth: 500 }}>
        Descarga ambas caras por separado · Resolución apta para impresión profesional · 300 dpi equivalente
      </p>
    </div>
  )
}

function btnStyle(active, teal = false) {
  return {
    padding: '0.85rem 2.25rem', borderRadius: 12,
    background: active ? '#1A1A26' : teal ? 'linear-gradient(135deg, #00D4AA, #6C63FF)' : 'linear-gradient(135deg, #6C63FF, #00D4AA)',
    border: 'none', color: active ? 'rgba(136,136,168,0.6)' : 'white',
    fontWeight: 700, fontSize: '0.92rem', cursor: active ? 'not-allowed' : 'pointer',
    boxShadow: active ? 'none' : '0 8px 28px rgba(108,99,255,0.38)',
    transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
  }
}
