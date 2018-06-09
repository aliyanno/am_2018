import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link'

class ScrollToTop extends Component {
  render () {
    // this doesn't work because it only runs once. Running this continuously
    // seems just awful
    let className
    if (window.scrollTop > window.innerHeight) {
      className="visible"
    }

    return (
      <div className={`scroll-to-top-container + ${className}`}>
        <h5>
          <HashLink to="/#anchor-top">Top</HashLink>
        </h5>
      </div>
    )
  }
}

let style = {

}

export default ScrollToTop
