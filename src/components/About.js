import React, { Component } from 'react'
import '../styles/About.scss'


class About extends Component {
    constructor() {
      super()
      this.state ={
        tasks: [ "First Task", "Second Task", "Third Task" ],
        value: ''
      }
    }

    addItem = event => {
      if(this.state.value === "") {
        alert('The field connot be empty.')
        return false
      }
        this.state.tasks.push(this.state.value)
        this.setState({
          tasks: this.state.tasks,
          value: ''
        })
    }

    handleChange = event => {
      this.setState({
        value: event.target.value
      })
    }

    deleteItem = index => {
      this.state.tasks.splice(index, 1)
      this.setState({
        tasks: this.state.tasks
      })
    }

    render() {
      const task = this.state.tasks.map((item, index) => {
        return (<div
                  key={index}
                  id="about-task"
                >
                  <p>
                    {item}
                  </p>
                  <button
                    onClick={this.deleteItem.bind(this, index)}
                    key={index}
                  >
                    Delete
                  </button>
                </div>)
      })
      return(
        <div id="about">
            <h1> About </h1>
            <div id="about-container">
              <h2> ToDo List </h2>
              <div id="about-form">
                <input
                  id="about-inp"
                  placeholder="Enter a new task"
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                />
                <button
                  id="about-btn"
                  onClick={this.addItem.bind(this)}
                >
                  Add
                </button>
                <div id="about-tasks">
                  {task}
                </div>
              </div>
            </div>
    		</div>
      )
    }
}

export default About
