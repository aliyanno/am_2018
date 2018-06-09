import React from 'react'

import HomeProcess from '../partials/homeProcess.js'
import HomeHero from '../partials/homeHero.js'
import SkyCaseStudy from '../partials/skyCaseStudy.js'
import GobblerCaseStudy from '../partials/gobblerCaseStudy.js'
import BosCaseStudy from '../partials/bosCaseStudy.js'
import TwoColumnSection from '../partials/layouts/twoColumnSection.js'
import HomeGallery from '../partials/homeGallery.js'

import MicrostudyOne from '../partials/home/microstudyOne.js'
import MicrostudyTwo from '../partials/home/microstudyTwo.js'
import MicrostudyThree from '../partials/home/microstudyThree.js'
import MicrostudyFour from '../partials/home/microstudyFour.js'
import Footer from '../partials/footer.js'
import heroAm from '../assets/hero-am.jpg'

const HomePage = ({ styleName }) => (
  <div className="App-container">
    <img alt="" className="hero-image" src={heroAm}/>
    <HomeHero />
    <HomeProcess styleName="home-section"/>
    <SkyCaseStudy />
    <GobblerCaseStudy />
    <BosCaseStudy />
    <TwoColumnSection
      stepOne={<MicrostudyOne />}
      stepTwo={<MicrostudyTwo />}
      stepThree={<MicrostudyThree />}
      stepFour={<MicrostudyFour />}
    />
    <HomeGallery />
    <Footer />
  </div>
)

export default HomePage
