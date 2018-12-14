import { defineMessages } from 'react-intl'

import commonLocaleEn from './components/en'
import commonLocaleRu from './components/ru'

import headerLocaleEn from './components/Header/en'
import headerLocaleRu from './components/Header/ru'

import footerLocaleEn from './components/Footer/en'
import footerLocaleRu from './components/Footer/ru'

import aboutLocaleEn from './components/sections/About/en'
import aboutLocaleRu from './components/sections/About/ru'

import contactBannerLocaleEn from './components/sections/ContactBanner/en'
import contactBannerLocaleRu from './components/sections/ContactBanner/ru'

import projectsLocaleEn from './components/sections/Projects/en'
import projectsLocaleRu from './components/sections/Projects/ru'

import statsLocaleEn from './components/sections/Stats/en'
import statsLocaleRu from './components/sections/Stats/ru'

export default defineMessages({
  en: {
    ...commonLocaleEn,
    ...headerLocaleEn,
    ...footerLocaleEn,
    ...aboutLocaleEn,
    ...contactBannerLocaleEn,
    ...projectsLocaleEn,
    ...statsLocaleEn,
  },
  ru: {
    ...commonLocaleRu,
    ...headerLocaleRu,
    ...footerLocaleRu,
    ...aboutLocaleRu,
    ...contactBannerLocaleRu,
    ...projectsLocaleRu,
    ...statsLocaleRu,
  }
})
