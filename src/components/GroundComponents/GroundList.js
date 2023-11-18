import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/styles.css"


function GroundList({ ground }) {
    const { groundId, groundName, capacity, address } = ground;
    const { city, country, pincode, state } = address;
    return (
        <tr >
            <th scope="row">{groundId}</th>
            <td>{groundName}</td>
            <td>{capacity}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{pincode}</td>
            <td>{country}</td>
            <td><button className='btn btn-warning text-dark' value="update" ><Link to={`/grounds/update/${groundId}`}>update</Link></button></td>
            <td><button className='btn btn-danger white-text' value="update" ><Link to={`/grounds/delete/${groundId}`}>delete</Link></button></td>
        </tr>
    )
}

export default GroundList