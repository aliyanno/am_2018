import React from 'react'
import screens from '../assets/sky-screens.png'
import line from '../assets/blue-line.svg'
import HomeSection from './layouts/homeSection.js'

const SkyCaseStudy = ({ styleName }) => (
  <HomeSection styleName="study study-sky">
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
      </div>
    </div>
  </HomeSection>
)

export default SkyCaseStudy
