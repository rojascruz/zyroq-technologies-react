import {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import { useLanguage } from '../../../hooks/useLanguage'
import { useTheme } from '../../../hooks/useTheme'

import logoLight from '../../../assets/logos/zyroq-technologies.png'
import logoDark from '../../../assets/logos/zyroq-technologies-ligth.png'


import './Header.css'

function Header() {
  const {
    t,
    language,
    setLanguage,
  } = useLanguage()

  const {
    theme,
    toggleTheme,
  } = useTheme()

  const navigate = useNavigate()
  const location = useLocation()

  const [menuOpen, setMenuOpen] =
    useState(false)

  const [
    languageOpen,
    setLanguageOpen,
  ] = useState(false)

  const languageRef =
    useRef<HTMLDivElement>(null)

  const closeMenus = () => {
    setMenuOpen(false)
    setLanguageOpen(false)
  }

  const goToHome = () => {
    navigate('/')
    closeMenus()
  }

  const goToContact = () => {
    navigate('/contact')
    closeMenus()
  }

  const changeLanguage = (
    newLanguage: 'es' | 'en',
  ) => {
    setLanguage(newLanguage)
    setLanguageOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent,
    ) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(
          event.target as Node,
        )
      ) {
        setLanguageOpen(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside,
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
      )
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setLanguageOpen(false)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="container header-container">
        <button
          type="button"
          className="header-logo"
          onClick={goToHome}
          aria-label="ZYROQ Technologies"
        >
          <img
            src={
              theme === 'light'
                ? logoLight
                : logoDark
            }
            alt="ZYROQ Technologies"
          />
        </button>

        <nav
          className={`header-nav ${
            menuOpen
              ? 'header-nav-open'
              : ''
          }`}
          aria-label={
            language === 'es'
              ? 'Navegación principal'
              : 'Main navigation'
          }
        >
          <NavLink
            to="/"
            end
            onClick={closeMenus}
            className={({ isActive }) =>
              isActive
                ? 'header-nav-active'
                : undefined
            }
          >
            {t.common.navigation.home}
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenus}
            className={({ isActive }) =>
              isActive
                ? 'header-nav-active'
                : undefined
            }
          >
            {t.common.navigation.services}
          </NavLink>

          <NavLink
            to="/packages"
            onClick={closeMenus}
            className={({ isActive }) =>
              isActive
                ? 'header-nav-active'
                : undefined
            }
          >
            {t.common.navigation.packages}
          </NavLink>


          <NavLink
            to="/contact"
            onClick={closeMenus}
            className={({ isActive }) =>
              isActive
                ? 'header-nav-active'
                : undefined
            }
          >
            {t.common.navigation.contact}
          </NavLink>
        </nav>

        <div className="header-actions">
          <div
            className="header-language-dropdown"
            ref={languageRef}
          >
            <button
              type="button"
              className={`header-language-trigger ${
                languageOpen
                  ? 'header-language-trigger-open'
                  : ''
              }`}
              onClick={() =>
                setLanguageOpen(
                  (current) => !current,
                )
              }
              aria-expanded={languageOpen}
              aria-haspopup="menu"
            >
              <i
                className="bi bi-globe2"
                aria-hidden="true"
              />

              <span>
                {language === 'es'
                  ? 'ES'
                  : 'EN'}
              </span>

              <i
                className={`bi bi-chevron-down header-language-chevron ${
                  languageOpen
                    ? 'header-language-chevron-open'
                    : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`header-language-menu ${
                languageOpen
                  ? 'header-language-menu-open'
                  : ''
              }`}
              role="menu"
            >
              <span className="header-language-title">
                {language === 'es'
                  ? 'Idioma'
                  : 'Language'}
              </span>

              <button
                type="button"
                className={`header-language-option ${
                  language === 'es'
                    ? 'header-language-option-active'
                    : ''
                }`}
                onClick={() =>
                  changeLanguage('es')
                }
                role="menuitem"
              >
                <span className="header-language-code">
                  ES
                </span>

                <span className="header-language-option-copy">
                  <strong>
                    Español
                  </strong>

                  <small>
                    Spanish
                  </small>
                </span>

                {language === 'es' && (
                  <i
                    className="bi bi-check-lg"
                    aria-hidden="true"
                  />
                )}
              </button>

              <button
                type="button"
                className={`header-language-option ${
                  language === 'en'
                    ? 'header-language-option-active'
                    : ''
                }`}
                onClick={() =>
                  changeLanguage('en')
                }
                role="menuitem"
              >
                <span className="header-language-code">
                  EN
                </span>

                <span className="header-language-option-copy">
                  <strong>
                    English
                  </strong>

                  <small>
                    Inglés
                  </small>
                </span>

                {language === 'en' && (
                  <i
                    className="bi bi-check-lg"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </div>

          <button
            type="button"
            className="header-theme-button"
            onClick={toggleTheme}
            aria-label={
              language === 'es'
                ? theme === 'dark'
                  ? 'Activar modo claro'
                  : 'Activar modo oscuro'
                : theme === 'dark'
                  ? 'Enable light mode'
                  : 'Enable dark mode'
            }
            title={
              language === 'es'
                ? theme === 'dark'
                  ? 'Modo claro'
                  : 'Modo oscuro'
                : theme === 'dark'
                  ? 'Light mode'
                  : 'Dark mode'
            }
          >
            <i
              className={
                theme === 'dark'
                  ? 'bi bi-sun'
                  : 'bi bi-moon-stars'
              }
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            className="header-cta"
            onClick={goToContact}
          >
            <span>
              {t.common.navigation.quote}
            </span>

            <i
              className="bi bi-arrow-up-right"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            className={`header-menu-button ${
              menuOpen
                ? 'header-menu-button-open'
                : ''
            }`}
            onClick={() => {
              setMenuOpen(
                (current) => !current,
              )

              setLanguageOpen(false)
            }}
            aria-label={
              language === 'es'
                ? menuOpen
                  ? 'Cerrar menú'
                  : 'Abrir menú'
                : menuOpen
                  ? 'Close menu'
                  : 'Open menu'
            }
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header