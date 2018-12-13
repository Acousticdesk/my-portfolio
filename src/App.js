import React from 'react'

import 'react-dynamic-swiper/lib/styles.css'

import Header from './components/Header.component'
import Footer from './components/Footer.component'

import StatsSection from './components/sections/Stats.component'
import ContactBannerSection from './components/sections/ContactBanner.component'
import AboutSection from './components/sections/About.component'
import ProjectsSection from './components/sections/Projects.component'

import './App.scss'

const App = () => (
  <div className="App">
    <Header />
    <AboutSection />
    <ProjectsSection />

    <StatsSection />
    <ContactBannerSection />
    <Footer />
  </div>
)

export default App
