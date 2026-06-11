import emailjs from '@emailjs/browser'
import {
  EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAIL_DESTINO,
  TELEGRAM_TOKEN, TELEGRAM_CHAT_DAIRO, TELEGRAM_CHAT_YAMILA,
} from '../config/notifications'

async function sendTelegram(chatId, text) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
  })
  if (!res.ok) throw new Error(`Telegram error ${res.status}`)
}

export async function sendContactForm({ name, email, subject, message }) {
  const telegramText =
    `📬 <b>Nuevo contacto — YADAI Software</b>\n\n` +
    `👤 <b>Nombre:</b> ${name}\n` +
    `✉️ <b>Correo:</b> ${email}\n` +
    `📌 <b>Asunto:</b> ${subject}\n\n` +
    `💬 <b>Mensaje:</b>\n${message}`

  const results = await Promise.allSettled([
    // Email
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      { from_name: name, from_email: email, subject, message, to_email: EMAIL_DESTINO },
      EMAILJS_PUBLIC_KEY,
    ),
    // Telegram Dairo
    sendTelegram(TELEGRAM_CHAT_DAIRO, telegramText),
    // Telegram Yamila
    sendTelegram(TELEGRAM_CHAT_YAMILA, telegramText),
  ])

  const anyOk = results.some(r => r.status === 'fulfilled')
  if (!anyOk) throw new Error('Todos los canales fallaron')
  return results
}
