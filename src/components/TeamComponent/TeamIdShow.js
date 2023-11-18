import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchTeamById } from '../../redux/actions/TeamActionCreators';
import Loader from './Loader';
import TeamList from './TeamList';


function TeamIdShow({ teamState, fetchTeamById }) {


    const [state, setState] = useState({
        teamId: 0,
    });

    const changeHandler = (event) => {
        setState( {
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(state);

        fetchTeamById(state.teamId)
    }


    return (
        // check for loading 
        teamState.loading ?
            <Loader /> :
            teamState.error ?
                <h2 className='m-4'>Team not found with the given Id</h2> :
                <div className='container m-4 mx-auto'>
                    < h1 className='lead'><b>Show Team</b></h1 >
                    <form className="g-3 m-3" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Team Id:</label>
                            <input name="teamId" required type="number" min="1" className="form-control" id="id" placeholder="team Id"
                                value={state.teamId}
                                onChange={changeHandler} />
                            </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Show</button>
                        </div>
                    </form>
                    <h1 className='lead m-4'>Team Details</h1>
            {
                teamState.data ?

                    (
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col">Team Id</th>
                                    <th scope="col">Team Name</th>
                                    <th scope="col">Owner Id</th>
                                    <th scope="col">Owner Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    teamState.data.map(team => <TeamList team={team} key={team.teamId} />)
                                }
                            </tbody>
                        </table >)
                    : (
                        <p className='lead'>Teams not found</p>
                    )

            }
                </div>
    )
}

const mapStateToProps = state => (
    {
        teamState: state.teams
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchTeamById: teamId => dispatch(fetchTeamById(teamId))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(TeamIdShow)