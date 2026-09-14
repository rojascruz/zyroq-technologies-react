import { useLanguage } from '../../../hooks/useLanguage'
import { siteConfig } from '../../../config/siteConfig'
import './WhatsAppButton.css'

function WhatsAppButton() {
  const { language } = useLanguage()

  const openWhatsApp = () => {
    const message =
      language === 'es'
        ? 'Saludos, estoy interesado(a) en conocer más sobre los servicios de ZYROQ Technologies.'
        : 'Hello, I am interested in learning more about ZYROQ Technologies services.'

    const whatsappUrl =
      `https://wa.me/${siteConfig.whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <button
      type="button"
      className="whatsapp-floating-button"
      onClick={openWhatsApp}
      aria-label={
        language === 'es'
          ? 'Contactar por WhatsApp'
          : 'Contact through WhatsApp'
      }
    >
      <i
        className="bi bi-whatsapp"
        aria-hidden="true"
      />

      <span className="whatsapp-floating-label">
        WhatsApp
      </span>
    </button>
  )
}

export default WhatsAppButton