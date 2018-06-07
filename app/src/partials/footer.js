import React from 'react'
import Section from './layouts/section.js'
import AnimatedLink from './component/animatedLink.js'
import line from '../assets/red-line.svg'

const Footer = ({ styleName }) => (
  <Section styleName="footer">
    <a name="anchor-contact" />
    <div className="footer-body">
      <div className="footer-message">
        <div className="body big footer-message-body">
          Thank you for taking the time to get to know me and my work.
        </div>
        <div className="body big">
          {`If you are interested in working together, learning more, or just
          having coffee, please don’t hesitate to email me at aliyamarder{at}gmail.com.`}
        </div>
        <img className="footer-line" src={line} />
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
        <h6>Aliya Marder, 2018</h6>
      </div>
      <div className="footer-navigation">
        <AnimatedLink styleName="footer-link"><a href="/">Home</a></AnimatedLink>
        <AnimatedLink styleName="footer-link"><a href="/#anchor-work">work</a></AnimatedLink>
        <AnimatedLink styleName="footer-link"><a href="/gallery">gallery</a></AnimatedLink>
        <AnimatedLink styleName="footer-link"><a href="/thoughts">thoughts</a></AnimatedLink>
        <AnimatedLink styleName="footer-link"><a href="/#anchor-contact">contact</a></AnimatedLink>
      </div>
    </div>
  </Section>
)

export default Footer
