import React, { Component } from 'react'
import HomeSection from './layouts/homeSection.js'

const MicroStudies = ({ styleName }) => (
  <HomeSection>
    <div className="two-column-content">
      <div className="two-column-step">
        <div className="shape-container red-shape step-red" />
        <h4>Micro-case</h4>
        <h3>Blockchain brand workshop</h3>
        <div className="body">
          How might we communicate blockchain products in an approachable and
          trustworthy manner?
        </div>
      </div>
      <div className="two-column-step">
        <div className="shape-container blue-shape step-blue" />
        <h4>Micro-case</h4>
        <h3>Future of Advertising Ideation Workshop</h3>
        <div className="body">
          How might we leverage the expertise of 60 advertising experts in
          90 minutes to brainstorm the future of advertising?
        </div>
      </div>
      <div className="two-column-step">
        <div className="shape-container green-shape step-green" />
        <h4>Micro-case</h4>
        <h3>Peer Lending Product Strategy Workshop</h3>
        <div className="body">
          How might we understand the user, develop a roadmap, and deliver a
          cohesive brand in two weeks?
        </div>
      </div>
      <div className="two-column-step">
        <div className="shape-container gray-shape step-gray" />
        <h4>Micro-case</h4>
        <h3>Conversational UI Workshop</h3>
        <div className="body">
          How might we alleviate pains between the dispatcher and the technician
          through a conversation-based and automated interaction?
        </div>
      </div>
    </div>
  </HomeSection>
)

export default MicroStudies
