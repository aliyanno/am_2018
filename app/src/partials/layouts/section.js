import React from 'react'

const Section = ({ children, styleName }) => (
  <div className={`home-section ${styleName}`}>
    {children}
  </div>
)

export default Section
