import { useNavigate } from 'react-router-dom'

import { useLanguage } from '../../../hooks/useLanguage'

import './CompactCTA.css'

type CompactCTAVariant =
  | 'services'
  | 'solutions'

interface CompactCTAProps {
  variant: CompactCTAVariant
}

function CompactCTA({
  variant,
}: CompactCTAProps) {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const copy =
    t.home.compactCta[variant]

  return (
    <section className="compact-cta">
      <div className="container compact-cta-container">
        <div className="compact-cta-panel">
          <div className="compact-cta-accent" />

          <div className="compact-cta-content">
            <div className="compact-cta-copy">
              <div className="compact-cta-eyebrow">
                <span />

                <strong>
                  {copy.eyebrow}
                </strong>
              </div>

              <h2>
                {copy.title}
              </h2>

              <p>
                {copy.description}
              </p>
            </div>

            <div className="compact-cta-action">
              <button
                type="button"
                className="compact-cta-button"
                onClick={() =>
                  navigate('/contact')
                }
              >
                <span>
                  {copy.button}
                </span>

                <span className="compact-cta-button-icon">
                  <i
                    className="bi bi-arrow-up-right"
                    aria-hidden="true"
                  />
                </span>
              </button>

              <span className="compact-cta-meta">
                ZYROQ / DIGITAL SYSTEMS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompactCTA