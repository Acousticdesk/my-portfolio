import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'

import LanguageContext from 'language-context'

import github from 'assets/github.png'

class Header extends PureComponent {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target: { value } }) {
    const { toggleLanguage } = this.context

    toggleLanguage(value)
  }

  render() {
    const { language } = this.context

    return (
      <header className="hero">
        <div className="language-select__container">
          <select className="custom-select" value={language} onChange={this.handleChange} name="language">
            <option value="en">🇺🇸</option>
            <option value="ru">🇷🇺</option>
          </select>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-6 col-xs-12">
              <div className="hero-text">
                <h1>
              <span>
                <FormattedMessage id="Header.Greeting" />
              </span>
                  <br />
                  <FormattedMessage id="Header.MyName"/>.
                </h1>
                <h3>
                  <FormattedMessage id="Header.Position" />
                </h3>
                <ul className="social-links">
                  <li className="label">
                    <FormattedMessage id="Header.CTA"/>
                  </li>
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
  }
}

Header.contextType = LanguageContext

export default Header
