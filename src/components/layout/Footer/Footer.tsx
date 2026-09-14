import { NavLink } from 'react-router-dom'

import { useLanguage } from '../../../hooks/useLanguage'
import { useTheme } from '../../../hooks/useTheme'
import { siteConfig } from '../../../config/siteConfig'

import logoLight from '../../../assets/logos/zyroq-technologies.png'
import logoDark from '../../../assets/logos/zyroq-technologies-ligth.png'

import './Footer.css'

function Footer() {
  const { t, language } = useLanguage()
  const { theme } = useTheme()

  const currentYear = new Date().getFullYear()

  const currentLogo =
    theme === 'light'
      ? logoLight
      : logoDark

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
    <footer className="site-footer">
      <div className="footer-background-grid" />

      <div className="container footer-container">
        {/* ===================================================
            SIGNATURE BAR
           =================================================== */}

        <div className="footer-signature">
          <div className="footer-signature-left">
            <span className="footer-signature-dot" />

            <span>
              {t.common.footer.tagline}
            </span>
          </div>

          <div className="footer-signature-right">
            <span>ZYROQ</span>

            <span className="footer-signature-divider" />

            <span>DIGITAL SYSTEMS</span>
          </div>
        </div>

        {/* ===================================================
            MAIN
           =================================================== */}

        <div className="footer-main">
          {/* ===============================================
              BRAND
             =============================================== */}

          <div className="footer-brand">
            <NavLink
              to="/"
              className="footer-logo"
              aria-label="ZYROQ Technologies"
            >
              <img
                src={currentLogo}
                alt="ZYROQ Technologies"
              />
            </NavLink>

            <p className="footer-description">
              {t.common.footer.description}
            </p>

            <NavLink
              to="/contact"
              className="footer-brand-cta"
            >
              <span>
                {t.common.navigation.quote}
              </span>

              <i
                className="bi bi-arrow-up-right"
                aria-hidden="true"
              />
            </NavLink>
          </div>

          {/* ===============================================
              NAVIGATION
             =============================================== */}

          <div className="footer-column footer-navigation">
            <div className="footer-column-heading">
              <span>
                {t.common.footer.navigationTitle}
              </span>
            </div>

            <nav
              aria-label={
                t.common.footer.navigationTitle
              }
            >
              <NavLink
                to="/"
                className="footer-nav-link"
              >
                <span>
                  {t.common.navigation.home}
                </span>

                <i
                  className="bi bi-arrow-right"
                  aria-hidden="true"
                />
              </NavLink>

              <NavLink
                to="/services"
                className="footer-nav-link"
              >
                <span>
                  {t.common.navigation.services}
                </span>

                <i
                  className="bi bi-arrow-right"
                  aria-hidden="true"
                />
              </NavLink>

              <NavLink
                to="/solutions"
                className="footer-nav-link"
              >
                <span>
                  {t.common.navigation.solutions}
                </span>

                <i
                  className="bi bi-arrow-right"
                  aria-hidden="true"
                />
              </NavLink>


              <NavLink
                to="/contact"
                className="footer-nav-link"
              >
                <span>
                  {t.common.navigation.contact}
                </span>

                <i
                  className="bi bi-arrow-right"
                  aria-hidden="true"
                />
              </NavLink>
            </nav>
          </div>

          {/* ===============================================
              CONTACT
             =============================================== */}

          <div className="footer-column footer-contact-column">
            <div className="footer-column-heading">
              <span>
                {t.common.footer.contactTitle}
              </span>
            </div>

            <div className="footer-contact">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <i
                    className="bi bi-telephone"
                    aria-hidden="true"
                  />
                </span>

                <div className="footer-contact-copy">
                  <span>
                    {siteConfig.phoneDisplay}
                  </span>

                  <i
                    className="bi bi-arrow-up-right"
                    aria-hidden="true"
                  />
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <i
                    className="bi bi-envelope"
                    aria-hidden="true"
                  />
                </span>

                <div className="footer-contact-copy">
                  <span>
                    {siteConfig.email}
                  </span>

                  <i
                    className="bi bi-arrow-up-right"
                    aria-hidden="true"
                  />
                </div>
              </a>

              <button
                type="button"
                className="footer-contact-item footer-whatsapp"
                onClick={openWhatsApp}
              >
                <span className="footer-contact-icon">
                  <i
                    className="bi bi-whatsapp"
                    aria-hidden="true"
                  />
                </span>

                <div className="footer-contact-copy">
                  <span>
                    {t.common.footer.whatsapp}
                  </span>

                  <i
                    className="bi bi-arrow-up-right"
                    aria-hidden="true"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM
           =================================================== */}

        <div className="footer-bottom">
          <p>
            © {currentYear} ZYROQ Technologies.{' '}
            {t.common.footer.rights}
          </p>

          <div className="footer-bottom-meta">
            <span>
              Puerto Rico
            </span>

            <span
              className="footer-bottom-dot"
              aria-hidden="true"
            />

            <span>
              {language === 'es' ? 'ES' : 'EN'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer