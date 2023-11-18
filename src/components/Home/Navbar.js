import React, { Component } from 'react';
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
  
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    <li className="nav-item active  ">
        <a className="nav-link me-4 ms-3" href="#">Organiser</a>
      </li>
      <li className="nav-item active  ">
        <a className="nav-link me-4" href="#">Tournament</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link me-4" href="#">Match</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link me-4" href="#">Ground</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link me-4" href="#">Owner</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link me-4" href="#">Team</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link me-4" href="#">Player</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link me-4" href="#">Audience</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link me-4" href="#">Ticket</a>
      </li>
{/*       
      <li className="nav-item ">
        <a className="nav-link me-1" href="#">Log in</a>
      </li> */}
    </ul>
  </div>
</nav>

        );
    }
}
 
export default Navbar;