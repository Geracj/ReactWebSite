import React, { Component } from 'react'
import '../styles/Contacts.scss'
import { FaBeer } from 'react-icons/fa'


class Contacts extends Component {
    constructor() {
      super()
      this.state = {
        inpValue: '',
        textareaValue: ''
      }
    }

    formSubmit(event) {
      console.log(this.state.inpValue, this.state.textareaValue)
      event.preventDefault()
    }

    inputChange(event) {
      this.setState({
        inpValue: event.target.value,
      })
    }

    textareaChange(event) {
      this.setState({
        textareaValue: event.target.value
      })
    }

    render() {
      return(
        <div id="contact">
            <h1> Contacts Us </h1>
            <div id='cont_wrap'>
              <div id="cont-left">
                <h3> Get in touch with us </h3>
                <p id='cont-text'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorem, quidem ad voluptate laudantium ratione impedit? Modi labore, quia expedita!  </p>
                <div id="cont-links">
                  <a href='#'> <i className="fab fa-facebook-square"></i> </a>
                  <a href='#'> <i className="fab fa-twitter"></i> </a>
                  <a href='#'> <i className="fab fa-google-plus-g"></i></a>
                </div>
                <p id="cont-tel"> +00-000-0000-00-0 </p>
                <p id="cont-email"> helloworld@gmail.com </p>
              </div>
              <div id="cont-right">
                <form
                  id="contact-form"
                  onSubmit={this.formSubmit.bind(this)}
                >
                  <input
                    id="cont-first"
                    placeholder="Enter your name"
                    value={this.state.value}
                    onChange={this.inputChange.bind(this)}
                  />
                  <textarea
                    placeholder="Enter your wishes"
                    onChange={this.textareaChange.bind(this)}
                  />
                  <input type='submit' id="cont-sub" value="Submit" />
                </form>
              </div>
            </div>
    		</div>
      )
    }
}

export default Contacts
