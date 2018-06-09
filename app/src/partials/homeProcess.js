import React from 'react'
import Section from './layouts/section.js'
import ProcessImage from '../assets/process-img.png'

const HomeProcess = ({ styleName }) => (
  <div id="anchor-process">
    <Section>
      <div className="hero-header">
        <h1 className="header-soft">Design Process</h1>
      </div>
      <div className="two-column-content home-process">
        <div className="two-column-step body">
          <div className="body">
            To solve important problems, a team needs dedicated members, a single vision,
            and a design process that revolves around the user.
          </div>
          <div className="body">
            My experience leading product teams has taught me the skills and tools
            to bring great solutions to life.
          </div>
          <div className="body">
            I champion the user as a source of truth and bring best practices in
            human-centered design, design thinking, and facilitation to diverse teams.
          </div>
        </div>
        <div className="two-column-step process-list">
          <img alt="strategy facilitation research design validation learn"
          className="process-image" src={ProcessImage} />
        </div>
      </div>
    </Section>
  </div>
)

export default HomeProcess
