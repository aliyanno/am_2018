import React from 'react'
import Section from './layouts/section.js'
import AnimatedLink from './component/animatedLink.js'
import AnimatedInlineLink from './component/animatedInlineLink.js'
import line from '../assets/red-line.svg'
import { HashLink } from 'react-router-hash-link'

const Footer = ({ styleName }) => (
  <div id="anchor-contact">
    <Section styleName="footer">
      <div className="footer-body">
        <div className="footer-message">
          <h1 className="header-soft">
            Thank you!
          </h1>
          <div className="body big footer-message-body">
            Thank you for taking the time to get to know me and my work.
          </div>
          <div className="body big">
            {`If you are interested in working together, learning more, or just
            having coffee, please don’t hesitate to email me at aliyamarder{at}gmail.com.`}
          </div>
          <img alt="" className="footer-line" src={line} />
          <AnimatedLink styleName="footer-link">
            <a href="https://www.linkedin.com/in/aliyamarder/">
              Linked in
            </a>
          </AnimatedLink>
          <AnimatedLink styleName="footer-link">
            <a href="https://medium.com/@aliyamarder">
              medium
            </a>
          </AnimatedLink>
          <AnimatedLink styleName="footer-link">
            <a href="https://www.instagram.com/aliyanno/">
              instagram
            </a>
          </AnimatedLink>
          <AnimatedLink styleName="footer-link">
            <a href="./amarder_2018.pdf">
              resume
            </a>
          </AnimatedLink>
        </div>
        <div className="footer-copyright">
          <h6>{'Made by me in 2018.\u0020'}
            <AnimatedInlineLink>
              <a href="https://github.com/aliyanno/am_2018">Check out the code</a>
            </AnimatedInlineLink>
          </h6>
        </div>
        <div className="footer-navigation">
          <AnimatedLink styleName="footer-link">
            <HashLink smooth to="/">Home</HashLink>
          </AnimatedLink>
          <AnimatedLink styleName="footer-link">
            <HashLink smooth to="/#anchor-process">process</HashLink>
          </AnimatedLink>
          <AnimatedLink styleName="footer-link">
            <HashLink smooth to="/#anchor-work">work</HashLink>
          </AnimatedLink>
          <AnimatedLink styleName="footer-link">
            <HashLink smooth to="/#gallery">gallery</HashLink>
          </AnimatedLink>
          <AnimatedLink styleName="footer-link">
            <HashLink smooth to="/#anchor-contact">contact</HashLink>
          </AnimatedLink>
        </div>
      </div>
    </Section>
  </div>
)

export default Footer
