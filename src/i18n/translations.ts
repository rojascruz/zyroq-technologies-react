import { commonEs } from './es/common'
import { homeEs } from './es/home'

import { commonEn } from './en/common'
import { homeEn } from './en/home'

export const translations = {
  es: {
    common: commonEs,
    home: homeEs,
  },

  en: {
    common: commonEn,
    home: homeEn,
  },
}

export type Language = keyof typeof translations