import React from 'react'

const AnimatedInlineLink = ({
  children,
  styleName,
  color,
  light = false,
}) => (
  <div className={`body animated-link ${styleName} ${color} ${light && 'light'}`}>
    {children}
  </div>
)

export default AnimatedInlineLink
