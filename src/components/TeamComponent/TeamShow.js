import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTeams } from "../../redux/actions/TeamActionCreators";
import TeamList from "./TeamList";
import Loader from './Loader'

function TeamShow({ state, fetchG }) {
    useEffect(
        () => {
            fetchG();
        }, []
    );

    return state.teams.loading ? (
        <Loader />

    ) : state.teams.error ? (
        <h2 className="m-3">{state.teams.error}</h2>

    ) : (
        <div className='container w-85 mx-auto m-3'>
            <h1 className='lead m-4'><b>Team Details</b></h1>
            {
                state.teams.data ?
                    (
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                <th scope="col">Team Id</th>
                                    <th scope="col">Team Name</th>
                                <th scope="col">Owner Id</th>
                                <th scope="col">Owner Name</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.teams.data.map(team => <TeamList team={team} key={team.teamId} />)
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

const mapStateToProps = stateEmp => (
    {
        state: stateEmp,
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchG: () => { dispatch(fetchTeams()) }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(TeamShow);
