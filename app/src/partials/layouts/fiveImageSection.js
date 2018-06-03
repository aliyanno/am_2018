import React from 'react'
import Section from './section.js'

const FiveImageSection = ({
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive
}) => (
  <Section>
    <div className="image-box five-image-box-one" style={{backgroundImage: `url(${imageOne})`}}/>
    <div className="image-box five-image-box-two" style={{backgroundImage: `url(${imageTwo})`}}/>
    <div className="image-box five-image-box-three" style={{backgroundImage: `url(${imageThree})`}}/>
    <div className="image-box five-image-box-four" style={{backgroundImage: `url(${imageFour})`}}/>
    <div className="image-box five-image-box-five" style={{backgroundImage: `url(${imageFive})`}}/>
  </Section>
)

export default FiveImageSection
