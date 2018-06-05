import React from 'react'
import AnimatedLink from '../component/animatedLink.js'

const MicrostudyThree = () => (
  <div>
    <div className="shape-container green-shape step-green" />
    <h4>Micro-case</h4>
    <h3>Peer Lending Product Strategy Workshop</h3>
    <div className="body">
      How might we understand the user, develop a roadmap, and deliver a
      cohesive brand in two weeks?
    </div>
    <AnimatedLink>
      <a href="/kickoff.pdf">
        See kickoff agenda
      </a>
    </AnimatedLink>
    <AnimatedLink>
      <a href="https://www.venmetro.com/">
        See finished site
      </a>
    </AnimatedLink>
  </div>
)

export default MicrostudyThree
