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
                <NavLink className="nav-link" to="/audience" style={navLinkStyle}>Audience</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">

                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/audience" style={navLinkStyle}>View Audience</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/audience/add" style={navLinkStyle}>Add audience</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar