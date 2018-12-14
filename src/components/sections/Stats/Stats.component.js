import React from 'react'
import { FormattedMessage } from 'react-intl'

export default () => (
  <section className="stats">
    <div className="container">
      <h2 className="section-about__title">
        <FormattedMessage id="Stats.Title" />
        {' '}
        🔢
      </h2>
      <div className="row">
        <div className="col-md-4 text-center stat-box">
          <h1 className="purple"><span className="counter">5</span>k+</h1>
          <h3>
            <FormattedMessage id="Stats.Hours" />
          </h3>
        </div>
        <div className="col-md-4 text-center stat-box">
          <h1 className="blue counter">12</h1>
          <h3>
            <FormattedMessage id="Stats.EnterpriseProjects" />
          </h3>
        </div>
        <div className="col-md-4 text-center stat-box">
          <h1 className="pink"><span className="counter">100+</span></h1>
          <h3>
            <FormattedMessage id="Stats.FunProjects" />
          </h3>
        </div>
      </div>
    </div>
  </section>
)
