import React from 'react'
import SkyStudyHero from '../partials/sky/skyStudyHero.js'
import SkyChallengeSection from '../partials/sky/skyChallengeSection.js'
import Footer from '../partials/footer.js'
import TwoColumnSection from '../partials/layouts/twoColumnSection.js'
import TwoImageSection from '../partials/layouts/twoImageSection.js'
import TextAndImageSection from '../partials/layouts/textAndImageSection.js'

import ImageOne from '../assets/sky/sky-workshop.jpg'
import ImageTwo from '../assets/sky/sky-kickoff.jpg'
import SkyProcessOne from '../partials/sky/skyProcessOne.js'
import SkyProcessTwo from '../partials/sky/skyProcessTwo.js'
import SkyProcessThree from '../partials/sky/skyProcessThree.js'
import SkyProcessFour from '../partials/sky/skyProcessFour.js'
import SkyProcessFive from '../partials/sky/skyProcessFive.js'
import SkyProcessSix from '../partials/sky/skyProcessSix.js'
import SkyProcessSeven from '../partials/sky/skyProcessSeven.js'


const SkyView = ({ styleName }) => (
  <div className="App-container">
    <SkyStudyHero />
    <SkyChallengeSection />
    <TwoColumnSection
      sectionTitle=""
      stepOne={<SkyProcessOne />}
      stepTwo={<SkyProcessTwo />}
    />
    <TwoImageSection imageOne={ImageOne} imageTwo={ImageTwo} />
    <TextAndImageSection
      textContent={<SkyProcessThree />}
      imageContent=""
    />
    <TextAndImageSection
      textContent={<SkyProcessFour />}
      imageContent=""
      reverse
    />
    <TwoImageSection imageOne={ImageOne} imageTwo={ImageTwo} />
    <TwoColumnSection
      sectionTitle=""
      stepOne={<SkyProcessFive />}
      stepTwo={<SkyProcessSix />}
    />
    <TextAndImageSection
      textContent={<SkyProcessSeven />}
      imageContent=""
    />
    <Footer />
  </div>
)

export default SkyView
