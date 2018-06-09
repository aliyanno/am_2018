import React from 'react'
import Section from './layouts/section.js'
import AnimatedInlineLink from './component/animatedInlineLink.js'

import Gallery1 from "../assets/gallery/gallery-tall1.png"
import Gallery2 from "../assets/gallery/gallery-wide1.png"
import Gallery3 from "../assets/gallery/gallery-wide2.jpg"
import Gallery4 from "../assets/gallery/gallery-wide3.png"

const HomeGallery = ({ styleName }) => (
  <div id="anchor-gallery">
    <Section>
      <div className="gallery-grid">
        <img alt="Formula E Event Dashboard" className="gallery-image gallery-image-long" src={Gallery1} />
        <img alt="Dribbble-esque Calculator UI" className="gallery-image gallery-image-top-wide" src={Gallery2} />
        <div className="gallery-image gallery-image-mid-wide">
          <img alt="Fancy UI for Smart Thermostat" src={Gallery4} />
        </div>
        <img alt="Brand Attitude for Gobbler" className="gallery-image gallery-image-low-wide" src={Gallery3} />
      </div>
      <div className="gallery-header right">
        <h1 className="header-soft">
          Gallery & Thoughts
        </h1>
      </div>
      <div className="article-content">
        <h5>Full Gallery coming soon</h5>
        <div className="">
          <div>
            <h3 className="article-title">How to get started as a UX and product designer</h3>
            <AnimatedInlineLink>
              <a href="https://we-are-next.com/episodes/aliyamarder">
                We Are Next Podcast, April 2018
              </a>
            </AnimatedInlineLink>
            <h3 className="article-title">How You Can Put Yourself on a New Career Path</h3>
            <AnimatedInlineLink>
              <a href="https://www.success.com/article/how-you-can-put-yourself-on-a-new-career-path">
                Success, March 2018
              </a>
            </AnimatedInlineLink>
            <h3 className="article-title">Coax Creativity Out of Your Team With These 4 Processes</h3>
            <AnimatedInlineLink>
              <a href="https://www.entrepreneur.com/article/310759">
                Entrepreneur, March 2018
              </a>
            </AnimatedInlineLink>
          </div>
        </div>
      </div>
    </Section>
  </div>
)

export default HomeGallery
