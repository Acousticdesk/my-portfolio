import React from 'react'

import { Swiper, Slide } from 'react-dynamic-swiper'

import reactLogo from 'assets/logo.svg'

export default () => (
  <div className="container">
    <h2 className="section-about__title">Fun projects 🎉</h2>
    <p>
      Here you can find some of my recent fun projects that I enjoyed to work on
    </p>
    <Swiper>
      <Slide>
        <div className="client-box">
          <img src={reactLogo} className="client-logo" />
          <h3 className="text-center title">GTA San Andreas cheat codes with a search feature</h3>
          <p className="text-center tag">React, Bulma</p>
          <p className="text-center">
            <a target="_blank" href="https://acousticdesk.github.io/gta-cheats/">Check it &#8594;</a>
          </p>
        </div>
      </Slide>
      <Slide>
        <div className="client-box">
          <img src={reactLogo} className="client-logo" />
          <h3 className="text-center title">My personal rating for burgers in Kyiv</h3>
          <p className="text-center tag">React, Victory</p>
          <p className="text-center">
            <a target="_blank" href="https://acousticdesk.github.io/kyiv-burgers">Check it&#8594;</a>
          </p>
        </div>
      </Slide>
    </Swiper>
  </div>
)
