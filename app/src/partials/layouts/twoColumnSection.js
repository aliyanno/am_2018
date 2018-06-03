import React from 'react'
import Section from './section.js'

const TwoColumnSection = ({
  sectionTitle,
  stepOne,
  stepTwo,
  stepThree,
  stepFour,
  stepFive,
  stepSix
}) => (
  <Section>
    <h3 className="section-title">{sectionTitle}</h3>
    <div className="two-column-content">
      <div className="two-column-step">
        {stepOne}
      </div>
      <div className="two-column-step">
        {stepTwo}
      </div>
    { stepThree && (
      <div className="two-column-step">
        {stepThree}
      </div>
    )}
    { stepFour && (
      <div className="two-column-step">
        {stepFour}
      </div>
    )}
    { stepFive && (
      <div className="two-column-step">
        {stepFive}
      </div>
    )}
    { stepSix && (
      <div className="two-column-step">
        {stepSix}
      </div>
    )}
    </div>
  </Section>
)

export default TwoColumnSection
