import React from 'react'
import Section from './section.js'

const TwoImageSection = ({ imageOne, imageTwo }) => (
  <Section>
    <div className="image-box-one">
      <img src={imageOne} />
    </div>
    <div className="image-box-two">
      <img src={imageTwo} />
    </div>
  </Section>
)

export default TwoImageSection
