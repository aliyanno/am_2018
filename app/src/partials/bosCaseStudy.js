import React from 'react'
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
      <img data-aos="fade-left" data-aos-anchor-placement="center-bottom"
      alt="BusinessOS mobile UI screens" className="study-image" src={screens} />
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
