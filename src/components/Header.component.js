import React from 'react'

import behance from 'assets/behance.png'
import twitter from 'assets/twitter.png'
import github from 'assets/github.png'

export default () => (
  <header className="hero">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-6 col-xs-12">
          <nav>
            <div id="menu-toggle">
              <div className="hamburger">
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </div>
              <div className="cross">
                <span className="line" />
                <span className="line" />
              </div>
            </div>
            <ul className="main-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="hero-text">
            <h1><span>Hi, I am</span><br />Andrii Kicha.</h1>
            <h3>Web Developer from Ukraine</h3>
            <a href="#" className="btn btn-lg btn-primary">Know More</a>
            <ul className="social-links">
              <li className="label">Join me here</li>
              <li><a href="#"><img src={behance} /></a></li>
              <li><a href="#"><img src={twitter} /></a></li>
              <li><a href="#"><img src={github} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
)
