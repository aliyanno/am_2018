import React from 'react'

const HomeSection = ({ children, styleName }) => (
  <div className={`home-section ${styleName}`}>
    {children}
  </div>
)

export default HomeSection
