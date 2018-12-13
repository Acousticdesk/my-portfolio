import React from 'react'

import 'bootstrap/scss/bootstrap.scss'

import Header from './components/Header.component'
import Footer from './components/Footer.component'

import CaseStudySection from './components/sections/CaseStudy.component'
import TestimonialSection from './components/sections/Testimonial.component'
import StatsSection from './components/sections/Stats.component'
import ContactBannerSection from './components/sections/ContactBanner.component'

import './App.css'

const App = () => (
  <div className="App">
    <Header />
    <CaseStudySection />
    <TestimonialSection />

    <StatsSection />
    <ContactBannerSection />
    <Footer />
  </div>
)

export default App
