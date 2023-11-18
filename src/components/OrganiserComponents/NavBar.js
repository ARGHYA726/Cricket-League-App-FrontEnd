import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const navLinkStyle = ({ isActive }) => (
        {
            color: isActive ? "red !important" : "black !important"
        }
    )

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="nav-link" to="/organisers" style={navLinkStyle}>Organisers</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">

                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/organisers" style={navLinkStyle}>View All</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/organisers/add" style={navLinkStyle}>Add New</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/organisers/byId" style={navLinkStyle}>View By ID</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar