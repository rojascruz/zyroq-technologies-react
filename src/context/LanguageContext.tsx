import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import {
  translations,
  type Language,
} from '../i18n/translations'

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: typeof translations.es
}

export const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined)

type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguageState] =
    useState<Language>(() => {
      const savedLanguage =
        localStorage.getItem('zyroq-language')

      if (
        savedLanguage === 'es' ||
        savedLanguage === 'en'
      ) {
        return savedLanguage
      }

      return 'es'
    })

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)

    localStorage.setItem(
      'zyroq-language',
      newLanguage,
    )
  }

  const toggleLanguage = () => {
    setLanguage(
      language === 'es'
        ? 'en'
        : 'es',
    )
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}