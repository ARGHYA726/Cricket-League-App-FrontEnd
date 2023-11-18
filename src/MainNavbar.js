import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class MainNavbar extends Component {
    state = {  } 
    render() { 
        return (
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
  
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">

    <li className="nav-item active  ">
        <NavLink className="nav-link me-4 ms-3" to="/">Home</NavLink>
      </li>

    <li className="nav-item active  ">
    <NavLink className="nav-link me-4 ms-3" to="/organisers">Organiser</NavLink>
      </li>

      <li className="nav-item active  ">
      <NavLink className="nav-link me-4 ms-3" to="/tournament">Tournament</NavLink>
      </li>

      <li className="nav-item ">
      <NavLink className="nav-link me-4 ms-3" to="/matches">Matches</NavLink>
      </li>

      <li className="nav-item ">
      <NavLink className="nav-link me-4 ms-3" to="/grounds">Ground</NavLink>
      </li>

      <li className="nav-item ">
      <NavLink className="nav-link me-4 ms-3" to="/owner">Owner</NavLink>
      </li>

      <li className="nav-item ">
      <NavLink className="nav-link me-4 ms-3" to="/teams">Teams</NavLink>
      </li>

      <li className="nav-item ">
      <NavLink className="nav-link me-4 ms-3" to="/players">Players</NavLink>
      </li>

      <li className="nav-item ">
      <NavLink className="nav-link me-4 ms-3" to="/audience">Audience</NavLink>
      </li>

      <li className="nav-item ">
      <NavLink className="nav-link me-4 ms-3" to="/tickets">Ticket</NavLink>
      </li>

    </ul>
  </div>
</nav>

        );
    }
}
 
export default MainNavbar;