import { WA_DEFAULT } from '../data/contactInfo'
import { WhatsAppIcon } from './Nav'

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dharshan PG on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="wa-ring" />
      <WhatsAppIcon size={28} />
    </a>
  )
}
