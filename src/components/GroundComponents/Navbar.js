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

                <NavLink className="nav-link" to="/grounds" style={navLinkStyle}>Grounds</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/grounds" style={navLinkStyle}>View Grounds</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/grounds/add" style={navLinkStyle}>Add Ground</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar