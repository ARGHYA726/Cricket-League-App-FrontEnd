import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">



      <NavLink className="nav-link" style={navLinkStyles} to='/tickets/addticket'>Add Ticket</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" style={navLinkStyles} to='/tickets/deleteTicket'>Delete Ticket</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" style={navLinkStyles} to='/tickets/getticketById'>Get Ticket By Id</NavLink>
          </li>
        </ul>
      </div>



    </nav>
  )
}
