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
import Strat1 from '../assets/sky/strat1.jpg'
import Strat2 from '../assets/sky/strat2.JPG'
import Strat3 from '../assets/sky/strat3.png'
import Strat4 from '../assets/sky/strat4.png'
import Strat5 from '../assets/sky/strat5.png'
import Strat6 from '../assets/sky/strat6.png'
import Strat7 from '../assets/sky/strat7.png'

import SkyQuoteOne from '../partials/sky/skyQuoteOne.js'
import SkyQuoteTwo from '../partials/sky/skyQuoteTwo.js'
import SkyProcessOne from '../partials/sky/skyProcessOne.js'
import SkyProcessTwo from '../partials/sky/skyProcessTwo.js'
import SkyProcessThree from '../partials/sky/skyProcessThree.js'
import SkyProcessFour from '../partials/sky/skyProcessFour.js'
import SkyProcessFive from '../partials/sky/skyProcessFive.js'
import SkyProcessSix from '../partials/sky/skyProcessSix.js'
import SkyProcessSeven from '../partials/sky/skyProcessSeven.js'
import SkyProcessNine from '../partials/sky/skyProcessNine.js'
import SkyProcessTen from '../partials/sky/skyProcessTen.js'
import SkyProcessEleven from '../partials/sky/skyProcessEleven.js'
import SkyProcessTwelve from '../partials/sky/skyProcessTwelve.js'
import SkyProcessThirteen from '../partials/sky/skyProcessThirteen.js'


const SkyView = ({ styleName }) => (
  <div className="App-container">
    <SkyStudyHero />
    <SkyChallengeSection />
    <TwoColumnSection
      sectionTitle="Improving the current experience"
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
      imageTwo={Assist3}
      imageThree={Assist2}
      imageFour={Assist4}
      imageFive={Assist5}
    />
    <TwoColumnSection
      sectionTitle="Evolving the experience to make it better"
      stepOne={<SkyProcessFive />}
      stepTwo={<SkyProcessSix />}
    />
    <TextAndImageSection
      textContent={<SkyProcessSeven />}
      imageContent={Strat1}
    />
    <TwoColumnSection
      stepOne={<SkyProcessNine />}
      stepTwo={<SkyProcessTen />}
    />
    <FiveImageSection
      imageOne={Strat2}
      imageTwo={Strat3}
      imageThree={Strat4}
      imageFour={Strat5}
      imageFive={Strat6}
    />
    <OneColumnSection textContent={<SkyQuoteTwo />} color="blue" />
    <TextAndImageSection
      textContent={<SkyProcessEleven />}
      imageContent={Strat7}
    />
    <TwoColumnSection
      sectionTitle="Looking forward"
      stepOne={<SkyProcessTwelve />}
      stepTwo={<SkyProcessThirteen />}
    />
    <Footer />
  </div>
)

export default SkyView
