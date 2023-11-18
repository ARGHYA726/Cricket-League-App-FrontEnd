import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTeamPlayers } from "../../redux/actions/TeamActionCreators";
import Loader from './Loader'
import TeamPlayerList from "./TeamPlayerList";


function TeamPlayerShow({ state, fetchTeamPlayer }) {

    const { tid } = useParams();
    useEffect(
        () => {
          fetchTeamPlayer(Number(tid))
        }, []
    )
    return state.teams.loading ? (
        <Loader />

    ) : state.teams.error ? (
        <h2>{state.teams.error}</h2>

    ) : (
        <div className='container'>
            <h1 className='lead m-4'>Team Player Details</h1>
            {
                state.teams.data ?

                    (
                       
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col">Player Id</th>
                                    <th scope="col">Player Name</th>
                                    <th scope="col">Player Salary</th>
                                    <th scope="col">Player Skill</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.teams.data.map(player => <TeamPlayerList player={player} key={player.playerId} />)
                                }
                            </tbody>
                        </table >)
                        
                    : (
                        <p className='lead'>Teams not found</p>
                    )

            }
        </div >
    )
}

const mapStateToProps = stateTeamPlayer => (
    {
        state: stateTeamPlayer
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchTeamPlayer: teamId => { dispatch(fetchTeamPlayers(teamId)) }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(TeamPlayerShow);