import React from 'react'
import Section from './section.js'

const TwoImageSection = ({ imageOne, imageTwo }) => (
  <Section>
    <div className="image-box two-image-box-one" style={{backgroundImage: `url(${imageOne})`}}/>
    <div className="image-box two-image-box-two" style={{backgroundImage: `url(${imageTwo})`}}/>
  </Section>
)

export default TwoImageSection
