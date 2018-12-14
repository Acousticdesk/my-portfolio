import { createContext } from 'react'

import consts from './consts'

export default createContext({
  language: consts.DEFAULT_LANGUAGE,
  toggleLanguage: () => {},
})
