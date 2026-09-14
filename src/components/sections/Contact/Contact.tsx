import { useState } from 'react'
import type { FormEvent } from 'react'

import { useLanguage } from '../../../hooks/useLanguage'
import { siteConfig } from '../../../config/siteConfig'

import './Contact.css'

function Contact() {
  const { t, language } = useLanguage()

  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [serviceOpen, setServiceOpen] =
    useState(false)

  const openDirectWhatsApp = () => {
    const text =
      language === 'es'
        ? 'Saludos, estoy interesado(a) en conocer más sobre los servicios de ZYROQ Technologies.'
        : 'Hello, I am interested in learning more about ZYROQ Technologies services.'

    const whatsappUrl =
      `https://wa.me/${siteConfig.whatsappNumber}` +
      `?text=${encodeURIComponent(text)}`

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const openDirectEmail = () => {
    const subject =
      language === 'es'
        ? 'Consulta sobre servicios - ZYROQ Technologies'
        : 'Services inquiry - ZYROQ Technologies'

    const body =
      language === 'es'
        ? `Saludos,

Estoy interesado(a) en conocer más sobre los servicios de ZYROQ Technologies.

Gracias.`
        : `Hello,

I am interested in learning more about ZYROQ Technologies services.

Thank you.`

    const emailUrl =
      `mailto:${siteConfig.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = emailUrl
  }

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const whatsappMessage =
      language === 'es'
        ? `Saludos, estoy interesado(a) en los servicios de ZYROQ Technologies.

Nombre: ${name || 'No especificado'}
Negocio: ${business || 'No especificado'}
Email: ${email || 'No especificado'}
Teléfono: ${phone || 'No especificado'}
Servicio: ${service || 'No especificado'}

Mensaje:
${
  message ||
  'Deseo recibir más información sobre sus servicios.'
}`
        : `Hello, I am interested in ZYROQ Technologies services.

Name: ${name || 'Not provided'}
Business: ${business || 'Not provided'}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}
Service: ${service || 'Not provided'}

Message:
${
  message ||
  'I would like to receive more information about your services.'
}`

    const whatsappUrl =
      `https://wa.me/${siteConfig.whatsappNumber}` +
      `?text=${encodeURIComponent(
        whatsappMessage,
      )}`

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="contact-background-detail" />

      <div className="container contact-container">
        <div className="contact-header">
          <div className="contact-eyebrow">
            <span />

            <strong>
              {t.home.contact.eyebrow}
            </strong>
          </div>

          <div className="contact-heading">
            <h1>
              {t.home.contact.title}
            </h1>

            <p>
              {t.home.contact.description}
            </p>
          </div>
        </div>

        <div className="contact-layout">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-section">
              <div className="contact-form-section-header">
                <span className="contact-form-section-icon">
                  <i
                    className="bi bi-person"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <span className="contact-form-step">
                    {
                      t.home.contact.form
                        .contactStep
                    }
                  </span>

                  <h2>
                    {
                      t.home.contact.form
                        .contactTitle
                    }
                  </h2>
                </div>
              </div>

              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    {
                      t.home.contact.form
                        .nameLabel
                    }
                  </label>

                  <div className="contact-input-wrap">
                    <i
                      className="bi bi-person"
                      aria-hidden="true"
                    />

                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(event) =>
                        setName(
                          event.target.value,
                        )
                      }
                      placeholder={
                        t.home.contact.form
                          .namePlaceholder
                      }
                      autoComplete="name"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-business">
                    {
                      t.home.contact.form
                        .businessLabel
                    }
                  </label>

                  <div className="contact-input-wrap">
                    <i
                      className="bi bi-building"
                      aria-hidden="true"
                    />

                    <input
                      id="contact-business"
                      type="text"
                      value={business}
                      onChange={(event) =>
                        setBusiness(
                          event.target.value,
                        )
                      }
                      placeholder={
                        t.home.contact.form
                          .businessPlaceholder
                      }
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    {
                      t.home.contact.form
                        .emailLabel
                    }
                  </label>

                  <div className="contact-input-wrap">
                    <i
                      className="bi bi-envelope"
                      aria-hidden="true"
                    />

                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(
                          event.target.value,
                        )
                      }
                      placeholder={
                        t.home.contact.form
                          .emailPlaceholder
                      }
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">
                    {
                      t.home.contact.form
                        .phoneLabel
                    }
                  </label>

                  <div className="contact-input-wrap">
                    <i
                      className="bi bi-telephone"
                      aria-hidden="true"
                    />

                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(event) =>
                        setPhone(
                          event.target.value,
                        )
                      }
                      placeholder={
                        t.home.contact.form
                          .phonePlaceholder
                      }
                      autoComplete="tel"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-divider" />

            <div className="contact-form-section">
              <div className="contact-form-section-header">
                <span className="contact-form-section-icon">
                  <i
                    className="bi bi-stars"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <span className="contact-form-step">
                    {
                      t.home.contact.form
                        .projectStep
                    }
                  </span>

                  <h2>
                    {
                      t.home.contact.form
                        .projectTitle
                    }
                  </h2>
                </div>
              </div>

              <div className="contact-project-fields">
                <div className="contact-field">
                  <label>
                    {
                      t.home.contact.form
                        .serviceLabel
                    }
                  </label>

                  <div className="contact-custom-select">
                    <button
                      type="button"
                      className={`contact-custom-select-trigger ${
                        serviceOpen
                          ? 'is-open'
                          : ''
                      }`}
                      onClick={() =>
                        setServiceOpen(
                          (current) =>
                            !current,
                        )
                      }
                    >
                      <span className="contact-custom-select-value">
                        <i
                          className="bi bi-grid"
                          aria-hidden="true"
                        />

                        <span>
                          {service ||
                            t.home.contact.form
                              .servicePlaceholder}
                        </span>
                      </span>

                      <i
                        className={`bi bi-chevron-down contact-custom-select-arrow ${
                          serviceOpen
                            ? 'is-open'
                            : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {serviceOpen && (
                      <div className="contact-custom-select-menu">
                        {t.home.contact.form.services.map(
                          (
                            serviceOption,
                          ) => (
                            <button
                              type="button"
                              key={
                                serviceOption
                              }
                              className={`contact-custom-select-option ${
                                service ===
                                serviceOption
                                  ? 'is-selected'
                                  : ''
                              }`}
                              onClick={() => {
                                setService(
                                  serviceOption,
                                )

                                setServiceOpen(
                                  false,
                                )
                              }}
                            >
                              <span>
                                {serviceOption}
                              </span>

                              {service ===
                                serviceOption && (
                                <i
                                  className="bi bi-check-lg"
                                  aria-hidden="true"
                                />
                              )}
                            </button>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    {
                      t.home.contact.form
                        .messageLabel
                    }
                  </label>

                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(event) =>
                      setMessage(
                        event.target.value,
                      )
                    }
                    placeholder={
                      t.home.contact.form
                        .messagePlaceholder
                    }
                    rows={5}
                  />
                </div>
              </div>
            </div>

            <div className="contact-form-footer">
              <div className="contact-form-helper">
                <i
                  className="bi bi-shield-check"
                  aria-hidden="true"
                />

                <span>
                  {
                    t.home.contact.form
                      .helper
                  }
                </span>
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                <i
                  className="bi bi-whatsapp"
                  aria-hidden="true"
                />

                <span>
                  {
                    t.home.contact.form
                      .submitButton
                  }
                </span>

                <span className="contact-submit-arrow">
                  <i
                    className="bi bi-arrow-up-right"
                    aria-hidden="true"
                  />
                </span>
              </button>
            </div>
          </form>

          <aside className="contact-direct">
            <div className="contact-direct-header">
              <div>
                <span className="contact-direct-kicker">
                  {
                    t.home.contact.direct
                      .label
                  }
                </span>

                <h2>
                  {
                    t.home.contact.direct
                      .title
                  }
                </h2>
              </div>

              <span className="contact-direct-status">
                <span />

                {
                  t.home.contact.direct
                    .status
                }
              </span>
            </div>

            <p className="contact-direct-description">
              {
                t.home.contact.direct
                  .description
              }
            </p>

            <button
              type="button"
              className="contact-method contact-method-featured"
              onClick={
                openDirectWhatsApp
              }
            >
              <span className="contact-method-icon">
                <i
                  className="bi bi-whatsapp"
                  aria-hidden="true"
                />
              </span>

              <span className="contact-method-copy">
                <small>
                  {
                    t.home.contact.direct
                      .whatsappLabel
                  }
                </small>

                <strong>
                  {
                    t.home.contact.direct
                      .whatsappTitle
                  }
                </strong>

                <span>
                  {
                    t.home.contact.direct
                      .whatsappDescription
                  }
                </span>
              </span>

              <i
                className="bi bi-arrow-up-right"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              className="contact-method"
              onClick={openDirectEmail}
            >
              <span className="contact-method-icon">
                <i
                  className="bi bi-envelope"
                  aria-hidden="true"
                />
              </span>

              <span className="contact-method-copy">
                <small>
                  {
                    t.home.contact.direct
                      .emailLabel
                  }
                </small>

                <strong>
                  {
                    t.home.contact.direct
                      .emailTitle
                  }
                </strong>

                <span>
                  {siteConfig.email}
                </span>
              </span>

              <i
                className="bi bi-arrow-up-right"
                aria-hidden="true"
              />
            </button>

            <a
              className="contact-method"
              href={`tel:${siteConfig.phoneHref}`}
            >
              <span className="contact-method-icon">
                <i
                  className="bi bi-telephone"
                  aria-hidden="true"
                />
              </span>

              <span className="contact-method-copy">
                <small>
                  {
                    t.home.contact.direct
                      .phoneLabel
                  }
                </small>

                <strong>
                  {
                    t.home.contact.direct
                      .phoneTitle
                  }
                </strong>

                <span>
                  {
                    siteConfig.phoneDisplay
                  }
                </span>
              </span>

              <i
                className="bi bi-arrow-up-right"
                aria-hidden="true"
              />
            </a>

            <div className="contact-note">
              <i
                className="bi bi-clock"
                aria-hidden="true"
              />

              <p>
                {t.home.contact.note}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact