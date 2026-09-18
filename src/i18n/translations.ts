import { commonEs } from './es/common'
import { homeEs } from './es/home'
import { packagesEs } from './es/packages'

import { commonEn } from './en/common'
import { homeEn } from './en/home'
import { packagesEn } from './en/packages'

export const translations = {
  es: {
    common: commonEs,
    home: homeEs,
    packages: packagesEs,
  },

  en: {
    common: commonEn,
    home: homeEn,
    packages: packagesEn,
  },
}

export type Language =
  keyof typeof translations