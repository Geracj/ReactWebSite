import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.scss'

class Navigation extends Component {
    render() {
      return(
        <div id="header">
            <h1> WebSite </h1>
            <div id="links">
              <NavLink to="/"> Home </NavLink>
              <NavLink to="/about"> About </NavLink>
              <NavLink to="/projects"> Projects </NavLink>
              <NavLink to="/contacts"> Contacts </NavLink>
              <span id="hd-btn"> X </span>
            </div>
    		</div>
      )
    }
}

export default Navigation
