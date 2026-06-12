# YA&DAI Software — Landing Page

Landing page profesional de **YA&DAI Software**, consultora de desarrollo de software conformada por dos especialistas. Construida con React 19 + Vite 8, completamente responsive, multilingüe (ES / EN / PT) y sin dependencias de backend.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| UI | React 19 + JSX |
| Bundler | Vite 8 + `@vitejs/plugin-react` |
| Animaciones | Framer Motion 12 |
| Iconos | Lucide React |
| Internacionalización | i18next + react-i18next |
| Routing | React Router DOM v7 |
| Email | @emailjs/browser |
| Notificaciones | Telegram Bot API (fetch directo) |
| Exportación PNG | html2canvas |
| Tipado | TypeScript (solo compila, sin tipos en componentes) |

---

## Instalación y desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Compilación de producción → dist/
npm run preview    # Previsualizar build de producción
```

---

## Estructura del proyecto

```
src/
├── main.jsx                  # Entry point — BrowserRouter + rutas
├── App.jsx                   # Composición de secciones de la landing
├── index.css                 # Design tokens (variables CSS) + grids responsive
├── i18n/
│   ├── index.js              # Configuración de i18next (ES por defecto)
│   ├── es.js                 # Español — idioma base
│   ├── en.js                 # Inglés
│   └── pt.js                 # Portugués
├── config/
│   └── notifications.js      # Credenciales EmailJS + Telegram Bot
├── services/
│   └── sendNotifications.js  # Envío paralelo: email + Telegram x2
├── hooks/
│   └── useInView.js          # IntersectionObserver — animaciones on-scroll
└── components/
    ├── Navbar.jsx             # Navbar fija, detección de sección activa, drawer móvil
    ├── LangSwitcher.jsx       # Selector de idioma (ES / EN / PT)
    ├── Hero.jsx               # Sección inicial con 2 CTAs
    ├── About.jsx              # Sobre nosotros + 4 valores
    ├── Services.jsx           # 6 servicios con entregables + CTA cotización
    ├── Cases.jsx              # 3 casos de éxito (Reto → Solución → Resultado)
    ├── Team.jsx               # Perfiles de Dairo y Yamila + descarga CV
    ├── FAQ.jsx                # Acordeón de preguntas frecuentes
    ├── Contact.jsx            # Formulario + tarjetas de contacto WhatsApp
    ├── SuccessModal.jsx       # Modal de confirmación post-envío
    ├── Footer.jsx             # Pie de página
    └── BusinessCard.jsx       # Tarjeta de presentación exportable (ruta /card)

public/
└── cv/                       # PDFs de currículum (servidos estáticamente)
    ├── CV_Dairo_Espanol.pdf
    └── CV_YamilaMateu_QA_PM1.0.pdf
```

---

## Rutas

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `App` | Landing page completa |
| `/card` | `BusinessCard` | Tarjeta de presentación exportable como PNG |

---

## Secciones de la landing

| ID de sección | Componente | Descripción |
|---|---|---|
| `#inicio` | Hero | CTA principal + botón WhatsApp directo |
| `#sobre-nosotros` | About | Historia, misión y valores de la empresa |
| `#servicios` | Services | 6 servicios con entregables y CTA de cotización |
| `#casos` | Cases | 3 casos de éxito representativos con estructura RSR |
| `#equipo` | Team | Perfiles de Dairo (Arquitecto/FullStack) y Yamila (PM/PO/QA) |
| `#faq` | FAQ | 6 preguntas frecuentes en acordeón animado |
| `#contacto` | Contact | Formulario de contacto + tarjetas WhatsApp individuales |

---

## Sistema de notificaciones

El formulario de contacto envía simultáneamente a tres destinos usando `Promise.allSettled` — el formulario solo falla si los **tres canales fallan al mismo tiempo**.

```
Formulario → sendContactForm()
               ├── EmailJS       → yadaisoftware@gmail.com
               ├── Telegram Bot  → Chat de Dairo
               └── Telegram Bot  → Chat de Yamila
```

Configuración en `src/config/notifications.js`:
- **EmailJS**: servicio `service_t2qasvr`, plantilla `template_qm4yu9o`
- **Bot Telegram**: `@yadai_notif_bot`

---

## Internacionalización

Todo el contenido visible — textos de UI, preguntas del FAQ, casos de éxito, descripciones de servicios — está centralizado en los archivos de traducción:

```
src/i18n/es.js   ← Idioma base (español)
src/i18n/en.js   ← Inglés
src/i18n/pt.js   ← Portugués
```

Para editar contenido visible: modificar únicamente los archivos de traducción, **no los componentes**. El idioma por defecto es español.

---

## Tarjeta de presentación (`/card`)

Disponible en `/card`. Muestra dos caras (1050×600 px cada una) con botones individuales de descarga PNG a alta resolución (2100×1200 px, escala ×2).

- **Cara frontal**: identidad de marca, headline, servicios
- **Cara trasera**: equipo con teléfonos, contacto, propuesta de valor, CTA

> **Nota técnica**: `html2canvas` no soporta `WebkitBackgroundClip: text`. No usar gradientes en texto dentro de los componentes de la tarjeta — usar colores sólidos.

---

## Diseño y variables CSS

Sistema de diseño basado en variables CSS en `src/index.css`:

```css
--primary:       #6C63FF   /* Púrpura principal */
--accent:        #00D4AA   /* Teal acento */
--primary-light: #8B85FF
--dark:          #0A0A0F   /* Fondo base */
--dark-2:        #12121A
--dark-3:        #1A1A26
--dark-4:        #22223A
--text:          #E8E8F0
--text-muted:    #8888A8
```

Las secciones alternan entre `--dark` y `--dark-2` para separación visual. El menú colapsa a hamburguesa desde **≤1024px** (no 768px) por tener 7 enlaces.

---

## Equipo

| Miembro | Rol | WhatsApp |
|---|---|---|
| Dairo | Arquitecto & Full Stack Developer | +53 55848425 |
| Yamila | PM · PO · QA Specialist | +53 53572771 |

**Correo**: yadaisoftware@gmail.com

---

## Repositorio

[https://github.com/dairoGM/my_landing](https://github.com/dairoGM/my_landing)
