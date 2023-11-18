import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/styles.css"

function TeamList({ team }) {
    const { teamId, teamName,owner } = team;
   const { ownerId,ownerName } = owner;
    return (
        <tr >
            <th scope="row">{teamId}</th>
            <td>{teamName}</td>
            <td>{ownerId}</td>
            <td>{ownerName}</td>
            <td><button className='btn btn-info text-dark' value="update" ><Link to={`/teams/update/${teamId}`}>Update</Link></button></td>
            <td><button className='btn btn-warning text-dark' value="viewPlayers" ><Link to={`/teams/players/${teamId}`}>Players</Link></button></td>
            <td><button className='btn btn-danger white-text' value="update" ><Link to={`/teams/delete/${teamId}`}>Delete</Link></button></td>
            
        </tr>
    )
}

export default TeamList