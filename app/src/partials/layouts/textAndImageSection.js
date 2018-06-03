import React from 'react'
import Section from './section.js'

const TextAndImageSection = ({
  textContent,
  imageContent,
  reverse = false,
}) => (
  <Section>
    <div className={`text-section ${reverse && 'reverse'}`}>
      {textContent}
    </div>
    <div className={`image-section ${reverse && 'reverse'}`}>
      {imageContent}
    </div>
  </Section>
)

export default TextAndImageSection
