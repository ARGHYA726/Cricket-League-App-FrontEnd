import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchTournamentById } from '../../redux/actions/TournamentActionCreators';
import Loader from './Loader';
import TournamentList from './TournamentList';


function TournamentIdShow({ tournamentState, fetchTournamentById }) {


    const [state, setState] = useState({
        tournamentId: 0,
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

        fetchTournamentById(state.tournamentId)
    }


    return (
        // check for loading 
        tournamentState.loading ?
            <Loader /> :
            tournamentState.error ?
                <h2>{tournamentState.error}</h2> :
                <div className='container'>
                    <h2>Show Tournament</h2>
                    <form className="g-3" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Tournament Id:</label>
                            <input name="tournamentId" required type="number" className="form-control" id="id" placeholder="tournament Id"
                                value={state.tournamentId}
                                onChange={changeHandler} />
                            </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Show</button>
                        </div>
                    </form>
                    <h1 className='lead m-4'>Tournament Details</h1>
            {
                tournamentState.data ?

                    (
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">organiserId</th>
                                    <th scope="col">MacthId</th>
                                    <th scope="col">Cancel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tournamentState.data.map(tournament => <TournamentList tournament={tournament} key={tournament.tournamentId} />)
                                }
                            </tbody>
                        </table >)
                    : (
                        <p className='lead'>Tournament not found</p>
                    )

            }
                </div>
    )
}

const mapStateToProps = state => (
    {
        tournamentState: state.tournament
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchTournamentById: tournamentId => dispatch(fetchTournamentById(tournamentId))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(TournamentIdShow)