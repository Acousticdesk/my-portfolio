import React from 'react'

export default () => (
  <section className="stats">
    <div className="container">
      <h2 className="section-about__title">Some Numbers 🔢</h2>
      <div className="row">
        <div className="col-md-4 text-center stat-box">
          <h1 className="purple"><span className="counter">5</span>k+</h1>
          <h3>Hours</h3>
        </div>
        <div className="col-md-4 text-center stat-box">
          <h1 className="blue counter">12</h1>
          <h3>Enterprise Projects</h3>
        </div>
        <div className="col-md-4 text-center stat-box">
          <h1 className="pink"><span className="counter">100+</span></h1>
          <h3>Fun Projects</h3>
        </div>
      </div>
    </div>
  </section>
)
