import React from 'react'
import SkyStudyHero from '../partials/sky/skyStudyHero.js'
import SkyChallengeSection from '../partials/sky/skyChallengeSection.js'
import Footer from '../partials/footer.js'
import OneColumnSection from '../partials/layouts/oneColumnSection.js'
import TwoColumnSection from '../partials/layouts/twoColumnSection.js'
import TwoImageSection from '../partials/layouts/twoImageSection.js'
import FiveImageSection from '../partials/layouts/fiveImageSection.js'
import TextAndImageSection from '../partials/layouts/textAndImageSection.js'

import SalesWorkshopImage from '../assets/sky/sky-workshop.jpg'
import KickoffImage from '../assets/sky/sky-kickoff.jpg'
import ContractImage from '../assets/sky/contract.png'
import AssistImage from '../assets/sky/assist.png'
import Assist1 from '../assets/sky/assist1.jpg'
import Assist2 from '../assets/sky/assist2.png'
import Assist3 from '../assets/sky/assist3.png'
import Assist4 from '../assets/sky/assist4.png'
import Assist5 from '../assets/sky/assist5.jpg'

import SkyQuoteOne from '../partials/sky/skyQuoteOne.js'
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
    <TwoImageSection imageOne={SalesWorkshopImage} imageTwo={KickoffImage} />
    <OneColumnSection textContent={<SkyQuoteOne />} color="blue" />
    <TextAndImageSection
      textContent={<SkyProcessThree />}
      imageContent={ContractImage}
    />
    <TextAndImageSection
      textContent={<SkyProcessFour />}
      imageContent={AssistImage}
      reverse
    />
    <FiveImageSection
      imageOne={Assist1}
      imageTwo={Assist2}
      imageThree={Assist3}
      imageFour={Assist4}
      imageFive={Assist5}
    />
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
