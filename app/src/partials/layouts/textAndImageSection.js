import React from 'react'
import Section from './section.js'

const TextAndImageSection = ({
  textContent,
  imageContent,
  altText,
  reverse = false,
}) => (
  <Section styleName={`${reverse && 'text-image-section-reverse'}`}>
    {
      reverse && (
        <div className={`image-section ${reverse && 'reverse'}`}>
          <img alt={altText} className="image-content" src={imageContent} />
        </div>
      )
    }
    <div className={`text-section ${reverse && 'reverse'}`}>
      {textContent}
    </div>
    {
      reverse || (
        <div className={`image-section ${reverse && 'reverse'}`}>
          <img alt={altText} className="image-content" src={imageContent} />
        </div>
      )
    }
  </Section>
)

export default TextAndImageSection
