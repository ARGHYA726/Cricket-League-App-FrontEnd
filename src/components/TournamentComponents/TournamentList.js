import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/styles.css"


function TournamentList({ tournament }) {
    const { tournamentId, tournamentName, organiser, matches, cancel } = tournament;
    const { organiserId } = organiser;
    return (
        <tr >
            <th scope="row">{tournamentId}</th>
            <td>{tournamentName}</td>
            <td>{organiserId}</td>
            <td>{JSON.stringify(matches.map(match => match.matchId))}</td>
            <td>{cancel ? "true" : "false"}</td>
            <td><button className='btn btn-warning text-dark' value="update" ><Link to={`/tournament/update/${tournamentId}`}>update</Link></button></td>
        </tr>
    )
}

export default TournamentList