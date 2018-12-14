import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Swiper, Slide } from 'react-dynamic-swiper'

import reactLogo from 'assets/logo.svg'

export default () => (
  <div className="container">
    <h2 className="section-about__title">
      <FormattedMessage id="Projects.Title" />
      🎉
    </h2>
    <p>
      <FormattedMessage id="Projects.SectionDescription" />
    </p>
    <Swiper>
      <Slide>
        <div className="client-box">
          <img src={reactLogo} className="client-logo" />
          <h3 className="text-center title">
            <FormattedMessage id="Projects.GTADescription" />
          </h3>
          <p className="text-center tag">React, Bulma</p>
          <p className="text-center">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://acousticdesk.github.io/gta-cheats/"
            >
              <FormattedMessage id="Projects.CheckIt" />
              &#8594;
            </a>
          </p>
        </div>
      </Slide>
      <Slide>
        <div className="client-box">
          <img src={reactLogo} className="client-logo" />
          <h3 className="text-center title">
            <FormattedMessage id="Projects.BurgersDescription" />
          </h3>
          <p className="text-center tag">React, Victory</p>
          <p className="text-center">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://acousticdesk.github.io/kyiv-burgers"
            >
              <FormattedMessage id="Projects.CheckIt" />
              &#8594;
            </a>
          </p>
        </div>
      </Slide>
    </Swiper>
  </div>
)
