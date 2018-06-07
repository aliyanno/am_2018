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
import './styles/no_match_view.css'
import HomeView from './views/homeView.js'
import SkyView from './views/skyView'
import NoMatchView from './views/noMatchView.js'
import AnimatedLink from './partials/component/animatedLink.js'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

const App = () => (
  <Router>
    <div>
      <div className="site-navigation">
        <AnimatedLink><Link to="/">Home</Link></AnimatedLink>
        <AnimatedLink><a href="/#anchor-work">work</a></AnimatedLink>
        <AnimatedLink><a href="/#thoughts">Gallery</a></AnimatedLink>
        <AnimatedLink><a href="/#anchor-contact">contact</a></AnimatedLink>
      </div>

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/sky" component={SkyView} />
        <Route component={NoMatchView} />
      </Switch>
    </div>
  </Router>
)

export default App;
