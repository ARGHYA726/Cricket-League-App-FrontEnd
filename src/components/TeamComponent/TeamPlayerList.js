import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/styles.css"

function TeamPlayerList({ player }) {
    const { playerId, playerName, salary, skill } = player;
    return (
        <tr >
            <th scope="row">{playerId}</th>
            <td>{playerName}</td>
            <td>{salary}</td>
            <td>{skill}</td>
        </tr>
    )
}

export default TeamPlayerList