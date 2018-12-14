import React from 'react'

import 'react-dynamic-swiper/lib/styles.css'

import Header from './components/Header/Header.component'
import Footer from './components/Footer/Footer.component'

import StatsSection from './components/sections/Stats/Stats.component'
import ContactBannerSection from './components/sections/ContactBanner/ContactBanner.component'
import AboutSection from './components/sections/About/About.component'
import ProjectsSection from './components/sections/Projects/Projects.component'

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
