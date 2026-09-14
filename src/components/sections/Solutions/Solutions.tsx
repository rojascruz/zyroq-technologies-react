import { useNavigate } from 'react-router-dom'

import { useLanguage } from '../../../hooks/useLanguage'
import { useTheme } from '../../../hooks/useTheme'

import zyroqZqLight from '../../../assets/logos/zyroq-zq.png'
import zyroqZqDark from '../../../assets/logos/zyroq-zq-light.png'

import './Solutions.css'

function Solutions() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const navigate = useNavigate()

  const activeLogo =
    theme === 'light'
      ? zyroqZqLight
      : zyroqZqDark

  const solutionIcons = [
    'bi-building',
    'bi-megaphone',
    'bi-diagram-3',
  ]

  const goToContact = () => {
    navigate('/contact')
  }

  return (
    <section
      className="solutions-section"
      id="solutions"
    >
      {/* =====================================================
          HERO
         ===================================================== */}

      <div className="solutions-hero">
        <div className="solutions-hero-glow" />

        <div className="container solutions-hero-container">
          <div className="solutions-hero-copy">
            <div className="solutions-eyebrow">
              <span />

              <strong>
                {t.home.solutions.eyebrow}
              </strong>
            </div>

            <h1>
              {t.home.solutions.title}
            </h1>

            <p>
              {t.home.solutions.description}
            </p>

            <button
              type="button"
              className="solutions-hero-button"
              onClick={goToContact}
            >
              <span>
                {t.home.solutions.cta}
              </span>

              <i
                className="bi bi-arrow-up-right"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* =================================================
              CONNECTED SYSTEM PANEL
             ================================================= */}

          <div className="solutions-hero-panel">
            <div className="solutions-panel-top">
              <span>
                {t.home.solutions.panel.label}
              </span>

              <span className="solutions-panel-status">
                {t.home.solutions.panel.status}
              </span>
            </div>

            <div className="solutions-panel-center">
              <div className="solutions-panel-core">
                <img
                  src={activeLogo}
                  alt="ZYROQ Technologies"
                />
              </div>

              <div className="solutions-panel-links">
                <span>
                  Web
                </span>

                <span>
                  Social
                </span>

                <span>
                  WhatsApp
                </span>

                <span>
                  Google
                </span>
              </div>
            </div>

            <p>
              {t.home.solutions.panel.description}
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          SOLUTIONS CATALOG
         ===================================================== */}

      <div className="solutions-catalog">
        <div className="container">
          <div className="solutions-catalog-header">
            <div>
              <div className="solutions-eyebrow">
                <span />

                <strong>
                  {t.home.solutions.catalogEyebrow}
                </strong>
              </div>

              <h2>
                {t.home.solutions.catalogTitle}
              </h2>
            </div>

            <p>
              {t.home.solutions.catalogDescription}
            </p>
          </div>

          <div className="solutions-grid">
            {t.home.solutions.items.map(
              (solution, index) => (
                <article
                  className="solution-card"
                  key={solution.title}
                >
                  <div className="solution-card-icon">
                    <i
                      className={`bi ${solutionIcons[index]}`}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="solution-card-tag">
                    {solution.tag}
                  </span>

                  <h3>
                    {solution.title}
                  </h3>

                  <p>
                    {solution.description}
                  </p>

                  <ul>
                    {solution.points.map(
                      (point) => (
                        <li key={point}>
                          <i
                            className="bi bi-check-lg"
                            aria-hidden="true"
                          />

                          <span>
                            {point}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>

                  <button
                    type="button"
                    onClick={goToContact}
                  >
                    <span>
                      {t.home.solutions.learnMore}
                    </span>

                    <i
                      className="bi bi-arrow-up-right"
                      aria-hidden="true"
                    />
                  </button>
                </article>
              ),
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          CONNECTION
         ===================================================== */}

      <div className="solutions-connection">
        <div className="container solutions-connection-container">
          <div className="solutions-connection-copy">
            <div className="solutions-eyebrow">
              <span />

              <strong>
                {t.home.solutions.connection.eyebrow}
              </strong>
            </div>

            <h2>
              {t.home.solutions.connection.title}
            </h2>

            <p>
              {t.home.solutions.connection.description}
            </p>
          </div>

          <div className="solutions-connection-system">
            <div className="connection-core">
              <img
                src={activeLogo}
                alt="ZYROQ Technologies"
              />
            </div>

            <div className="connection-item">
              <i
                className="bi bi-window"
                aria-hidden="true"
              />

              <span>
                Web
              </span>
            </div>

            <div className="connection-item">
              <i
                className="bi bi-share"
                aria-hidden="true"
              />

              <span>
                Social
              </span>
            </div>

            <div className="connection-item">
              <i
                className="bi bi-whatsapp"
                aria-hidden="true"
              />

              <span>
                WhatsApp
              </span>
            </div>

            <div className="connection-item">
              <i
                className="bi bi-search"
                aria-hidden="true"
              />

              <span>
                Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions