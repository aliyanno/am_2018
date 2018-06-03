import React from 'react'
import screens from '../assets/sky-screens.png'
import line from '../assets/blue-line.svg'
import Section from './layouts/section.js'
import AnimatedLink from './component/animatedLink.js'
import { BrowserRouter as Link } from "react-router-dom";

const SkyCaseStudy = ({ styleName }) => (
  <div>
    <a name="anchor-work"/>
    <Section styleName="offset-background-image study-sky">
      <img className="study-line" src={line} />
      <div className="study-header">
        <h1>
          Sky Satellite
        </h1>
      </div>
      <div className="study-body">
        <img className="study-image" src={screens} />
        <div className="study-content">
          <h4>
           Project & design lead
          </h4>
          <div className="body">
            8-month project to design and build a scalable solution for a
            distributed sales force.
          </div>
          <AnimatedLink color="blue"><a href="/sky">Read more</a></AnimatedLink>
        </div>
      </div>
    </Section>
  </div>
)

export default SkyCaseStudy
