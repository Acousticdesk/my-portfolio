import React from 'react'

import logo1 from 'assets/logo-1.png'
import logo2 from 'assets/logo-2.png'
import logo3 from 'assets/logo-3.png'

export default () => (
  <section className="case-study">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h4 className="sub-heading">Exclusively</h4>
          <h1 className="heading purple"><span className="purple">works</span> with <br />Startups and founders</h1>
          <div className="swiper-container client-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide client-box">
                <img src={logo1} className="client-logo" />
                  <h3 className="text-left title">Visual identity for upsidedown</h3>
                  <p className="text-left tag">Branding, UI, Website</p>
                  <p className="text-left"><a href="#">Know More &#8594;</a></p>
              </div>
              <div className="swiper-slide client-box">
                <img src={logo2} className="client-logo" />
                  <h3 className="text-left title">User Experience design for the AI</h3>
                  <p className="text-left tag">Branding, UI, Website</p>
                  <p className="text-left"><a href="#">Know More &#8594;</a></p>
              </div>
              <div className="swiper-slide client-box">
                <img src={logo3} className="client-logo" />
                  <h3 className="text-left title">Rebranding of the best motion studio</h3>
                  <p className="text-left tag">Branding, UI, Website</p>
                  <p className="text-left"><a href="#">Know More &#8594;</a></p>
              </div>
              <div className="swiper-slide client-box">
                <img src={logo1} className="client-logo" />
                  <h3 className="text-left title">Visual identity for upsidedown</h3>
                  <p className="text-left tag">Branding, UI, Website</p>
                  <p className="text-left"><a href="#">Know More &#8594;</a></p>
              </div>
              <div className="swiper-slide client-box">
                <img src={logo1} className="client-logo" />
                  <h3 className="text-left title">Visual identity for upsidedown</h3>
                  <p className="text-left tag">Branding, UI, Website</p>
                  <p className="text-left"><a href="#">Know More &#8594;</a></p>
              </div>
            </div>

          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </div>
    </div>
  </section>
)
