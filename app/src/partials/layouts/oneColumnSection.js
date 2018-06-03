import React from 'react'
import Section from './section.js'

const OneColumnSection = ({ textContent, color }) => (
  <Section>
    <div className={`one-column-content ${color}`}>
      {textContent}
    </div>
  </Section>
)

export default OneColumnSection
