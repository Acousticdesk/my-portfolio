import React from 'react'

import behance from 'assets/behance.png'
import twitter from 'assets/twitter.png'
import github from 'assets/github.png'

export default () => (
  <footer>
    <div className="container-fluid">
      <div className="row footer">
        <div className="col-md-12 text-center">
          <h1>Andrii<br/><span>Kicha</span></h1>
          <ul className="social-links">
            <li><a href="#"><img src={behance} /></a></li>
            <li><a href="#"><img src={twitter} /></a></li>
            <li><a href="#"><img src={github} /></a></li>
          </ul>
        </div>
      </div>
      <div className="row sub-footer">
        <div className="col-md-12 text-center">
          <p>Designed by <a href="#" target="_blank">@realvjy</a> | Download <a
            href="http://designerdada.com/free-bootstrap-one-page-portfolio-template/">here</a></p>
        </div>
      </div>
    </div>
  </footer>
)
