import React, { Component } from 'react'
import Section from './layouts/section.js'

const HomeProcess = ({ styleName }) => (
  <Section>
    <div className="three-column-content">
      <div className="three-column-step">
        <h5 className="step-number">01</h5>
        <h4 className="step-title">Strategy</h4>
        <div className="body">I work with teams and stakeholders to communicate vision and
        develop long-term, fluid strategies to get us there.</div>
      </div>
      <div className="three-column-step">
        <h5 className="step-number">02</h5>
        <h4 className="step-title">Facilitation</h4>
        <div className="body">On-time and focused workshops to align the team around
        a single vision, identify interesting problems, and generate bold ideas
        for how to solve them.</div>
      </div>
      <div className="three-column-step">
        <h5 className="step-number">03</h5>
        <h4 className="step-title">Research</h4>
        <div className="body">Plan research sprints to best understand the pain
        points and motivations of those people we are focused on helping—stakeholders
        and end-users alike.</div>
      </div>
      <div className="three-column-step">
        <h5 className="step-number">04</h5>
        <h4 className="step-title">Experience</h4>
        <div className="body">My design process keeps the human central to the
        solution. By focusing on their needs, I can create a valuable experience.</div>
      </div>
      <div className="three-column-step">
        <h5 className="step-number">05</h5>
        <h4 className="step-title">Interaction</h4>
        <div className="body">I craft beautiful and intuitive designs using best
        practices and design ettiquette to create new and interesting solutions.</div>
      </div>
      <div className="three-column-step">
        <h5 className="step-number">06</h5>
        <h4 className="step-title">Implementation</h4>
        <div className="body">With a history of front end engineering, I work
        closely with development teams to deliver flawless experiences.
        And will often get my hands in the Javascript.</div>
      </div>
    </div>
  </Section>
)

export default HomeProcess
