import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/styles.css"


function OwnerList({ owner }) {
    const { ownerId, ownerName, budget} = owner;
    return (
        <tr >
            <th scope="row">{ownerId}</th>
            <td>{ownerName}</td>
            <td>{budget}</td>
            <td><button className='btn btn-warning text-dark' value="update" ><Link to={`/owner/updateOwner/${ownerId}`}>Update</Link></button></td>
            <td><button className='btn btn-danger white-text' value="update" ><Link to={`/owner/deleteById/${ownerId}`}>Delete</Link></button></td>
            <td><button className='btn btn-warning text-dark' value="viewPlayers" ><Link to={`/owner/paysalary/${ownerId}`}>Pay Salary</Link></button></td>
        </tr>
    )
}

export default OwnerList