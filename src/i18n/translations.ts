import { commonEs } from './es/common'
import { homeEs } from './es/home'
import { packagesEs } from './es/packages'
import { templatesEs } from './es/templates'

import { commonEn } from './en/common'
import { homeEn } from './en/home'
import { packagesEn } from './en/packages'
import { templatesEn } from './en/templates'

export const translations = {
  es: {
    common: commonEs,
    home: homeEs,
    packages: packagesEs,
    templates: templatesEs,
  },

  en: {
    common: commonEn,
    home: homeEn,
    packages: packagesEn,
    templates: templatesEn,
  },
}

export type Language =
  keyof typeof translations