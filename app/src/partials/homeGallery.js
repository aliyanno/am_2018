import React from 'react'
import screens from '../assets/gobbler-screens.png'
import line from '../assets/red-line.svg'
import HomeSection from './layouts/homeSection.js'

const HomeGallery = ({ styleName }) => (
  <HomeSection>
    <div className="gallery-grid">
      <img className="gallery-image" src="http://placehold.it/200x200" />
      <img className="gallery-image" src="http://placehold.it/200x200" />
      <img className="gallery-image" src="http://placehold.it/200x200" />
      <img className="gallery-image" src="http://placehold.it/200x200" />
      <img className="gallery-image" src="http://placehold.it/200x200" />
    </div>
    <div className="gallery-header right">
      <h1>
        Gallery & Thoughts
      </h1>
    </div>
    <div className="article-content">
      <div className="">
        <h5 className="button">See gallery of work</h5>
        <div>
          <h3 className="article-title">Article</h3>
          <h4>Article description</h4>
          <h3 className="article-title">Article</h3>
          <h4>Article description</h4>
          <h3 className="article-title">Article</h3>
          <h4>Article description</h4>
          <h5 className="button">See all articles</h5>
        </div>
      </div>
    </div>
  </HomeSection>
)

export default HomeGallery
