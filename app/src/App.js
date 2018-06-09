import React, { Component } from 'react'
import AOS from 'aos'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import { ParallaxProvider } from 'react-scroll-parallax'

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
import './styles/no_match_view.css'
import './styles/home_process.css'
import 'aos/dist/aos.css'

import HomeView from './views/homeView.js'
import SkyView from './views/skyView'
import NoMatchView from './views/noMatchView.js'
import AnimatedLink from './partials/component/animatedLink.js'

class App extends Component {
  componentDidMount() {
    AOS.init({
      disable: 'mobile',
      duration: 1000,
    })
  }

  render () {
    return (
      <Router>
        <ParallaxProvider>
          <div id="anchor-top">
            <div className="site-navigation">
              <AnimatedLink><Link to="/">Home</Link></AnimatedLink>
              <AnimatedLink><HashLink smooth to="/#anchor-process">process</HashLink></AnimatedLink>
              <AnimatedLink><HashLink smooth to="/#anchor-work">work</HashLink></AnimatedLink>
              <AnimatedLink><HashLink smooth to="/#anchor-gallery">Gallery</HashLink></AnimatedLink>
              <AnimatedLink><HashLink smooth to="/#anchor-contact">contact</HashLink></AnimatedLink>
            </div>

            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/sky" component={SkyView} />
              <Route component={NoMatchView} />
            </Switch>
          </div>
        </ParallaxProvider>
      </Router>
    )
  }
}

export default App;
