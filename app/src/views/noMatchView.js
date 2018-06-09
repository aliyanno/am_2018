import React from 'react'
import AnimatedLink from '../partials/component/animatedLink.js'

const NoMatchView = () => (
  <div className="App-container no-match-view">
    <div className="hero">
      <div className="hero-header">
        <h1>Party in the 404!</h1>
      </div>
      <div className="study hero-body">
        <div className="hero-body-content">
          <div className="body">
            Oops! This page doesn't exist (yet) :)
            <AnimatedLink>
              <a href="/">Head back home</a>
            </AnimatedLink>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NoMatchView
