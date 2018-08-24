import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Proj-Navigation.scss'


class ProjNavigation extends Component {
    render() {
      return(
        <div id="Proj-Navigation">
        <div id="proj-links">
          <NavLink className="proj-link" to="/kyiv"> Kyiv </NavLink>
          <NavLink className="proj-link" to="/barcelona"> Barcelona </NavLink>
          <NavLink className="proj-link" to="/ny"> New York </NavLink>
          <NavLink className="proj-link" to="/tokyo"> Tokyo </NavLink>
          <NavLink className="proj-link" to="/london"> London </NavLink>
        </div>
    		</div>
      )
    }
}

export default ProjNavigation
