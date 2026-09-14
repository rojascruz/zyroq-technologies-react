import { useNavigate } from 'react-router-dom'

import { useLanguage } from '../../hooks/useLanguage'
import { useTheme } from '../../hooks/useTheme'

import zyroqZqLight from '../../assets/logos/zyroq-zq.png'
import zyroqZqDark from '../../assets/logos/zyroq-zq-light.png'

import './NotFoundPage.css'

function NotFoundPage() {
  const navigate = useNavigate()

  const { t } = useLanguage()
  const { theme } = useTheme()

  const activeLogo =
    theme === 'light'
      ? zyroqZqLight
      : zyroqZqDark

  return (
    <main className="not-found-page">
      <div className="not-found-grid" />
      <div className="not-found-glow" />

      <div className="container not-found-container">
        <div className="not-found-panel">
          {/* =========================================
              TOP
             ========================================= */}

          <div className="not-found-top">
            <div className="not-found-brand">
              <img
                src={activeLogo}
                alt="ZYROQ Technologies"
              />

              <div>
                <span>
                  ZYROQ
                </span>

                <small>
                  DIGITAL SYSTEMS
                </small>
              </div>
            </div>

            <div className="not-found-status">
              <span />

              {t.common.notFound.system}
            </div>
          </div>

          {/* =========================================
              CONTENT
             ========================================= */}

          <div className="not-found-content">
            <div className="not-found-code">
              <span>
                404
              </span>

              <div className="not-found-code-line" />
            </div>

            <div className="not-found-copy">
              <div className="not-found-eyebrow">
                <span />

                <strong>
                  {t.common.notFound.eyebrow}
                </strong>
              </div>

              <h1>
                {t.common.notFound.title}
              </h1>

              <p>
                {t.common.notFound.description}
              </p>

              <div className="not-found-actions">
                <button
                  type="button"
                  className="not-found-primary"
                  onClick={() =>
                    navigate('/')
                  }
                >
                  <span>
                    {
                      t.common.notFound
                        .homeButton
                    }
                  </span>

                  <i
                    className="bi bi-arrow-left"
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  className="not-found-secondary"
                  onClick={() =>
                    navigate('/contact')
                  }
                >
                  <span>
                    {
                      t.common.notFound
                        .contactButton
                    }
                  </span>

                  <i
                    className="bi bi-arrow-up-right"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================
              FOOTER META
             ========================================= */}

          <div className="not-found-footer">
            <span>
              {
                t.common.notFound
                  .digitalPresence
              }
            </span>

            <span>
              {
                t.common.notFound
                  .connectedSystem
              }
            </span>

            <span>
              ZYROQ
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage