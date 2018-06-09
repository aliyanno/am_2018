import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import screens from '../assets/sky-screens.png'
import line from '../assets/blue-line.svg'
import Section from './layouts/section.js'
import AnimatedLink from './component/animatedLink.js'

const SkyCaseStudy = ({ styleName }) => (
  <div id="anchor-work">
    <Section styleName="offset-background-image study-sky">
      <img alt="" className="study-line" src={line} />
      <div className="study-header">
        <h1>
          Sky Satellite
        </h1>
      </div>
      <div className="study-body">
        <Parallax
          className="study-image"
          offsetXMin={5}
          offsetXMax={-10}
        >
          <img alt="Tablet, mobile, and tv display for Sky Product" src={screens} />
        </Parallax>
        <div className="study-content">
          <h4>
           Project & design lead
          </h4>
          <div className="body">
            Over eight months, I led a team of six to design, build, and test
            seven different concepts, culminating in a cohesive and impactful
            solution to help sales people love their jobs.
          </div>
          <AnimatedLink color="blue"><a href="/sky">Read more</a></AnimatedLink>
        </div>
      </div>
    </Section>
  </div>
)

export default SkyCaseStudy
