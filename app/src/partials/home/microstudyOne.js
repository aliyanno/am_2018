import React from 'react'
import AnimatedLink from '../component/animatedLink.js'

const MicrostudyOne = () => (
  <div>
    <div className="shape-container red-shape step-red" />
    <h4>Micro-case</h4>
    <h3>Blockchain brand workshop</h3>
    <div className="body">
      How might we communicate blockchain products in an approachable and
      trustworthy manner?
    </div>
    <AnimatedLink>
      <a href="/BrandWorkbook.pdf">
        See brand workbook
      </a>
    </AnimatedLink>
    <AnimatedLink>
      <a href="https://philosophie.invisionapp.com/share/N9COIP2D7">
        See mockup
      </a>
    </AnimatedLink>
    <AnimatedLink>
      <a href="https://omega.one/">
        See finished site
      </a>
    </AnimatedLink>
  </div>
)

export default MicrostudyOne
