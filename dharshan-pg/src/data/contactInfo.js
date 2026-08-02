export const contactInfo = [
  { icon: '📍', label: 'Address', value: 'Gate No. 1, Sathish Reddy Layout, Electronic City Phase II, Bengaluru – 560100' },
  { icon: '🕐', label: 'Open', value: '24 hours, 7 days a week — walk-ins welcome' },
  { icon: '⭐', label: 'Rating', value: '4.8 / 5 on Google Maps' },
]

export const MAPS_URL = 'https://maps.app.goo.gl/odV6Y6pMrFBsx4im6'
export const PHONE_NUMBER = '+919843681449'
export const PHONE_DISPLAY = '+91 98436 81449'
export const WHATSAPP_NUMBER = '919843681449'
export const SITE_URL = 'https://dharshanpg.com'

/** Build a WhatsApp click-to-chat link with a pre-filled message */
export const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const WA_DEFAULT = waLink(
  'Hi Dharshan PG! I found your website and would like to know more about room availability.'
)
