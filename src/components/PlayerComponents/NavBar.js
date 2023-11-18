import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../App.css'

export const NavBar = () => {

  const navLinkStyles = ({ isActive }) => (
    {
        fontWeight: isActive? 'bold' : 'normal',
        textDecoration: isActive? 'none' : 'normal',
    }
)

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/players/show-players" style={navLinkStyles}>Show Players</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/players/addplayer" style={navLinkStyles}>Add Player</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/players/getplayerbyid" style={navLinkStyles}>View By ID</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
  )
}
