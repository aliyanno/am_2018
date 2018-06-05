import React from 'react'
import AnimatedLink from '../component/animatedLink.js'

const MicrostudyTwo = () => (
  <div>
    <div className="shape-container blue-shape step-blue" />
    <h4>Micro-case</h4>
    <h3>Future of Advertising Ideation Workshop</h3>
    <div className="body">
      How might we leverage the expertise of 60 advertising experts in
      90 minutes to brainstorm the future of advertising?
    </div>
    <AnimatedLink>
      <a href="/Ideation.pdf">
        See workshop agenda
      </a>
    </AnimatedLink>
  </div>
)

export default MicrostudyTwo
