import { useRef, useState, useLayoutEffect } from 'react'
import { Code2, Mail, Phone, MessageCircle } from 'lucide-react'

const W = 1050
const H = 600

const col = {
  bg:       '#0A0A14',
  bg2:      '#0F0F1E',
  purple:   '#6C63FF',
  teal:     '#00D4AA',
  purpleL:  '#8B85FF',
  white:    '#FFFFFF',
  mutedDim: 'rgba(136,136,168,0.55)',
  textSoft: 'rgba(232,232,240,0.88)',
  green:    '#25D366',
  pink:     '#FF6B9D',
}

/* ─────────────────────────────────────────
   Escala la tarjeta al ancho del contenedor
───────────────────────────────────────── */
function ScaleDriver({ cardRef }) {
  useLayoutEffect(() => {
    const el = cardRef.current
    if (!el) return
    const parent = el.parentElement
    const apply = () => {
      const scale = parent.offsetWidth / W
      el.style.transform = `scale(${scale})`
    }
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(parent)
    return () => ro.disconnect()
  }, [cardRef])
  return null
}

/* ══════════════════════════════════════════
   CARA FRONTAL
══════════════════════════════════════════ */
function CardFront() {
  return (
    <div style={{
      width: W, height: H,
      position: 'relative', overflow: 'hidden',
      background: `linear-gradient(145deg, ${col.bg} 0%, ${col.bg2} 55%, #080810 100%)`,
      fontFamily: 'Inter, sans-serif',
    }}>
      {/* glows */}
      <div style={{ position:'absolute', top:-120, left:-120, width:520, height:520, borderRadius:'50%', background:'radial-gradient(circle,rgba(108,99,255,0.28) 0%,transparent 60%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:-100, right:-80, width:440, height:440, borderRadius:'50%', background:'radial-gradient(circle,rgba(0,212,170,0.22) 0%,transparent 60%)', pointerEvents:'none' }} />
      {/* grid */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(108,99,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,0.05) 1px,transparent 1px)', backgroundSize:'52px 52px', pointerEvents:'none' }} />
      {/* arcos decorativos */}
      <div style={{ position:'absolute', right:-180, top:'50%', transform:'translateY(-50%)', width:480, height:480, borderRadius:'50%', border:'1px solid rgba(108,99,255,0.12)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', right:-120, top:'50%', transform:'translateY(-50%)', width:360, height:360, borderRadius:'50%', border:'1px solid rgba(0,212,170,0.08)', pointerEvents:'none' }} />
      {/* barra izquierda */}
      <div style={{ position:'absolute', left:0, top:0, bottom:0, width:6, background:'linear-gradient(180deg,#6C63FF,#00D4AA)' }} />
      <div style={{ position:'absolute', top:0, left:6, right:0, height:1, background:'linear-gradient(90deg,rgba(108,99,255,0.9),rgba(0,212,170,0.5),transparent 60%)' }} />

      <div style={{ position:'relative', zIndex:1, padding:'52px 60px', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

        {/* Logo */}
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <div style={{ width:54, height:54, borderRadius:15, background:'linear-gradient(135deg,#6C63FF,#00D4AA)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 0 32px rgba(108,99,255,0.6)', flexShrink:0 }}>
            <Code2 size={27} color="white" strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ fontFamily:'Space Grotesk,sans-serif', fontWeight:800, fontSize:'2rem', lineHeight:1, letterSpacing:'-0.02em', color:col.white }}>
              YA<span style={{ color:col.purpleL }}>&</span>DAI
            </div>
            <div style={{ fontSize:'0.72rem', color:col.mutedDim, letterSpacing:'0.18em', textTransform:'uppercase', marginTop:3, fontWeight:500 }}>Software</div>
          </div>
        </div>

        {/* Headline */}
        <div>
          <div style={{ display:'inline-block', padding:'5px 14px', borderRadius:6, background:'rgba(108,99,255,0.14)', border:'1px solid rgba(108,99,255,0.3)', color:col.purpleL, fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:20 }}>
            Consultoría de Software · Desarrollo Digital
          </div>
          <div style={{ fontFamily:'Space Grotesk,sans-serif', fontWeight:800, fontSize:'3.1rem', lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:18, maxWidth:560 }}>
            <span style={{ color:col.white }}>Tu visión,{' '}</span>
            <span style={{ color:col.teal }}>nuestra arquitectura</span>
          </div>
          <p style={{ color:'rgba(136,136,168,0.85)', fontSize:'0.9rem', lineHeight:1.75, maxWidth:440, margin:0 }}>
            Transformamos ideas en productos digitales robustos.<br />
            Desarrollo web, móvil y consultoría estratégica de software.
          </p>
        </div>

        {/* Pills */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[
            { label:'Desarrollo Web',          c:col.purple },
            { label:'Apps Móviles',             c:col.teal   },
            { label:'Arquitectura de Software', c:col.purple },
            { label:'Gestión de Proyectos',     c:col.teal   },
            { label:'QA & Calidad',             c:col.purple },
            { label:'Bases de Datos',           c:col.teal   },
          ].map((s,i) => (
            <span key={i} style={{ padding:'5px 14px', borderRadius:100, background:`${s.c}18`, border:`1px solid ${s.c}38`, color:s.c, fontSize:'0.7rem', fontWeight:600 }}>{s.label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   CARA TRASERA
══════════════════════════════════════════ */
function CardBack() {
  return (
    <div style={{
      width:W, height:H,
      position:'relative', overflow:'hidden',
      background:`linear-gradient(145deg,${col.bg2} 0%,${col.bg} 50%,#12121F 100%)`,
      fontFamily:'Inter, sans-serif',
      display:'flex',
    }}>
      {/* glows */}
      <div style={{ position:'absolute', top:-80, right:-80, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(108,99,255,0.2) 0%,transparent 60%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:-80, left:-60, width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle,rgba(0,212,170,0.16) 0%,transparent 60%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(108,99,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,0.04) 1px,transparent 1px)', backgroundSize:'52px 52px', pointerEvents:'none' }} />
      {/* barra derecha */}
      <div style={{ position:'absolute', right:0, top:0, bottom:0, width:6, background:'linear-gradient(180deg,#00D4AA,#6C63FF)' }} />
      <div style={{ position:'absolute', bottom:0, left:0, right:6, height:1, background:'linear-gradient(270deg,rgba(108,99,255,0.9),rgba(0,212,170,0.5),transparent 60%)' }} />

      {/* ── Columna izquierda: equipo ── */}
      <div style={{ position:'relative', zIndex:1, flex:'0 0 46%', padding:'48px 44px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRight:'1px solid rgba(108,99,255,0.12)' }}>

        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#6C63FF,#00D4AA)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 0 18px rgba(108,99,255,0.5)', flexShrink:0 }}>
            <Code2 size={18} color="white" strokeWidth={2.2} />
          </div>
          <span style={{ fontFamily:'Space Grotesk,sans-serif', fontWeight:700, fontSize:'1.1rem', color:col.white, letterSpacing:'-0.01em' }}>
            YA<span style={{ color:col.purpleL }}>&</span>DAI Software
          </span>
        </div>

        <div>
          <p style={{ fontSize:'0.62rem', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:col.mutedDim, marginBottom:16 }}>Nuestro Equipo</p>
          {[
            { initials:'D', name:'Dairo',  role:'Arquitecto & Full Stack Developer', grad:'linear-gradient(135deg,#6C63FF,#00D4AA)', glow:col.purple, phone:'+53 55848425' },
            { initials:'Y', name:'Yamila', role:'PM · PO · QA Specialist',           grad:'linear-gradient(135deg,#FF6B9D,#FFB347)', glow:col.pink,   phone:'+53 53572771' },
          ].map((m,i) => (
            <div key={i} style={{ marginBottom:i===0?18:0, padding:'14px 16px', borderRadius:14, background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:9 }}>
                <div style={{ width:40, height:40, borderRadius:11, background:m.grad, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.05rem', fontWeight:800, color:'white', fontFamily:'Space Grotesk,sans-serif', boxShadow:`0 4px 16px ${m.glow}35`, flexShrink:0 }}>{m.initials}</div>
                <div>
                  <p style={{ fontWeight:700, fontSize:'0.88rem', color:col.white, fontFamily:'Space Grotesk,sans-serif', lineHeight:1.2, margin:0 }}>{m.name}</p>
                  <p style={{ fontSize:'0.68rem', color:'rgba(136,136,168,0.75)', fontWeight:500, marginTop:2, lineHeight:1 }}>{m.role}</p>
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <Phone size={12} color={col.green} />
                <span style={{ fontSize:'0.78rem', color:col.textSoft, fontWeight:600 }}>{m.phone}</span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize:'0.72rem', color:'rgba(136,136,168,0.4)', fontStyle:'italic', lineHeight:1.6, margin:0 }}>
          "Dos expertos. Un equipo. Tu solución."
        </p>
      </div>

      {/* ── Columna derecha: contacto + propuesta ── */}
      <div style={{ position:'relative', zIndex:1, flex:1, padding:'48px 44px 48px 40px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

        <div>
          <p style={{ fontSize:'0.62rem', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:col.mutedDim, marginBottom:16 }}>Contáctanos</p>
          {[
            { icon:<Mail size={15}/>,         label:'Email',           value:'yadaisoftware@gmail.com', color:col.teal  },
            { icon:<MessageCircle size={15}/>, label:'WhatsApp Dairo',  value:'+53 55848425',           color:col.green },
            { icon:<MessageCircle size={15}/>, label:'WhatsApp Yamila', value:'+53 53572771',           color:col.green },
          ].map((c,i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
              <div style={{ width:34, height:34, borderRadius:10, background:`${c.color}14`, border:`1px solid ${c.color}30`, display:'flex', alignItems:'center', justifyContent:'center', color:c.color, flexShrink:0 }}>{c.icon}</div>
              <div>
                <p style={{ fontSize:'0.6rem', color:'rgba(136,136,168,0.5)', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', lineHeight:1, margin:0 }}>{c.label}</p>
                <p style={{ fontSize:'0.82rem', color:col.textSoft, fontWeight:600, marginTop:3, lineHeight:1 }}>{c.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p style={{ fontSize:'0.62rem', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:col.mutedDim, marginBottom:12 }}>¿Por qué elegirnos?</p>
          {[
            'Primera consulta 100% gratuita',
            'Contrato formal en cada proyecto',
            'Entregamos el código fuente completo',
            'Trabajo remoto en cualquier país',
          ].map((v,i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
              <span style={{ color:col.teal, fontWeight:800, fontSize:'0.78rem', flexShrink:0 }}>✓</span>
              <span style={{ fontSize:'0.8rem', color:'rgba(232,232,240,0.75)', lineHeight:1.4 }}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{ padding:'14px 18px', borderRadius:14, background:'linear-gradient(135deg,rgba(108,99,255,0.15),rgba(0,212,170,0.1))', border:'1px solid rgba(108,99,255,0.28)' }}>
          <p style={{ fontSize:'0.82rem', color:col.white, fontWeight:700, fontFamily:'Space Grotesk,sans-serif', margin:'0 0 5px' }}>
            ¿Tienes un proyecto en mente?
          </p>
          <p style={{ fontSize:'0.73rem', color:'rgba(136,136,168,0.8)', lineHeight:1.55, margin:0 }}>
            Escríbenos hoy. Sin compromiso, sin costo.<br/>
            <span style={{ color:col.purpleL, fontWeight:700 }}>Cotización personalizada en 24h.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   WRAPPER DE PREVISUALIZACIÓN RESPONSIVE
══════════════════════════════════════════ */
function CardPreview({ cardRef, children }) {
  return (
    <div style={{ position:'relative', width:'100%', paddingTop:`${(H/W)*100}%` }}>
      <div style={{ position:'absolute', inset:0, overflow:'hidden', borderRadius:20 }}>
        <div
          ref={cardRef}
          style={{ position:'absolute', top:0, left:0, width:W, height:H, transformOrigin:'top left' }}
        >
          {children}
        </div>
      </div>
      <ScaleDriver cardRef={cardRef} />
    </div>
  )
}

/* ══════════════════════════════════════════
   PÁGINA PRINCIPAL
══════════════════════════════════════════ */
export default function BusinessCard() {
  const frontRef = useRef(null)
  const backRef  = useRef(null)
  const [downloading, setDownloading] = useState(null)

  const exportCard = async (ref, filename, side) => {
    setDownloading(side)
    try {
      const { default: html2canvas } = await import('html2canvas')
      const el = ref.current

      // Antes de capturar: resetear transform para que html2canvas vea el tamaño real
      const prevTransform = el.style.transform
      el.style.transform = 'none'

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: col.bg,
        width: W,
        height: H,
        logging: false,
      })

      // Restaurar escala visual
      el.style.transform = prevTransform

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

  const btnBase = (active, teal) => ({
    padding:'0.82rem 2.2rem', borderRadius:12,
    background: active ? '#1A1A26' : teal ? 'linear-gradient(135deg,#00D4AA,#6C63FF)' : 'linear-gradient(135deg,#6C63FF,#00D4AA)',
    border:'none', color: active ? 'rgba(136,136,168,0.5)' : 'white',
    fontWeight:700, fontSize:'0.9rem', cursor: active ? 'not-allowed' : 'pointer',
    boxShadow: active ? 'none' : teal ? '0 8px 28px rgba(0,212,170,0.3)' : '0 8px 28px rgba(108,99,255,0.38)',
    transition:'all 0.2s', fontFamily:'Inter,sans-serif',
  })

  return (
    <div style={{ minHeight:'100vh', background:'#07070F', display:'flex', flexDirection:'column', alignItems:'center', padding:'3rem 1.5rem', gap:'3rem' }}>

      <div style={{ textAlign:'center' }}>
        <h1 style={{ fontFamily:'Space Grotesk,sans-serif', fontWeight:800, fontSize:'clamp(1.5rem,3vw,2.2rem)', color:'white', marginBottom:'0.5rem' }}>
          Tarjeta de Presentación
        </h1>
        <p style={{ color:'rgba(136,136,168,0.6)', fontSize:'0.85rem' }}>YA&amp;DAI Software · 1050 × 600 px · Apta para impresión</p>
      </div>

      {/* CARA FRONTAL */}
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'1.25rem', width:'100%', maxWidth:W }}>
        <Label num="1" text="Cara Frontal — Identidad de marca" teal={false} />
        <div style={{ width:'100%', maxWidth:W, borderRadius:24, overflow:'hidden', boxShadow:'0 28px 70px rgba(108,99,255,0.3), 0 0 0 1px rgba(108,99,255,0.15)' }}>
          <CardPreview cardRef={frontRef}><CardFront /></CardPreview>
        </div>
        <button style={btnBase(downloading==='front', false)} disabled={downloading!==null}
          onClick={() => exportCard(frontRef,'YADAI-Frente.png','front')}
          onMouseEnter={e => downloading===null && (e.currentTarget.style.transform='translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform='translateY(0)')}>
          {downloading==='front' ? '⏳ Generando...' : '⬇ Descargar Cara Frontal'}
        </button>
      </div>

      <div style={{ width:'100%', maxWidth:600, height:1, background:'linear-gradient(90deg,transparent,rgba(108,99,255,0.3),transparent)' }} />

      {/* CARA TRASERA */}
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'1.25rem', width:'100%', maxWidth:W }}>
        <Label num="2" text="Cara Trasera — Contacto y propuesta de valor" teal={true} />
        <div style={{ width:'100%', maxWidth:W, borderRadius:24, overflow:'hidden', boxShadow:'0 28px 70px rgba(0,212,170,0.22), 0 0 0 1px rgba(0,212,170,0.12)' }} >
          <CardPreview cardRef={backRef}><CardBack /></CardPreview>
        </div>
        <button style={btnBase(downloading==='back', true)} disabled={downloading!==null}
          onClick={() => exportCard(backRef,'YADAI-Trasera.png','back')}
          onMouseEnter={e => downloading===null && (e.currentTarget.style.transform='translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform='translateY(0)')}>
          {downloading==='back' ? '⏳ Generando...' : '⬇ Descargar Cara Trasera'}
        </button>
      </div>

      <p style={{ color:'rgba(136,136,168,0.4)', fontSize:'0.76rem', textAlign:'center', maxWidth:480 }}>
        Descarga cada cara por separado · Resolución apta para impresión profesional (300 dpi)
      </p>
    </div>
  )
}

function Label({ num, text, teal }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
      <div style={{ width:28, height:28, borderRadius:'50%', background:teal?'linear-gradient(135deg,#00D4AA,#6C63FF)':'linear-gradient(135deg,#6C63FF,#00D4AA)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.75rem', fontWeight:800, color:'white', flexShrink:0 }}>{num}</div>
      <p style={{ color:'white', fontWeight:700, fontSize:'0.95rem', fontFamily:'Space Grotesk,sans-serif', margin:0 }}>{text}</p>
    </div>
  )
}
