import React from 'react'

import github from 'assets/github.png'

export default () => (
  <header className="hero">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-6 col-xs-12">
          <div className="hero-text">
            <h1><span>Hi, I am</span><br />Andrii Kicha.</h1>
            <h3>Web Developer from Ukraine</h3>
            <ul className="social-links">
              <li className="label">Join me here</li>
              <li>
                <a target="_blank" href="https://github.com/Acousticdesk">
                  <img src={github} />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/andr.kicha">
                  <i className="fab fa-facebook-f icon--header" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/akicha/">
                  <i className="fab fa-linkedin-in icon--header" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
)
