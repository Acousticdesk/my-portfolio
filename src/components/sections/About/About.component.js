import React from 'react'
import { FormattedMessage } from 'react-intl'

export default () => (
  <div className="container">
    <section className="section--about">
      <h2 className="section-about__title">
        <FormattedMessage id="About.Greeting" /> 🙂
      </h2>
      <p className="section-about__text">
        <FormattedMessage
          id="About.Primary"
          values={{ reallyWordBold: (
            <b>
              <FormattedMessage id="About.Really" />
            </b>
          ) }}
        />
      </p>
      <p className="section-about__text">
        <FormattedMessage id="About.Secondary" />
      </p>
    </section>
  </div>
)
