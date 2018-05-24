import React from 'react'
import Navigation from './navigation.js'
import HomeProcess from './homeProcess.js'
import HomeHero from './homeHero.js'
import SkyCaseStudy from './skyCaseStudy.js'
import heroAm from '../assets/hero-am.jpg'


const HomePage = ({ styleName }) => (
  <div className="App-container">
    <img className="hero-image" src={heroAm}/>
    <HomeHero />
    <HomeProcess styleName="home-section"/>
    <SkyCaseStudy />
  </div>
)

export default HomePage
