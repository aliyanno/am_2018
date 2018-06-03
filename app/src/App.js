import React from 'react'
import './App.css'
import './styles/layouts.css'
import './styles/navigation.css'
import './styles/home_case_study.css'
import './styles/hero.css'
import './styles/three_column_content.css'
import './styles/two_column_content.css'
import './styles/microstudies.css'
import './styles/home_gallery.css'
import './styles/footer.css'
import './styles/sky_case_study.css'
import './styles/components.css'
import HomeView from './views/homeView.js'
import SkyView from './views/skyView'
import AnimatedLink from './partials/component/animatedLink.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const App = () => (
  <Router>
    <div>
      <div className="site-navigation">
        <AnimatedLink><Link to="/">Home</Link></AnimatedLink>
        <AnimatedLink><a href="/#anchor-work">work</a></AnimatedLink>
        <AnimatedLink><Link to="/gallery">gallery</Link></AnimatedLink>
        <AnimatedLink><Link to="/thoughts">thoughts</Link></AnimatedLink>
        <AnimatedLink><a href="/#anchor-contact">contact</a></AnimatedLink>
      </div>

      <Route exact path="/" component={HomeView} />
      <Route path="/sky" component={SkyView} />
    </div>
  </Router>
)

export default App;
