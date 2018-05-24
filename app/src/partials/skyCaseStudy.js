import React from 'react'
import '../styles/home_case_study.css'
import skyHero from '../assets/sky-hero2.png'
import skyScreens from '../assets/sky-screens.png'
import blueLine from '../assets/blue-line.svg'

const SkyCaseStudy = ({ styleName }) => (
  <div className="home-section study-sky">
    <img className="study-line" src={blueLine} />
    <div className="study-header">
      <h1>
        Sky Satellite
      </h1>
    </div>
    <div className="study-body">
      <img className="study-image" src={skyScreens} />
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
  </div>
)

export default SkyCaseStudy
