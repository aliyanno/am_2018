import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import screens from '../assets/bos-screens.png'
import line from '../assets/green-line.svg'
import Section from './layouts/section.js'
import AnimatedLink from './component/animatedLink.js'

const BosCaseStudy = ({ styleName }) => (
  <Section styleName="offset-background-image study-bos">
    <img alt="" className="study-line" src={line} />
    <div className="study-header">
      <h1>
        Business OS
      </h1>
    </div>
    <div className="study-body">
      <Parallax
        className="study-image"
        offsetXMin={5}
        offsetXMax={-10}
      >
        <img alt="BusinessOS mobile UI screens" src={screens} />
      </Parallax>
      <div className="study-content">
        <h4>
         Design & strategy
        </h4>
        <div className="body">
          I worked with a group of six over three months to translate PwC's
          business expertise into meaningful and digestable advice for small
          business owners.
        </div>
        <AnimatedLink color="green">
          <a href="https://aliyamarder.typeform.com/to/Jtt04p">
            Request Case Study
          </a>
        </AnimatedLink>
      </div>
    </div>
  </Section>
)

export default BosCaseStudy
