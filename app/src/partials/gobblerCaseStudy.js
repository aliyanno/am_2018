import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import screens from '../assets/gobbler-screens.png'
import line from '../assets/red-line.svg'
import Section from './layouts/section.js'
import AnimatedLink from './component/animatedLink.js'

const GobblerCaseStudy = ({ styleName }) => (
  <Section styleName="offset-background-image study-gobbler right">
    <img alt="" className="study-line right" src={line} />
    <div className="study-header right">
      <h1>
        PwC 'Gobbler'
      </h1>
    </div>
    <div className="study-body right">
      <Parallax
        className="study-image gobbler"
        offsetXMin={-20}
        offsetXMax={-5}
      >
        <img alt="UI of the Gobbler Tablet UI" src={screens} />
      </Parallax>
      <div className="study-content">
        <h4>
         Project & design lead
        </h4>
        <div className="body">
          In a all-out sprint, I led a team of four to design a utterly delightful
          experience to capture the imaginations of attedees at MWC 2017.
        </div>
        <AnimatedLink>
          <a href="https://aliyamarder.typeform.com/to/Jtt04p">
            Request case study
          </a>
        </AnimatedLink>
      </div>
    </div>
  </Section>
)

export default GobblerCaseStudy
