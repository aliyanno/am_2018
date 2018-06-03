import React from 'react'

const AnimatedLink = ({ children, styleName, color }) => (
  <h5 className={`animated-link ${styleName} ${color}`}>
    {children}
  </h5>
)

export default AnimatedLink
