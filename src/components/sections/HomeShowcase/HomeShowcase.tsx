import { useNavigate } from 'react-router-dom'

import { useLanguage } from '../../../hooks/useLanguage'
import { siteConfig } from '../../../config/siteConfig'

import frcProject from '../../../assets/images/projects/frc-security.png'
import cableLineProject from '../../../assets/images/projects/cable-line.png'

import './HomeShowcase.css'

function HomeShowcase() {
  const { t } = useLanguage()
  const navigate = useNavigate()

  const showcaseItems = [
    {
      id: 'frc',
      title:
        t.home.homeShowcase.projects.frc.title,

      type:
        t.home.homeShowcase.projects.frc.type,

      description:
        t.home.homeShowcase.projects.frc.description,

      image:
        frcProject,

      url:
        siteConfig.projects.frcSecurity.website,

      tags:
        t.home.homeShowcase.projects.frc.tags,
    },

    {
      id: 'cable',

      title:
        t.home.homeShowcase.projects.cable.title,

      type:
        t.home.homeShowcase.projects.cable.type,

      description:
        t.home.homeShowcase.projects.cable.description,

      image:
        cableLineProject,

      url:
        siteConfig.projects.cableLine.website,

      tags:
        t.home.homeShowcase.projects.cable.tags,
    },
  ]

  return (
    <section className="home-showcase">
      <div className="container home-showcase-container">
        {/* =========================================
            INTRO
           ========================================= */}

        <div className="home-showcase-intro">
          <div className="home-showcase-intro-left">
            <div className="home-showcase-eyebrow">
              <span />

              <strong>
                {t.home.homeShowcase.eyebrow}
              </strong>
            </div>

            <h2>
              {t.home.homeShowcase.title}
            </h2>
          </div>

          <div className="home-showcase-intro-right">
            <p>
              {t.home.homeShowcase.description}
            </p>

            <button
              type="button"
              className="home-showcase-services-link"
              onClick={() =>
                navigate('/services')
              }
            >
              <span>
                {t.home.homeShowcase.viewServices}
              </span>

              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* =========================================
            CAPABILITIES
           ========================================= */}

        <div className="home-showcase-capabilities">
          {t.home.homeShowcase.services.map(
            (service) => (
              <div
                className="home-showcase-capability"
                key={service.label}
              >
                <span className="home-showcase-capability-icon">
                  <i
                    className={`bi ${service.icon}`}
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <strong>
                    {service.label}
                  </strong>

                  <small>
                    {service.description}
                  </small>
                </div>
              </div>
            ),
          )}
        </div>

        {/* =========================================
            WORK HEADER
           ========================================= */}

        <div className="home-showcase-project-header">
          <div>
            <span className="home-showcase-project-kicker">
              {
                t.home.homeShowcase
                  .projectsEyebrow
              }
            </span>

            <h3>
              {
                t.home.homeShowcase
                  .projectsTitle
              }
            </h3>
          </div>
        </div>

        {/* =========================================
            SHOWCASE
           ========================================= */}

        <div className="home-showcase-projects">
          {showcaseItems.map((item) => (
            <article
              className="home-showcase-project"
              key={item.id}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="home-project-visual"
                aria-label={`${t.home.homeShowcase.visitProject}: ${item.title}`}
              >
                <div className="home-project-browser">
                  <div className="home-project-browser-bar">
                    <div className="home-project-browser-dots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="home-project-browser-address">
                      <i
                        className="bi bi-lock-fill"
                        aria-hidden="true"
                      />

                      <span>
                        {item.url
                          .replace(
                            'https://',
                            '',
                          )
                          .replace('/', '')}
                      </span>
                    </div>
                  </div>

                  <div className="home-project-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="home-project-overlay">
                      <span>
                        {
                          t.home.homeShowcase
                            .visitProject
                        }
                      </span>

                      <i
                        className="bi bi-arrow-up-right"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </a>

              <div className="home-project-content">
                <div className="home-project-top">
                  <span>
                    {item.type}
                  </span>
                </div>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.description}
                </p>

                <div className="home-project-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeShowcase