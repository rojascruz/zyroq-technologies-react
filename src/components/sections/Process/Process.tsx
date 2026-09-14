import { useLanguage } from '../../../hooks/useLanguage'

import './Process.css'

function Process() {
  const { t } = useLanguage()

  return (
    <section
      className="process-section"
      id="process"
    >
      <div className="container process-container">
        {/* ===================================================
            HEADER
           =================================================== */}

        <div className="process-header">
          <div className="process-heading">
            <div className="process-eyebrow">
              <span />

              <strong>
                {t.home.process.eyebrow}
              </strong>
            </div>

            <h2>
              {t.home.process.title}
            </h2>
          </div>

          <p className="process-description">
            {t.home.process.description}
          </p>
        </div>

        {/* ===================================================
            PROCESS FLOW
           =================================================== */}

        <div className="process-flow">
          {t.home.process.steps.map(
            (step, index) => (
              <article
                className="process-step"
                key={step.title}
              >
                <div className="process-step-top">
                  <div className="process-icon">
                    <i
                      className={`bi ${step.icon}`}
                      aria-hidden="true"
                    />
                  </div>

                  {index <
                    t.home.process.steps.length - 1 && (
                    <span
                      className="process-connector"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="process-step-copy">
                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default Process