import React from 'react'
import Section from './layouts/section.js'
import AnimatedLink from './component/animatedLink.js'

const Footer = ({ styleName }) => (
  <Section styleName="footer">
    <a name="anchor-contact" />
    <div className="footer-body">
      <div className="footer-social">
        <h5 className="footer-link">Linked in</h5>
        <h5 className="footer-link">medium</h5>
        <h5 className="footer-link">instagram</h5>
        <h5 className="footer-link">resume</h5>
      </div>
      <div className="footer-message">
        <div className="body big footer-message-body">
          Thank you for taking the time to get to know me and my work.
        </div>
        <div className="body big">
          If you are interested in working together, learning more, or just
          having coffee, please don’t hesitate to email me at {` `}
          <a href="mailto:aliyamarder@gmail.com">{`aliyamarder{at}gmail.com`}</a>.
        </div>
      </div>
      <div className="footer-copyright">
        <h6>Aliya Marder, 2018</h6>
      </div>
      <div className="footer-navigation">
        <AnimatedLink styleName="footer-link"><a to="/">Home</a></AnimatedLink>
        <AnimatedLink styleName="footer-link"><a href="/#anchor-work">work</a></AnimatedLink>
        <AnimatedLink styleName="footer-link"><a to="/gallery">gallery</a></AnimatedLink>
        <AnimatedLink styleName="footer-link"><a to="/thoughts">thoughts</a></AnimatedLink>
        <AnimatedLink styleName="footer-link"><a href="/#anchor-contact">contact</a></AnimatedLink>
      </div>
    </div>
  </Section>
)

export default Footer
