import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/Projects.scss'


import Kyiv from './Proj-components/Kyiv.js'
import NewYork from './Proj-components/NY.js'
import Barcelona from './Proj-components/Barcelona.js'
import Tokyo from './Proj-components/Tokyo.js'
import London from './Proj-components/London.js'
import ProjNavigation from './Proj-components/Proj-Navigation.js'

class Projects extends Component {
    render() {
      return(
        <div id="projects">
            <h1> Projects </h1>

            <div id="proj-container">
                <BrowserRouter>
                  <div>
                    <ProjNavigation />
                    <Switch>
                      <Route path="/kyiv" component={ Kyiv } />
                      <Route path="/ny" component={ NewYork }  />
                      <Route path="/barcelona" component={ Barcelona } />
                      <Route path="/tokyo" component={ Tokyo } />
                      <Route path="/london" component={ London } />
                    </Switch>
                  </div>
                </BrowserRouter>
            </div>

    		</div>
      )
    }
}

export default Projects
