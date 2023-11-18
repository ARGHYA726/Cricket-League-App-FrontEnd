import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/styles.css";


function OrganiserTournamentList({ tournament }) {
    const { tournamentId, tournamentName, cancel } = tournament;
    return (
        <tr >
            <th scope="row">{tournamentId}</th>
            <td>{tournamentName}</td>
            <td>{cancel ? "true" : "false"}</td>
            <td><button className='btn btn-warning text-dark' value="update" ><Link to={`/tournament/update/${tournamentId}`}>update</Link></button></td>
        </tr>
    )
}

export default OrganiserTournamentList