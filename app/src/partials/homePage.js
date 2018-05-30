import React from 'react'
import Navigation from './navigation.js'
import HomeProcess from './homeProcess.js'
import HomeHero from './homeHero.js'
import SkyCaseStudy from './skyCaseStudy.js'
import GobblerCaseStudy from './gobblerCaseStudy.js'
import BosCaseStudy from './bosCaseStudy.js'
import MicroStudies from './microStudies.js'
import HomeGallery from './homeGallery.js'
import Footer from './footer.js'
import heroAm from '../assets/hero-am.jpg'


const HomePage = ({ styleName }) => (
  <div className="App-container">
    <img className="hero-image" src={heroAm}/>
    <HomeHero />
    <HomeProcess styleName="home-section"/>
    <SkyCaseStudy />
    <GobblerCaseStudy />
    <BosCaseStudy />
    <MicroStudies />
    <HomeGallery />
    <Footer />
  </div>
)

export default HomePage
