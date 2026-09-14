import { useNavigate } from 'react-router-dom'

import { useLanguage } from '../../../hooks/useLanguage'
import { useTheme } from '../../../hooks/useTheme'

import zyroqZqLight from '../../../assets/logos/zyroq-zq.png'
import zyroqZqDark from '../../../assets/logos/zyroq-zq-light.png'

import './Hero.css'

function Hero() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const { theme } = useTheme()

  const activeLogo =
    theme === 'light'
      ? zyroqZqLight
      : zyroqZqDark

  const goToContact = () => {
    navigate('/contact')
  }

  return (
    <section
      className="hero-section"
      id="home"
    >
      <div className="hero-grid-background" />
      <div className="hero-ambient-glow" />

      <div className="container hero-container">
        <div className="hero-layout">
          {/* =========================
              COPY
             ========================= */}

          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" />

              <span>
                {t.home.hero.badge}
              </span>
            </div>

            <h1 className="hero-title">
              {t.home.hero.titleStart}

              <span className="hero-title-highlight">
                {t.home.hero.titleHighlight}
              </span>
            </h1>

            <p className="hero-description">
              {t.home.hero.description}
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="hero-primary-action"
                onClick={goToContact}
              >
                <span>
                  {t.home.hero.primaryButton}
                </span>

                <span className="hero-primary-icon">
                  <i
                    className="bi bi-arrow-up-right"
                    aria-hidden="true"
                  />
                </span>
              </button>
            </div>

            <div className="hero-capabilities">
              {t.home.hero.capabilities.map(
                (capability) => (
                  <span key={capability}>
                    {capability}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* =========================
              DIGITAL SYSTEM
             ========================= */}

          <div className="hero-system-wrap">
            <div className="hero-system-topline">
              <div>
                <span className="hero-system-dot" />

                <span>
                  {
                    t.home.hero.ecosystem
                      .systemLabel
                  }
                </span>
              </div>

              <span className="hero-system-state">
                {
                  t.home.hero.ecosystem
                    .systemStatus
                }
              </span>
            </div>

            <div className="hero-system-panel">
              <div className="hero-system-brand">
                <div className="hero-system-logo-box">
                  <img
                    src={activeLogo}
                    alt="ZYROQ Technologies"
                  />
                </div>

                <div className="hero-system-brand-copy">
                  <span>
                    ZYROQ
                  </span>

                  <strong>
                    {
                      t.home.hero.ecosystem
                        .title
                    }
                  </strong>
                </div>
              </div>

              <div className="hero-system-divider" />

              <div className="hero-system-list">
                <div className="hero-system-item">
                  <div className="hero-system-item-main">
                    <span className="hero-system-item-icon">
                      <i
                        className="bi bi-window"
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <strong>
                        {
                          t.home.hero
                            .ecosystem.web
                            .label
                        }
                      </strong>

                      <small>
                        {
                          t.home.hero
                            .ecosystem.web
                            .description
                        }
                      </small>
                    </div>
                  </div>

                  <span className="hero-system-item-status">
                    {
                      t.home.hero.ecosystem
                        .web.status
                    }
                  </span>
                </div>

                <div className="hero-system-item">
                  <div className="hero-system-item-main">
                    <span className="hero-system-item-icon">
                      <i
                        className="bi bi-share"
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <strong>
                        {
                          t.home.hero
                            .ecosystem.social
                            .label
                        }
                      </strong>

                      <small>
                        {
                          t.home.hero
                            .ecosystem.social
                            .description
                        }
                      </small>
                    </div>
                  </div>

                  <span className="hero-system-item-status">
                    {
                      t.home.hero.ecosystem
                        .social.status
                    }
                  </span>
                </div>

                <div className="hero-system-item">
                  <div className="hero-system-item-main">
                    <span className="hero-system-item-icon">
                      <i
                        className="bi bi-whatsapp"
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <strong>
                        {
                          t.home.hero
                            .ecosystem.whatsapp
                            .label
                        }
                      </strong>

                      <small>
                        {
                          t.home.hero
                            .ecosystem.whatsapp
                            .description
                        }
                      </small>
                    </div>
                  </div>

                  <span className="hero-system-item-status">
                    {
                      t.home.hero.ecosystem
                        .whatsapp.status
                    }
                  </span>
                </div>

                <div className="hero-system-item">
                  <div className="hero-system-item-main">
                    <span className="hero-system-item-icon">
                      <i
                        className="bi bi-search"
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <strong>
                        {
                          t.home.hero
                            .ecosystem.google
                            .label
                        }
                      </strong>

                      <small>
                        {
                          t.home.hero
                            .ecosystem.google
                            .description
                        }
                      </small>
                    </div>
                  </div>

                  <span className="hero-system-item-status">
                    {
                      t.home.hero.ecosystem
                        .google.status
                    }
                  </span>
                </div>
              </div>

              <div className="hero-system-summary">
                <span className="hero-system-summary-icon">
                  <i
                    className="bi bi-diagram-3"
                    aria-hidden="true"
                  />
                </span>

                <p>
                  {
                    t.home.hero.ecosystem
                      .summary
                  }
                </p>
              </div>
            </div>

            <div className="hero-system-meta">
              <span>
                DIGITAL PRESENCE
              </span>

              <span>
                CONNECTED SYSTEM
              </span>

              <span>
                ZYROQ
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero