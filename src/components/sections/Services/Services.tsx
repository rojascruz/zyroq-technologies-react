import { useNavigate } from 'react-router-dom'

import { useLanguage } from '../../../hooks/useLanguage'

import heroVisual from '../../../assets/services/hero-visual.png'
import desarrolloWeb from '../../../assets/services/desarrollo-web.png'
import redesSociales from '../../../assets/services/redes-sociales.png'
import whatsappBusiness from '../../../assets/services/whatsapp-business.png'
import presenciaGoogle from '../../../assets/services/presencia-google.png'
import brandingIdentidad from '../../../assets/services/branding-identidad.png'
import hostingMantenimiento from '../../../assets/services/hosting-mantenimiento.png'

import './Services.css'

function Services() {
  const { t } = useLanguage()
  const navigate = useNavigate()

  const serviceImages = [
    desarrolloWeb,
    redesSociales,
    whatsappBusiness,
    presenciaGoogle,
    brandingIdentidad,
    hostingMantenimiento,
  ]

  const serviceIcons = [
    'bi-window',
    'bi-share',
    'bi-whatsapp',
    'bi-search',
    'bi-bezier2',
    'bi-cloud-check',
  ]

  const goToContact = () => {
    navigate('/contact')
  }

  const scrollToServices = () => {
    document
      .getElementById('services-grid')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <section
      className="services-section"
      id="services"
    >
      {/* =====================================================
          HERO
         ===================================================== */}

      <div className="services-hero">
        <div className="services-hero-background" />

        <div className="container services-hero-container">
          <div className="services-hero-copy">
            <div className="services-eyebrow">
              <span />

              <strong>
                {t.home.services.eyebrow}
              </strong>
            </div>

            <h1>
              {t.home.services.title}
            </h1>

            <p>
              {t.home.services.description}
            </p>

            <div className="services-hero-actions">
              <button
                type="button"
                className="services-primary-action"
                onClick={goToContact}
              >
                <span>
                  {t.home.services.cta}
                </span>

                <i
                  className="bi bi-arrow-up-right"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                className="services-secondary-action"
                onClick={scrollToServices}
              >
                <span className="services-secondary-icon">
                  <i
                    className="bi bi-play-fill"
                    aria-hidden="true"
                  />
                </span>

                <span>
                  {t.home.services.exploreButton}
                </span>
              </button>
            </div>

            <div className="services-hero-benefits">
              <div>
                <span className="services-benefit-icon">
                  <i
                    className="bi bi-check-lg"
                    aria-hidden="true"
                  />
                </span>

                <span>
                  {t.home.services.meta.flexible}
                </span>
              </div>

              <div>
                <span className="services-benefit-icon">
                  <i
                    className="bi bi-check-lg"
                    aria-hidden="true"
                  />
                </span>

                <span>
                  {t.home.services.meta.connected}
                </span>
              </div>

              <div>
                <span className="services-benefit-icon">
                  <i
                    className="bi bi-check-lg"
                    aria-hidden="true"
                  />
                </span>

                <span>
                  {t.home.services.meta.support}
                </span>
              </div>
            </div>
          </div>

          <div className="services-hero-visual">
            <img
              src={heroVisual}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          CATALOG
         ===================================================== */}

      <div
        className="services-catalog"
        id="services-grid"
      >
        <div className="container services-catalog-container">
          <div className="services-catalog-header">
            <div>
              <div className="services-eyebrow">
                <span />

                <strong>
                  {t.home.services.catalogEyebrow}
                </strong>
              </div>

              <h2>
                {t.home.services.catalogTitle}
              </h2>
            </div>

            <p>
              {t.home.services.catalogDescription}
            </p>
          </div>

          <div className="services-grid">
            {t.home.services.items.map(
              (service, index) => (
                <article
                  className="service-card"
                  key={service.title}
                >
                  <div className="service-card-content">
                    <span className="service-card-icon">
                      <i
                        className={`bi ${serviceIcons[index]}`}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="service-card-tag">
                      {service.tag}
                    </span>

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                    <button
                      type="button"
                      className="service-card-link"
                      onClick={goToContact}
                    >
                      <span>
                        {t.home.services.serviceButton}
                      </span>

                      <i
                        className="bi bi-arrow-up-right"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <div className="service-card-image">
                    <img
                      src={serviceImages[index]}
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services