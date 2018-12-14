import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import LanguageContext from 'language-context'

import App from './App'

import messages from './messages'

export default () => {
  const [ language, toggleLanguage ] = useState('en')

  return (
    <IntlProvider
      locale={language}
      messages={messages[language]}
    >
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <App />
      </LanguageContext.Provider>
    </IntlProvider>
  )
}
