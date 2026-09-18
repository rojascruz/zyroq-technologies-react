import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLanguage } from '../../../hooks/useLanguage'
import { siteConfig } from '../../../config/siteConfig'

import './Packages.css'

type FeatureStatus =
  | boolean
  | 'optional'

type PackageSection =
  | 'web'
  | 'presence'
  | 'branding'
  | 'addons'

function Packages() {
  const navigate = useNavigate()

  const {
    t,
    language,
  } = useLanguage()

  const [activeSection, setActiveSection] =
    useState<PackageSection>('web')

  const tabs: {
    id: PackageSection
    label: string
    icon: string
  }[] = [
    {
      id: 'web',
      label: t.packages.tabs.web,
      icon: 'bi-window',
    },
    {
      id: 'presence',
      label: t.packages.tabs.presence,
      icon: 'bi-diagram-3',
    },
    {
      id: 'branding',
      label: t.packages.tabs.branding,
      icon: 'bi-bezier2',
    },
    {
      id: 'addons',
      label: t.packages.tabs.addons,
      icon: 'bi-plus-lg',
    },
  ]

  const openWhatsApp = (
    serviceName: string,
  ) => {
    const message =
      language === 'es'
        ? `Saludos, estoy interesado(a) en ${serviceName} de ZYROQ Technologies. Me gustaría recibir más información.`
        : `Hello, I am interested in ${serviceName} from ZYROQ Technologies. I would like more information.`

    const url =
      `https://wa.me/${siteConfig.whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`

    window.open(
      url,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const renderStatus = (
    status: FeatureStatus,
  ) => {
    if (status === 'optional') {
      return (
        <span className="packages-feature-optional">
          {t.packages.labels.optional}
        </span>
      )
    }

    if (status) {
      return (
        <span
          className="packages-feature-status packages-feature-status-included"
          aria-label={
            t.packages.labels.included
          }
        >
          <i
            className="bi bi-check-lg"
            aria-hidden="true"
          />
        </span>
      )
    }

    return (
      <span
        className="packages-feature-status packages-feature-status-disabled"
        aria-label={
          t.packages.labels.notIncluded
        }
      >
        <i
          className="bi bi-dash-lg"
          aria-hidden="true"
        />
      </span>
    )
  }

  const comparisonFeatures =
    t.packages.plans[0].features.map(
      (feature, index) => ({
        name: feature.label,

        plans:
          t.packages.plans.map(
            (plan) =>
              plan.features[index]
                .included,
          ),
      }),
    )

  return (
    <section className="packages-section">
      {/* =========================================
          HERO
         ========================================= */}

      <div className="packages-hero">
        <div className="packages-hero-grid" />
        <div className="packages-hero-glow" />

        <div className="container packages-hero-container">
          <div className="packages-hero-content">
            <div className="packages-eyebrow">
              <span />

              <strong>
                {t.packages.hero.eyebrow}
              </strong>
            </div>

            <h1>
              {t.packages.hero.title}
            </h1>

            <p>
              {
                t.packages.hero
                  .description
              }
            </p>

            <div className="packages-hero-note">
              <i
                className="bi bi-info-circle"
                aria-hidden="true"
              />

              <span>
                {t.packages.hero.note}
              </span>
            </div>
          </div>

          <div className="packages-hero-signature">
            <span>
              ZYROQ
            </span>

            <small>
              DIGITAL SYSTEMS
            </small>

            <div>
              <i
                className="bi bi-arrow-down"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          NAVIGATION
         ========================================= */}

      <div className="packages-navigation">
        <div className="container">
          <div
            className="packages-tabs"
            role="tablist"
            aria-label={
              t.packages.tabs.label
            }
          >
            {tabs.map((tab) => {
              const isActive =
                activeSection ===
                tab.id

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={
                    isActive
                  }
                  className={`packages-tab ${
                    isActive
                      ? 'is-active'
                      : ''
                  }`}
                  onClick={() =>
                    setActiveSection(
                      tab.id,
                    )
                  }
                >
                  <span className="packages-tab-icon">
                    <i
                      className={`bi ${tab.icon}`}
                      aria-hidden="true"
                    />
                  </span>

                  <span>
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* =========================================
          WEB PACKAGES
         ========================================= */}

      {activeSection === 'web' && (
        <>
          <div className="packages-commercial">
            <div className="container">
              <div className="packages-commercial-grid">
                <article>
                  

                  <div>
                    <small>
                      {
                        t.packages
                          .commercial
                          .initialTitle
                      }
                    </small>

                    <strong>
                      {
                        t.packages
                          .commercial
                          .initialValue
                      }
                    </strong>

                    <p>
                      {
                        t.packages
                          .commercial
                          .initialText
                      }
                    </p>
                  </div>
                </article>

                <article className="is-accent">
                  

                  <div>
                    <small>
                      {
                        t.packages
                          .commercial
                          .hostingTitle
                      }
                    </small>

                    <strong>
                      $25 /{' '}
                      {
                        t.packages
                          .labels
                          .month
                      }
                    </strong>

                    <p>
                      {
                        t.packages
                          .commercial
                          .hostingText
                      }
                    </p>
                  </div>
                </article>

                <article>
                  

                  <div>
                    <small>
                      {
                        t.packages
                          .commercial
                          .updatesTitle
                      }
                    </small>

                    <strong>
                      {
                        t.packages
                          .commercial
                          .updatesValue
                      }
                    </strong>

                    <p>
                      {
                        t.packages
                          .commercial
                          .updatesText
                      }
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="packages-catalog">
            <div className="container">
              <div className="packages-section-intro">
                <div>
                  <div className="packages-eyebrow">
                    <span />

                    <strong>
                      {
                        t.packages.web
                          .eyebrow
                      }
                    </strong>
                  </div>

                  <h2>
                    {
                      t.packages.web
                        .title
                    }
                  </h2>
                </div>

                <p>
                  {
                    t.packages.web
                      .description
                  }
                </p>
              </div>

              <div className="packages-grid">
                {t.packages.plans.map(
                  (plan) => (
                    <article
                      key={plan.id}
                      className={`package-card ${
                        plan.featured
                          ? 'package-card-featured'
                          : ''
                      }`}
                    >
                      {plan.featured && (
                        <div className="package-card-badge">
                          <i
                            className="bi bi-stars"
                            aria-hidden="true"
                          />

                          {
                            t.packages
                              .labels
                              .popular
                          }
                        </div>
                      )}

                      <div className="package-card-top">
                        <span className="package-card-kicker">
                          {
                            plan.kicker
                          }
                        </span>

                        <h3>
                          {plan.name}
                        </h3>

                        <p>
                          {
                            plan.description
                          }
                        </p>
                      </div>

                      <div className="package-card-price">
                        <span className="package-price-from">
                          {
                            t.packages
                              .labels
                              .from
                          }
                        </span>

                        <strong>
                          {plan.price}
                        </strong>
                      </div>

                      <div className="package-hosting-price">
                        <i
                          className="bi bi-cloud-check"
                          aria-hidden="true"
                        />

                        <div>
                          <small>
                            {
                              t.packages
                                .labels
                                .monthly
                            }
                          </small>

                          <span>
                            {
                              plan.monthly
                            }
                            {' / '}
                            {
                              t.packages
                                .labels
                                .month
                            }
                          </span>
                        </div>
                      </div>

                      <div className="package-card-divider" />

                      <div className="package-feature-list">
                        {plan.features.map(
                          (feature) => (
                            <div
                              className="package-feature-row"
                              key={
                                feature.label
                              }
                            >
                              <span>
                                {
                                  feature.label
                                }
                              </span>

                              {renderStatus(
                                feature.included as FeatureStatus,
                              )}
                            </div>
                          ),
                        )}
                      </div>

                      <button
                        type="button"
                        className="package-card-button"
                        onClick={() =>
                          openWhatsApp(
                            plan.name,
                          )
                        }
                      >
                        <span>
                          {
                            t.packages
                              .labels
                              .choose
                          }
                        </span>

                        <span className="package-card-button-icon">
                          <i
                            className="bi bi-arrow-up-right"
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* COMMON */}

          <div className="packages-common">
            <div className="container">
              <div className="packages-section-intro">
                <div>
                  <div className="packages-eyebrow">
                    <span />

                    <strong>
                      {
                        t.packages.common
                          .eyebrow
                      }
                    </strong>
                  </div>

                  <h2>
                    {
                      t.packages.common
                        .title
                    }
                  </h2>
                </div>

                <p>
                  {
                    t.packages.common
                      .description
                  }
                </p>
              </div>

              <div className="packages-common-grid">
                {t.packages.common.items.map(
                  (item) => (
                    <article
                      className="packages-common-card"
                      key={
                        item.title
                      }
                    >
                      <span className="packages-common-icon">
                        <i
                          className={`bi ${item.icon}`}
                          aria-hidden="true"
                        />
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {
                          item.description
                        }
                      </p>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* COMPARISON */}

          <div className="packages-comparison">
            <div className="container">
              <div className="packages-section-intro">
                <div>
                  <div className="packages-eyebrow">
                    <span />

                    <strong>
                      {
                        t.packages
                          .comparison
                          .eyebrow
                      }
                    </strong>
                  </div>

                  <h2>
                    {
                      t.packages
                        .comparison
                        .title
                    }
                  </h2>
                </div>

                <p>
                  {
                    t.packages
                      .comparison
                      .description
                  }
                </p>
              </div>

              <div className="packages-table-wrap">
                <table className="packages-table">
                  <thead>
                    <tr>
                      <th>
                        {
                          t.packages
                            .comparison
                            .feature
                        }
                      </th>

                      {t.packages.plans.map(
                        (plan) => (
                          <th
                            key={
                              plan.id
                            }
                          >
                            {plan.name}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>

                  <tbody>
                    {comparisonFeatures.map(
                      (feature) => (
                        <tr
                          key={
                            feature.name
                          }
                        >
                          <td>
                            {
                              feature.name
                            }
                          </td>

                          {feature.plans.map(
                            (
                              status,
                              index,
                            ) => (
                              <td
                                key={`${feature.name}-${index}`}
                              >
                                {renderStatus(
                                  status as FeatureStatus,
                                )}
                              </td>
                            ),
                          )}
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>

              <div className="packages-web-notes">
                <article>
                  <i
                    className="bi bi-globe2"
                    aria-hidden="true"
                  />

                  <div>
                    <h3>
                      {
                        t.packages.domain
                          .title
                      }
                    </h3>

                    <p>
                      {
                        t.packages.domain
                          .description
                      }
                    </p>
                  </div>
                </article>

                <article>
                  <i
                    className="bi bi-arrow-repeat"
                    aria-hidden="true"
                  />

                  <div>
                    <h3>
                      {
                        t.packages
                          .hosting
                          .updatesTitle
                      }
                    </h3>

                    <p>
                      {
                        t.packages
                          .hosting
                          .note
                      }
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </>
      )}

      {/* =========================================
          DIGITAL PRESENCE
         ========================================= */}

      {activeSection ===
        'presence' && (
        <div className="packages-category">
          <div className="container">
            <div className="packages-category-hero">
              <div>
                <div className="packages-eyebrow">
                  <span />

                  <strong>
                    {
                      t.packages
                        .presence
                        .eyebrow
                    }
                  </strong>
                </div>

                <h2>
                  {
                    t.packages
                      .presence
                      .title
                  }
                </h2>
              </div>

              <p>
                {
                  t.packages
                    .presence
                    .description
                }
              </p>
            </div>

            <div className="packages-service-grid packages-service-grid-three">
              {t.packages.presence.items.map(
                (item) => (
                  <article
                    key={item.id}
                    className={`packages-service-card ${
                      item.featured
                        ? 'is-featured'
                        : ''
                    }`}
                  >
                    {item.featured && (
                      <span className="packages-service-badge">
                        {
                          t.packages
                            .labels
                            .recommended
                        }
                      </span>
                    )}

                    <div className="packages-service-card-index">
                     
                      <i
                        className={`bi ${item.icon}`}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="packages-service-kicker">
                      {item.kicker}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {
                        item.description
                      }
                    </p>

                    <div className="packages-service-price">
                      <small>
                        {
                          t.packages
                            .labels
                            .from
                        }
                      </small>

                      <strong>
                        {item.price}
                      </strong>
                    </div>

                    <div className="packages-service-features">
                      {item.features.map(
                        (feature) => (
                          <span
                            key={
                              feature
                            }
                          >
                            <i
                              className="bi bi-check-lg"
                              aria-hidden="true"
                            />

                            {feature}
                          </span>
                        ),
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        openWhatsApp(
                          item.name,
                        )
                      }
                    >
                      <span>
                        {
                          t.packages
                            .labels
                            .request
                        }
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
      )}

      {/* =========================================
          BRANDING
         ========================================= */}

      {activeSection ===
        'branding' && (
        <div className="packages-category">
          <div className="container">
            <div className="packages-category-hero">
              <div>
                <div className="packages-eyebrow">
                  <span />

                  <strong>
                    {
                      t.packages
                        .branding
                        .eyebrow
                    }
                  </strong>
                </div>

                <h2>
                  {
                    t.packages
                      .branding
                      .title
                  }
                </h2>
              </div>

              <p>
                {
                  t.packages
                    .branding
                    .description
                }
              </p>
            </div>

            <div className="packages-branding-grid">
              {t.packages.branding.items.map(
                (item) => (
                  <article
                    key={item.id}
                    className="packages-brand-card"
                  >
                    <div className="packages-brand-card-top">
                     
                      <i
                        className={`bi ${item.icon}`}
                        aria-hidden="true"
                      />
                    </div>

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {
                        item.description
                      }
                    </p>

                    <div className="packages-brand-price">
                      <small>
                        {
                          t.packages
                            .labels
                            .from
                        }
                      </small>

                      <strong>
                        {item.price}
                      </strong>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        openWhatsApp(
                          item.name,
                        )
                      }
                    >
                      {
                        t.packages
                          .labels
                          .request
                      }

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
      )}

      {/* =========================================
          ADD-ONS
         ========================================= */}

      {activeSection ===
        'addons' && (
        <div className="packages-category">
          <div className="container">
            <div className="packages-category-hero">
              <div>
                <div className="packages-eyebrow">
                  <span />

                  <strong>
                    {
                      t.packages
                        .addons
                        .eyebrow
                    }
                  </strong>
                </div>

                <h2>
                  {
                    t.packages
                      .addons
                      .title
                  }
                </h2>
              </div>

              <p>
                {
                  t.packages
                    .addons
                    .description
                }
              </p>
            </div>

            <div className="packages-addons">
              {t.packages.addons.items.map(
                (item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="packages-addon-row"
                    onClick={() =>
                      openWhatsApp(
                        item.name,
                      )
                    }
                  >
                    <span className="packages-addon-icon">
                      <i
                        className={`bi ${item.icon}`}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="packages-addon-copy">
                      <strong>
                        {item.name}
                      </strong>

                      <small>
                        {
                          item.description
                        }
                      </small>
                    </span>

                    <span className="packages-addon-price">
                      {item.price}
                    </span>

                    <span className="packages-addon-arrow">
                      <i
                        className="bi bi-arrow-up-right"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                ),
              )}
            </div>

            <div className="packages-addons-note">
              <i
                className="bi bi-info-circle"
                aria-hidden="true"
              />

              <p>
                {
                  t.packages
                    .addons
                    .note
                }
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          FINAL CTA
         ========================================= */}

      <div className="packages-final">
        <div className="container">
          <div className="packages-final-panel">
            <div className="packages-final-copy">
              <div className="packages-eyebrow">
                <span />

                <strong>
                  {
                    t.packages
                      .finalCta
                      .eyebrow
                  }
                </strong>
              </div>

              <h2>
                {
                  t.packages
                    .finalCta
                    .title
                }
              </h2>

              <p>
                {
                  t.packages
                    .finalCta
                    .description
                }
              </p>
            </div>

            <button
              type="button"
              className="packages-final-button"
              onClick={() =>
                navigate('/contact')
              }
            >
              <span>
                {
                  t.packages
                    .finalCta
                    .button
                }
              </span>

              <span className="packages-final-button-icon">
                <i
                  className="bi bi-arrow-up-right"
                  aria-hidden="true"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages