import React from 'react'
import screens from '../assets/bos-screens.png'
import line from '../assets/green-line.svg'
import Section from './layouts/section.js'
import AnimatedLink from './component/animatedLink.js'

const BosCaseStudy = ({ styleName }) => (
  <Section styleName="offset-background-image study-bos">
    <img className="study-line" src={line} />
    <div className="study-header">
      <h1>
        Business OS
      </h1>
    </div>
    <div className="study-body">
      <img className="study-image" src={screens} />
      <div className="study-content">
        <h4>
         Design & strategy
        </h4>
        <div className="body">
          A 12-week project to translate the PwC business consulting experience
          into a digital solution for small businesses.
        </div>
        <AnimatedLink color="green">
          <a target="_blank" href="https://aliyamarder.typeform.com/to/Jtt04p">
            Request Case Study
          </a>
        </AnimatedLink>
      </div>
    </div>
  </Section>
)

export default BosCaseStudy
