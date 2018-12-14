import React from 'react'
import { FormattedMessage } from 'react-intl'

export default () => (
  <section className="contact-banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>
            <FormattedMessage id="ContactBanner.CTADescription" />
            {' '}
            🙂
          </h1>
          <a href="https://www.facebook.com/andr.kicha" className="btn btn-lg btn-primary">
            <FormattedMessage id="ContactBanner.CTA" />
          </a>
        </div>
      </div>
    </div>
  </section>
)
