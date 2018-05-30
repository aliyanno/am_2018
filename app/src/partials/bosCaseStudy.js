import React from 'react'
import screens from '../assets/bos-screens.png'
import line from '../assets/green-line.svg'
import HomeSection from './layouts/homeSection.js'

const BosCaseStudy = ({ styleName }) => (
  <HomeSection styleName="study study-bos">
    <img className="study-line" src={line} />
    <div className="study-header">
      <h1>
        PwC Business OS
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
      </div>
    </div>
  </HomeSection>
)

export default BosCaseStudy
