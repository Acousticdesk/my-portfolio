import React from 'react'

import github from 'assets/github.png'

export default () => (
  <footer>
    <div className="container-fluid">
      <div className="row footer">
        <div className="col-md-12 text-center">
          <h1>Andrii<br/><span>Kicha</span></h1>
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
          Have a nice day ❤️!
        </div>
      </div>
    </div>
  </footer>
)
