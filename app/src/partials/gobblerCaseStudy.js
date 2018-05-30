import React from 'react'
import screens from '../assets/gobbler-screens.png'
import line from '../assets/red-line.svg'
import HomeSection from './layouts/homeSection.js'

const GobblerCaseStudy = ({ styleName }) => (
  <HomeSection styleName="study study-gobbler right">
    <img className="study-line right" src={line} />
    <div className="study-header right">
      <h1>
        PwC 'Gobbler'
      </h1>
    </div>
    <div className="study-body right">
      <img className="study-image gobbler" src={screens} />
      <div className="study-content">
        <h4>
         Project & design lead
        </h4>
        <div className="body">
          6-week design sprint to create a ‘future-tech’ sales demo for a
          C-suite audience.
        </div>
      </div>
    </div>
  </HomeSection>
)

export default GobblerCaseStudy
