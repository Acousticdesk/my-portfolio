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
          <h3 className="text-left title">GTA San Andreas cheat codes with a search feature</h3>
          <p className="text-left tag">React, Bulma</p>
          <p className="text-left">
            <a target="_blank" href="https://acousticdesk.github.io/gta-cheats/">Try it &#8594;</a>
          </p>
        </div>
      </Slide>
      <Slide>
        <div className="client-box">
          <img src={reactLogo} className="client-logo" />
          <h3 className="text-left title">My personal rating for burgers in Kyiv</h3>
          <p className="text-left tag">React, Victory</p>
          <p className="text-left">
            <a target="_blank" href="https://acousticdesk.github.io/kyiv-burgers">Try it&#8594;</a>
          </p>
        </div>
      </Slide>
    </Swiper>
  </div>
)
