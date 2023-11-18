import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPlayers, deletePlayer } from "../../redux/actions/playerActions";

function ShowPlayer({ playersData, fetchPlayers, deletePlayer }) {

    useEffect(() => {
        fetchPlayers();
    }, []);

    return playersData.loading ? (
        <h2>Loading</h2>
    ) : playersData.error ? (
        <h2>{playersData.error}</h2>
    ) : (
        <div>
            <div>
                <table className="myTable">
                    <thead>
                        <tr>
                            <th>Player ID</th>
                            <th>Player Name</th>
                            <th>Player Salary</th>
                            <th>Skill</th>
                            <th>Team ID</th>
                            <th colSpan="2">Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playersData.players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.playerId}</td>
                                <td>{player.playerName}</td>
                                <td>{player.salary}</td>
                                <td>{player.skill}</td>
                                <td>{player.teamId}</td>
                                <td>
                                    <Link className="btn btn-warning"
                                        to={`/players/update-player/${player.playerId}`}
                                    >Update Details
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deletePlayer(player.playerId)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        playersData: state.players,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlayers: () => { dispatch(fetchPlayers()) },
        deletePlayer: (pid) => { dispatch(deletePlayer(pid)) },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowPlayer);