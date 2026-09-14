import { useNavigate } from 'react-router-dom'

import { useLanguage } from '../../../hooks/useLanguage'
import { siteConfig } from '../../../config/siteConfig'

import './HomeCTA.css'

function HomeCTA() {
  const { t, language } = useLanguage()
  const navigate = useNavigate()

  const goToContact = () => {
    navigate('/contact')
  }

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
    <section className="home-cta">
      <div className="container home-cta-container">
        <div className="home-cta-copy">
          <div className="home-cta-eyebrow">
            <span />

            <strong>
              {t.home.homeCta.eyebrow}
            </strong>
          </div>

          <h2>
            {t.home.homeCta.title}
          </h2>

          <p>
            {t.home.homeCta.description}
          </p>
        </div>

        <div className="home-cta-actions">
          <button
            type="button"
            className="home-cta-primary"
            onClick={goToContact}
          >
            <span>
              {t.home.homeCta.primaryButton}
            </span>

            <i
              className="bi bi-arrow-up-right"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            className="home-cta-whatsapp"
            onClick={openWhatsApp}
          >
            <i
              className="bi bi-whatsapp"
              aria-hidden="true"
            />

            <span>
              {t.home.homeCta.whatsappButton}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA