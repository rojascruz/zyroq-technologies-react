import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import { useNavigate } from 'react-router-dom'

import { useLanguage } from '../../../hooks/useLanguage'

import './Templates.css'

type TemplateCategory =
  | 'all'
  | 'professional'
  | 'restaurant'
  | 'realEstate'
  | 'beauty'
  | 'construction'
  | 'store'

type DeviceType =
  | 'desktop'
  | 'tablet'
  | 'mobile'

type TemplateId =
  | 'novaLegal'
  | 'savore'
  | 'vantage'
  | 'lumina'
  | 'apex'
  | 'mono'

interface TemplateConcept {
  id: TemplateId
  category: Exclude<
    TemplateCategory,
    'all'
  >
  icon: string
  number: string
}

const templateConcepts: TemplateConcept[] = [
  {
    id: 'novaLegal',
    category: 'professional',
    icon: 'bi-buildings',
    number: '01',
  },

  {
    id: 'savore',
    category: 'restaurant',
    icon: 'bi-cup-hot',
    number: '02',
  },

  {
    id: 'vantage',
    category: 'realEstate',
    icon: 'bi-house-door',
    number: '03',
  },

  {
    id: 'lumina',
    category: 'beauty',
    icon: 'bi-stars',
    number: '04',
  },

  {
    id: 'apex',
    category: 'construction',
    icon: 'bi-hammer',
    number: '05',
  },

  {
    id: 'mono',
    category: 'store',
    icon: 'bi-bag',
    number: '06',
  },
]

function Templates() {
  const {
    t,
    language,
  } = useLanguage()

  const navigate = useNavigate()

  const [
    activeCategory,
    setActiveCategory,
  ] =
    useState<TemplateCategory>(
      'all',
    )

  const [
    selectedTemplate,
    setSelectedTemplate,
  ] =
    useState<TemplateId | null>(
      null,
    )

  const [
    selectedDevice,
    setSelectedDevice,
  ] =
    useState<DeviceType>(
      'desktop',
    )

  const categories = [
    {
      id: 'all' as const,
      label:
        t.templates.filters.all,
    },
    {
      id: 'professional' as const,
      label:
        t.templates.filters
          .professional,
    },
    {
      id: 'restaurant' as const,
      label:
        t.templates.filters
          .restaurant,
    },
    {
      id: 'realEstate' as const,
      label:
        t.templates.filters
          .realEstate,
    },
    {
      id: 'beauty' as const,
      label:
        t.templates.filters.beauty,
    },
    {
      id: 'construction' as const,
      label:
        t.templates.filters
          .construction,
    },
    {
      id: 'store' as const,
      label:
        t.templates.filters.store,
    },
  ]

  const filteredTemplates =
    useMemo(() => {
      if (
        activeCategory === 'all'
      ) {
        return templateConcepts
      }

      return templateConcepts.filter(
        (template) =>
          template.category ===
          activeCategory,
      )
    }, [activeCategory])

  const selectedConcept =
    selectedTemplate
      ? t.templates.concepts[
          selectedTemplate
        ]
      : null

  const openPreview = (
    templateId: TemplateId,
  ) => {
    setSelectedTemplate(
      templateId,
    )

    setSelectedDevice(
      'desktop',
    )
  }

  const closePreview = () => {
    setSelectedTemplate(null)
  }

  const requestTemplate = (
    templateId: TemplateId,
  ) => {
    const concept =
      t.templates.concepts[
        templateId
      ]

    sessionStorage.setItem(
      'zyroq-selected-template',
      concept.name,
    )

    navigate('/contact')
  }

  useEffect(() => {
    if (!selectedTemplate) {
      return
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key === 'Escape'
      ) {
        closePreview()
      }
    }

    document.body.style.overflow =
      'hidden'

    window.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () => {
      document.body.style.overflow =
        ''

      window.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [selectedTemplate])

  return (
    <section className="templates">
      {/* =========================================
          HERO
         ========================================= */}

      <div className="container">
        <div className="templates-hero">
          <div className="templates-hero-copy">
            <span className="templates-eyebrow">
              {
                t.templates.hero
                  .eyebrow
              }
            </span>

            <h1>
              {
                t.templates.hero
                  .title
              }
            </h1>

            <p>
              {
                t.templates.hero
                  .description
              }
            </p>
          </div>

          <div className="templates-hero-badge">
            <span className="templates-hero-badge-dot" />

            <span>
              {
                t.templates.hero
                  .badge
              }
            </span>
          </div>
        </div>
      </div>

      {/* =========================================
          FILTERS
         ========================================= */}

      <div className="templates-filter-area">
        <div className="container">
          <div
            className="templates-filters"
            aria-label={
              t.templates.filters
                .label
            }
          >
            {categories.map(
              (category) => (
                <button
                  key={
                    category.id
                  }
                  type="button"
                  className={`templates-filter ${
                    activeCategory ===
                    category.id
                      ? 'is-active'
                      : ''
                  }`}
                  onClick={() =>
                    setActiveCategory(
                      category.id,
                    )
                  }
                >
                  {
                    category.label
                  }
                </button>
              ),
            )}
          </div>
        </div>
      </div>

      {/* =========================================
          GRID
         ========================================= */}

      <div className="container">
        <div className="templates-grid">
          {filteredTemplates.map(
            (template) => {
              const concept =
                t.templates.concepts[
                  template.id
                ]

              return (
                <article
                  key={
                    template.id
                  }
                  className="template-card"
                >
                  <div className="template-card-preview">
                    <TemplateVisual
                      templateId={
                        template.id
                      }
                      compact
                    />

                    <div className="template-card-overlay">
                      <button
                        type="button"
                        className="template-preview-button"
                        onClick={() =>
                          openPreview(
                            template.id,
                          )
                        }
                      >
                        <span>
                          {
                            t.templates
                              .card
                              .preview
                          }
                        </span>

                        <i
                          className="bi bi-arrow-up-right"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="template-card-content">
                    <div className="template-card-top">
                      <span className="template-card-number">
                        {
                          template.number
                        }
                      </span>

                      <span className="template-card-category">
                        <i
                          className={`bi ${template.icon}`}
                          aria-hidden="true"
                        />

                        {
                          concept.category
                        }
                      </span>
                    </div>

                    <h2>
                      {concept.name}
                    </h2>

                    <p className="template-card-tagline">
                      {
                        concept.tagline
                      }
                    </p>

                    <p className="template-card-description">
                      {
                        concept.description
                      }
                    </p>

                    <div className="template-card-features">
                      <span>
                        {
                          concept.feature1
                        }
                      </span>

                      <span>
                        {
                          concept.feature2
                        }
                      </span>

                      <span>
                        {
                          concept.feature3
                        }
                      </span>
                    </div>

                    <button
                      type="button"
                      className="template-card-request"
                      onClick={() =>
                        requestTemplate(
                          template.id,
                        )
                      }
                    >
                      <span>
                        {
                          t.templates.card
                            .request
                        }
                      </span>

                      <i
                        className="bi bi-arrow-right"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </article>
              )
            },
          )}
        </div>
      </div>

      {/* =========================================
          CTA
         ========================================= */}

      <div className="container">
        <div className="templates-cta">
          <div>
            <span className="templates-eyebrow">
              {
                t.templates.footer
                  .eyebrow
              }
            </span>

            <h2>
              {
                t.templates.footer
                  .title
              }
            </h2>

            <p>
              {
                t.templates.footer
                  .description
              }
            </p>
          </div>

          <button
            type="button"
            className="templates-cta-button"
            onClick={() =>
              navigate('/contact')
            }
          >
            <span>
              {
                t.templates.footer
                  .button
              }
            </span>

            <i
              className="bi bi-arrow-up-right"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* =========================================
          MODAL
         ========================================= */}

      {selectedTemplate &&
        selectedConcept && (
          <div
            className="template-modal"
            role="dialog"
            aria-modal="true"
            aria-label={
              t.templates.preview
                .title
            }
            onMouseDown={(
              event,
            ) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                closePreview()
              }
            }}
          >
            <div className="template-modal-panel">
              <div className="template-modal-header">
                <div>
                  <span className="templates-eyebrow">
                    {
                      t.templates.preview
                        .title
                    }
                  </span>

                  <h2>
                    {
                      selectedConcept.name
                    }
                  </h2>
                </div>

                <button
                  type="button"
                  className="template-modal-close"
                  onClick={
                    closePreview
                  }
                  aria-label={
                    t.templates.preview
                      .close
                  }
                >
                  <i
                    className="bi bi-x-lg"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="template-device-selector">
                <button
                  type="button"
                  className={
                    selectedDevice ===
                    'desktop'
                      ? 'is-active'
                      : ''
                  }
                  onClick={() =>
                    setSelectedDevice(
                      'desktop',
                    )
                  }
                >
                  <i className="bi bi-display" />

                  <span>
                    {
                      t.templates.preview
                        .desktop
                    }
                  </span>
                </button>

                <button
                  type="button"
                  className={
                    selectedDevice ===
                    'tablet'
                      ? 'is-active'
                      : ''
                  }
                  onClick={() =>
                    setSelectedDevice(
                      'tablet',
                    )
                  }
                >
                  <i className="bi bi-tablet" />

                  <span>
                    {
                      t.templates.preview
                        .tablet
                    }
                  </span>
                </button>

                <button
                  type="button"
                  className={
                    selectedDevice ===
                    'mobile'
                      ? 'is-active'
                      : ''
                  }
                  onClick={() =>
                    setSelectedDevice(
                      'mobile',
                    )
                  }
                >
                  <i className="bi bi-phone" />

                  <span>
                    {
                      t.templates.preview
                        .mobile
                    }
                  </span>
                </button>
              </div>

              <div className="template-device-stage">
                <div
                  className={`template-device-frame template-device-${selectedDevice}`}
                >
                  <TemplateVisual
                    templateId={
                      selectedTemplate
                    }
                  />
                </div>
              </div>

              <div className="template-modal-footer">
                <div>
                  <strong>
                    {
                      selectedConcept.tagline
                    }
                  </strong>

                  <p>
                    {
                      selectedConcept.description
                    }
                  </p>
                </div>

                <button
                  type="button"
                  className="template-modal-request"
                  onClick={() =>
                    requestTemplate(
                      selectedTemplate,
                    )
                  }
                >
                  <span>
                    {
                      t.templates.preview
                        .request
                    }
                  </span>

                  <i
                    className="bi bi-arrow-right"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        )}

      <span
        className="templates-language-marker"
        aria-hidden="true"
      >
        {language}
      </span>
    </section>
  )
}

interface TemplateVisualProps {
  templateId: TemplateId
  compact?: boolean
}

function TemplateVisual({
  templateId,
  compact = false,
}: TemplateVisualProps) {
  switch (templateId) {
    case 'novaLegal':
      return (
        <NovaLegalVisual
          compact={compact}
        />
      )

    case 'savore':
      return (
        <SavoreVisual
          compact={compact}
        />
      )

    case 'vantage':
      return (
        <VantageVisual
          compact={compact}
        />
      )

    case 'lumina':
      return (
        <LuminaVisual
          compact={compact}
        />
      )

    case 'apex':
      return (
        <ApexVisual
          compact={compact}
        />
      )

    case 'mono':
      return (
        <MonoVisual
          compact={compact}
        />
      )
  }
}


function NovaLegalVisual({
  compact,
}: {
  compact: boolean
}) {
  return (
    <div
      className={`demo-site demo-legal ${
        compact
          ? 'is-compact'
          : ''
      }`}
    >
      <header className="demo-header">
        <strong>NOVA LEGAL</strong>

        <nav>
          <span>Practice</span>
          <span>Team</span>
          <span>Contact</span>
        </nav>
      </header>

      <div className="demo-legal-hero">
        <div>
          <span className="demo-kicker">
            LEGAL COUNSEL
          </span>

          <h3>
            Defending what
            matters most.
          </h3>

          <p>
            Strategic legal
            representation built
            around trust.
          </p>

          <button type="button">
            REQUEST CONSULTATION
          </button>
        </div>

        <div className="demo-legal-art">
          <span>NL</span>
        </div>
      </div>

      <div className="demo-legal-stats">
        <div>
          <strong>15+</strong>
          <span>Years</span>
        </div>

        <div>
          <strong>500+</strong>
          <span>Cases</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Support</span>
        </div>
      </div>
    </div>
  )
}

function SavoreVisual({
  compact,
}: {
  compact: boolean
}) {
  return (
    <div
      className={`demo-site demo-savore ${
        compact
          ? 'is-compact'
          : ''
      }`}
    >
      <header className="demo-header">
        <strong>SAVORÉ</strong>

        <nav>
          <span>Menu</span>
          <span>Story</span>
          <span>Reserve</span>
        </nav>
      </header>

      <div className="demo-savore-hero">
        <span className="demo-kicker">
          MODERN CUISINE
        </span>

        <h3>
          Taste worth
          remembering.
        </h3>

        <p>
          Seasonal ingredients.
          Modern flavors.
          Unforgettable nights.
        </p>

        <button type="button">
          EXPLORE MENU
        </button>
      </div>

      <div className="demo-savore-bottom">
        <span>
          DINNER
          <strong>
            5PM — 11PM
          </strong>
        </span>

        <span>
          RESERVATIONS
          <strong>
            AVAILABLE
          </strong>
        </span>
      </div>
    </div>
  )
}

function VantageVisual({
  compact,
}: {
  compact: boolean
}) {
  return (
    <div
      className={`demo-site demo-vantage ${
        compact
          ? 'is-compact'
          : ''
      }`}
    >
      <header className="demo-header">
        <strong>VANTAGE</strong>

        <nav>
          <span>Properties</span>
          <span>Agents</span>
          <span>Contact</span>
        </nav>
      </header>

      <div className="demo-vantage-hero">
        <div>
          <span className="demo-kicker">
            REAL ESTATE
          </span>

          <h3>
            Find a place
            worth calling home.
          </h3>

          <button type="button">
            VIEW PROPERTIES
          </button>
        </div>

        <div className="demo-property-card">
          <span>
            FEATURED
          </span>

          <strong>
            Ocean Residence
          </strong>

          <small>
            4 BED · 3 BATH
          </small>
        </div>
      </div>
    </div>
  )
}

function LuminaVisual({
  compact,
}: {
  compact: boolean
}) {
  return (
    <div
      className={`demo-site demo-lumina ${
        compact
          ? 'is-compact'
          : ''
      }`}
    >
      <header className="demo-header">
        <strong>LUMINA</strong>

        <nav>
          <span>Services</span>
          <span>Gallery</span>
          <span>Book</span>
        </nav>
      </header>

      <div className="demo-lumina-hero">
        <span className="demo-kicker">
          BEAUTY STUDIO
        </span>

        <h3>
          Your beauty.
          Your moment.
        </h3>

        <p>
          Treatments designed
          around you.
        </p>

        <button type="button">
          BOOK APPOINTMENT
        </button>
      </div>

      <div className="demo-lumina-services">
        <span>HAIR</span>
        <span>NAILS</span>
        <span>SKIN</span>
      </div>
    </div>
  )
}

function ApexVisual({
  compact,
}: {
  compact: boolean
}) {
  return (
    <div
      className={`demo-site demo-apex ${
        compact
          ? 'is-compact'
          : ''
      }`}
    >
      <header className="demo-header">
        <strong>
          APEX / BUILD
        </strong>

        <nav>
          <span>Projects</span>
          <span>Services</span>
          <span>Estimate</span>
        </nav>
      </header>

      <div className="demo-apex-grid">
        <div className="demo-apex-copy">
          <span className="demo-kicker">
            BUILT TO LAST
          </span>

          <h3>
            We build
            confidence.
          </h3>

          <p>
            Reliable construction
            for residential and
            commercial projects.
          </p>

          <button type="button">
            GET AN ESTIMATE
          </button>
        </div>

        <div className="demo-apex-structure">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="demo-apex-footer">
        PROJECT 024
        <strong>
          COMMERCIAL
        </strong>
      </div>
    </div>
  )
}

function MonoVisual({
  compact,
}: {
  compact: boolean
}) {
  return (
    <div
      className={`demo-site demo-mono ${
        compact
          ? 'is-compact'
          : ''
      }`}
    >
      <header className="demo-header">
        <strong>MONO.</strong>

        <nav>
          <span>New</span>
          <span>Shop</span>
          <span>Bag 0</span>
        </nav>
      </header>

      <div className="demo-mono-title">
        <span>
          NEW COLLECTION
        </span>

        <h3>
          Less noise.
          More style.
        </h3>
      </div>

      <div className="demo-products">
        <article>
          <div />
          <span>
            ESSENTIAL 01
          </span>
        </article>

        <article>
          <div />
          <span>
            ESSENTIAL 02
          </span>
        </article>

        <article>
          <div />
          <span>
            ESSENTIAL 03
          </span>
        </article>
      </div>
    </div>
  )
}

export default Templates