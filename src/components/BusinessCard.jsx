import { useRef, useState } from 'react'
import { Code2, Globe, Mail, MessageCircle, Smartphone } from 'lucide-react'

// Dimensiones: 1050 x 600px → ratio 3.5 : 2 (tarjeta de visita estándar a 300dpi)
const W = 1050
const H = 600

export default function BusinessCard() {
  const cardRef = useRef(null)
  const [downloading, setDownloading] = useState(false)

  const handleExport = async () => {
    setDownloading(true)
    try {
      const { default: html2canvas } = await import('html2canvas')
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        width: W,
        height: H,
        logging: false,
      })
      const link = document.createElement('a')
      link.download = 'YA&DAI-BusinessCard.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error(err)
      alert('Error al exportar. Asegúrate de tener instalado html2canvas.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#07070F', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', gap: '2rem' }}>

      {/* ── CARD ── */}
      <div
        ref={cardRef}
        style={{
          width: W,
          height: H,
          maxWidth: '100%',
          aspectRatio: `${W} / ${H}`,
          borderRadius: 28,
          overflow: 'hidden',
          position: 'relative',
          background: 'linear-gradient(145deg, #0F0F1E 0%, #12121F 60%, #0A0A15 100%)',
          boxShadow: '0 40px 100px rgba(108,99,255,0.35), 0 0 0 1px rgba(108,99,255,0.15)',
          fontFamily: "'Inter', 'Space Grotesk', sans-serif",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* ── Background decoration ── */}
        {/* Purple glow top-left */}
        <div style={{ position: 'absolute', top: -80, left: -80, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.22) 0%, transparent 65%)', pointerEvents: 'none' }} />
        {/* Teal glow bottom-right */}
        <div style={{ position: 'absolute', bottom: -60, right: -60, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
        {/* Subtle grid */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        {/* Left accent bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: 'linear-gradient(180deg, #6C63FF 0%, #00D4AA 100%)' }} />
        {/* Top accent line */}
        <div style={{ position: 'absolute', top: 0, left: 5, right: 0, height: 1, background: 'linear-gradient(90deg, rgba(108,99,255,0.8), rgba(0,212,170,0.5), transparent)' }} />

        {/* ── Content ── */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', height: '100%' }}>

          {/* Left column */}
          <div style={{ flex: '0 0 58%', padding: '54px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            {/* Logo + brand */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 28px rgba(108,99,255,0.55)',
                flexShrink: 0,
              }}>
                <Code2 size={26} color="white" strokeWidth={2} />
              </div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1.65rem', lineHeight: 1, background: 'linear-gradient(135deg, #ffffff 0%, #C4C0FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
                  YA<span style={{ WebkitTextFillColor: '#8B85FF' }}>&</span>DAI
                </div>
                <div style={{ fontWeight: 400, fontSize: '0.78rem', color: 'rgba(136,136,168,0.9)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '2px' }}>
                  Software
                </div>
              </div>
            </div>

            {/* Tagline + description */}
            <div>
              <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 6, background: 'rgba(108,99,255,0.14)', border: '1px solid rgba(108,99,255,0.28)', color: '#8B85FF', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '18px' }}>
                Soluciones Digitales a la Medida
              </div>
              <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '2.5rem', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '16px', color: 'white' }}>
                Tu visión,{' '}
                <span style={{ background: 'linear-gradient(135deg, #8B85FF 0%, #00D4AA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  nuestra arquitectura
                </span>
              </h1>
              <p style={{ color: 'rgba(136,136,168,0.85)', fontSize: '0.88rem', lineHeight: 1.75, maxWidth: 380 }}>
                Diseñamos y desarrollamos aplicaciones web, móviles y sistemas robustos
                que impulsan el crecimiento real de tu negocio.
              </p>
            </div>

            {/* Services pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Desarrollo Web', 'Apps Móviles', 'Arquitectura', 'Gestión de Proyectos', 'QA & Calidad'].map((s, i) => (
                <span key={i} style={{
                  padding: '5px 13px', borderRadius: 100,
                  background: i % 2 === 0 ? 'rgba(108,99,255,0.12)' : 'rgba(0,212,170,0.1)',
                  border: `1px solid ${i % 2 === 0 ? 'rgba(108,99,255,0.25)' : 'rgba(0,212,170,0.22)'}`,
                  color: i % 2 === 0 ? '#8B85FF' : '#00D4AA',
                  fontSize: '0.7rem', fontWeight: 600,
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div style={{ width: 1, background: 'linear-gradient(180deg, transparent, rgba(108,99,255,0.3) 30%, rgba(0,212,170,0.2) 70%, transparent)', margin: '40px 0', flexShrink: 0 }} />

          {/* Right column */}
          <div style={{ flex: 1, padding: '54px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            {/* Team */}
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(136,136,168,0.6)', marginBottom: '20px' }}>Nuestro Equipo</p>

              {[
                { initials: 'D', name: 'Dairo', role: 'Arquitecto & Full Stack Dev', gradient: 'linear-gradient(135deg, #6C63FF, #00D4AA)', color: '#6C63FF' },
                { initials: 'Y', name: 'Yamila', role: 'PM · PO · QA Specialist', gradient: 'linear-gradient(135deg, #FF6B9D, #FFB347)', color: '#FF6B9D' },
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '13px', marginBottom: i === 0 ? '16px' : 0 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: m.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 800, color: 'white', flexShrink: 0, fontFamily: 'Space Grotesk, sans-serif', boxShadow: `0 6px 18px ${m.color}35` }}>
                    {m.initials}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'white', marginBottom: '1px', fontFamily: 'Space Grotesk, sans-serif' }}>{m.name}</p>
                    <p style={{ fontSize: '0.72rem', color: 'rgba(136,136,168,0.8)', fontWeight: 500 }}>{m.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(136,136,168,0.6)', marginBottom: '16px' }}>Contacto</p>

              {[
                { icon: <Globe size={14} />, text: 'yadaisoftware.com', color: '#8B85FF' },
                { icon: <Mail size={14} />, text: 'yadaisoftware@gmail.com', color: '#00D4AA' },
                { icon: <MessageCircle size={14} />, text: 'WhatsApp disponible', color: '#25D366' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${c.color}15`, border: `1px solid ${c.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color, flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(232,232,240,0.85)', fontWeight: 500 }}>{c.text}</span>
                </div>
              ))}
            </div>

            {/* Bottom badge */}
            <div style={{ padding: '10px 16px', borderRadius: 10, background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(0,212,170,0.08))', border: '1px solid rgba(108,99,255,0.2)', textAlign: 'center' }}>
              <p style={{ fontSize: '0.72rem', color: 'rgba(136,136,168,0.8)', fontWeight: 500, lineHeight: 1.5 }}>
                <span style={{ color: '#8B85FF', fontWeight: 700 }}>Primera consulta gratuita</span>
                {' · '}Trabajo 100% remoto{' · '}Entrega bajo contrato
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Export button ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={handleExport}
          disabled={downloading}
          style={{
            padding: '0.85rem 2.5rem', borderRadius: 12,
            background: downloading ? '#1A1A26' : 'linear-gradient(135deg, #6C63FF, #00D4AA)',
            border: 'none', color: 'white', fontWeight: 700, fontSize: '0.95rem',
            cursor: downloading ? 'not-allowed' : 'pointer',
            boxShadow: downloading ? 'none' : '0 8px 30px rgba(108,99,255,0.4)',
            transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}
          onMouseEnter={e => !downloading && (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          {downloading ? 'Generando imagen...' : '⬇ Descargar PNG'}
        </button>
        <p style={{ color: 'rgba(136,136,168,0.6)', fontSize: '0.78rem' }}>
          1050 × 600 px · Resolución para impresión y redes sociales
        </p>
      </div>
    </div>
  )
}
