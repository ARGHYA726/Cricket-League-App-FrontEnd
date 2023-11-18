import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const navLinkStyle = ({ isActive }) => (
        {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    )

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <NavLink className="nav-link" to="/matches" style={navLinkStyle}>Matches</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/matches" style={navLinkStyle}>View Matches</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/matches/add" style={navLinkStyle}>Add Match</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar