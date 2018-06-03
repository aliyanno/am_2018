import React from 'react'

const AnimatedLink = ({
  children,
  styleName,
  color,
  light = false,
}) => (
  <h5 className={`animated-link ${styleName} ${color} ${light && 'light'}`}>
    {children}
  </h5>
)

export default AnimatedLink
