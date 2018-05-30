import React from 'react'
import HomeSection from './layouts/homeSection.js'

const Footer = ({ styleName }) => (
  <HomeSection styleName="footer">
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
        <h5 className="footer-link">Home</h5>
        <h5 className="footer-link">Process</h5>
        <h5 className="footer-link">work</h5>
        <h5 className="footer-link">gallery</h5>
        <h5 className="footer-link">thoughts</h5>
        <h5 className="footer-link">Contact</h5>
      </div>
    </div>
  </HomeSection>
)

export default Footer
