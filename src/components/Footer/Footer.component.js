import React from 'react'
import { FormattedMessage } from 'react-intl'

import github from 'assets/github.png'

export default () => (
  <footer>
    <div className="container-fluid">
      <div className="row footer">
        <div className="col-md-12 text-center">
          <h1>
            <FormattedMessage id="Common.Name" />
            <br/>
            <span>
              <FormattedMessage id="Common.LastName" />
            </span>
          </h1>
          <ul className="social-links">
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
      <div className="row sub-footer">
        <div className="col-md-12 text-center">
          <FormattedMessage id="Footer.Wish" /> ❤️!
        </div>
      </div>
    </div>
  </footer>
)
