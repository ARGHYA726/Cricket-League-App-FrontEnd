import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getPlayerById, fetchPlayers } from "../../redux/actions/playerActions";

function GetPlayerById({ playersData, fetchPlayers, getPlayerById }) {

    useEffect(() => {
        fetchPlayers();
    }, []);

    const [state, setState] = useState({
        playerId: 0,
    });

    const changeHandler = (event) => {
        setState({
            ...state,
            playerId: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(state);
        getPlayerById(state.playerId)
    }


    return (
        playersData.loading ?
            <div>Loading...</div> :
            playersData.error ?
                <h2>{playersData.error}</h2> :
                <div className='container'>
                    <form className="addForm" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Player's ID:</label>
                            <select name="playerId" required type="number" className="form-control"
                                onChange={changeHandler}>
                                <option value="" disabled selected>Enter player's ID</option>
                                {playersData.players.map((player, index) => (
                                    <option key={player.playerId} value={player.playerId}>{player.playerId}</option>
                                ))}
                            </select>

                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Show Data</button>
                        </div>
                    </form>
                    <center><h1 className='lead m-4'>Player Details : </h1></center>
                    {
                        <center>
                            < table className="table table-striped" >
                                <thead>
                                    <tr>
                                        <th scope="col">Player ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Salary</th>
                                        <th scope="col">Skill</th>
                                        <th scope="col">Team ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td>{playersData.player.playerId}</td>
                                        <td>{playersData.player.playerName}</td>
                                        <td>{playersData.player.salary}</td>
                                        <td>{playersData.player.skill}</td>
                                        <td>{playersData.player.teamId}</td>
                                    </tr>
                                </tbody>
                            </table >
                            <div>
                                <br/>
                                <Link to='/players' className="btn btn-success mb-3">Go Back</Link>
                            </div>
                        </center>
                    }
                </div>
    )
}

const mapStateToProps = state => (
    {
        playersData: state.players
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchPlayers: () => { dispatch(fetchPlayers()) },
        getPlayerById: playerId => { dispatch(getPlayerById(playerId)) },
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(GetPlayerById)