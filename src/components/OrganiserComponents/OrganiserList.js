import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/styles.css"


function OrganiserList({ organiser }) {
    const { organiserId, organiserName, email, phone, payment, budget } = organiser;
    return (
        <tr >
            <th scope="row">{organiserId}</th>
            <td>{organiserName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{payment}</td>
            <td>{budget}</td>
            <td><button className='btn btn-info text-dark' value="update" ><Link to={`/organisers/update/${organiserId}`}>update</Link></button></td>
            <td><button className='btn btn-dark text-primary' value="viewTournaments" ><Link to={`/organisers/tournaments/${organiserId}`}>Tournaments</Link></button></td>
            <td><button className='btn btn-warning text-dark' value="viewTournaments" ><Link to={`/organisers/prizemoney/${organiserId}`}>Pay Prize</Link></button></td>
        </tr>
    )
}

export default OrganiserList