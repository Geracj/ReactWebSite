import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import Error from './components/Error'
import Navigation from './components/Navigation'
import './styles/App.scss'

class App extends Component {
    render() {
      return(
        <div id="App">
          <BrowserRouter>
            <div>
              <Navigation />
              <Switch>
                <Route path="/" component={ Home } exact />
                <Route path="/about" component={ About } />
                <Route path="/projects" component={ Projects } />
                <Route path="/contacts" component={ Contacts } />
                <Route  component={ Error } />
              </Switch>
            </div>
          </BrowserRouter>
    		</div>
      )
    }
}

export default App
