import React, { Component } from 'react'
import '../styles/Home.scss'


class Home extends Component {
    constructor() {
      super()
      this.state = {
        isOpen: false
      }
    }

    openText() {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    render() {
      var message
      if(this.state.isOpen) {
        message = <div id="lorem"> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorem, quidem ad voluptate laudantium ratione impedit? Modi labore, quia expedita! Eveniet incidunt totam qui ad non, ea voluptatibus temporibus vero. </p> </div>
      }
      return(
        <div id="home">
            <div id="text">
              <h1> Personal WebSite </h1>
            </div>
            <div id="load-more">
              { message }
              <button id="home-btn" onClick={this.openText.bind(this)}>
                Load more
              </button>
    		    </div>
    		</div>
      )
    }
}

export default Home
