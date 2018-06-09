import React from 'react'
import Section from '../layouts/section.js'
import BackgroundImage from '../../assets/sky/challenge-hero.png'

const SkyChallengeSection = ({ styleName }) => (
  <Section styleName="offset-background-image section-sky-challenge">
    <div className="background-image-mobile-display">
      <img alt="" src={BackgroundImage} />
    </div>
    <div className="two-column-content">
      <div className="two-column-step">
        <h3>
          The challenge
        </h3>
        <div className="body">
          The SKY team was not accustomed to a lean or iterative process.
          They didn’t know what to expect and were fearful of losing
        </div>
        <div className="body">
          We had very limited access to the sales people for research or testing
          since they were employed by a third party company.
        </div>
        <div className="body">
          The sales people had very limited digital fluency and the company was
          wary of investing in new technology.
        </div>
      </div>
    </div>
  </Section>
)

export default SkyChallengeSection
