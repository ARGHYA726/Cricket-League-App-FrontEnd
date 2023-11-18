import React from 'react'
import { Link } from 'react-router-dom'
// import "../styles/styles.css"


function MatchList({ match }) {
    // console.log("Inside MatchList", match)
    const { match_id, status, team_one_name, team_two_name, schedule, ground_name, ground_address, tournament_name } = match;
    const { pincode } = ground_address;
    const { matchDate, startTime, endTime } = schedule

    const trCancelledStyles = {
        color: "#e60000",
        textDecoration: "line-through"
    }


    return (
        <tr >
            <th scope="row" style={match.status ? trCancelledStyles : {}}>{match_id}</th>
            <td>{status ? "Canceled" : "not Canceled"}</td>
            <td>{team_one_name}</td>
            <td>{team_two_name}</td>
            <td>{matchDate}</td>
            <td>{startTime + "-" + endTime}</td>
            <td>{tournament_name}</td>
            <td>{`${ground_name}-${pincode}`}</td>
            {/* <td><button className='btn btn-warning text-dark' value="update" ><Link to={`/grounds/update/${groundId}`}>update</Link></button></td>*/}

            {
                match.status ?

                    <td><button className='btn btn-danger white-text' value="update" disabled>cancel{/* <Link to={`/matches/${match.match_id}/cancel`}>cancel</Link> */}</button></td>
                    :
                    <td><button className='btn btn-danger white-text' value="update"  ><Link to={`/matches/${match.match_id}/cancel`}>cancel</Link></button></td>
            }
        </tr>
    )
}

export default MatchList