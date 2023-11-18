import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/styles.css"


function AudienceList({ audience }) {
    const { audienceId, audienceName, amount, matchId, ticket } = audience;
    const { seatNo, ticketId, ticketName, totalAmount } = ticket;
    return (
        <tr >
            <th scope="row">{audienceId}</th>
            <td>{audienceName}</td>
            <td>{amount}</td>
            <td>{matchId}</td>
            <td>{seatNo}</td>
            <td>{ticketId}</td>
            <td>{ticketName}</td>
            <td>{totalAmount}</td>
            {/* <td><button className='btn btn-warning text-dark' value="update" ><Link to={`/grounds/update/${groundId}`}>update</Link></button></td>
            <td><button className='btn btn-danger white-text' value="update" ><Link to={`/grounds/delete/${groundId}`}>delete</Link></button></td> */}
        </tr>
    )
}

export default AudienceList