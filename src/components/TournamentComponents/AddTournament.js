import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTournament } from '../../redux/actions/TournamentActionCreators';
import { useNavigate } from 'react-router-dom'
import Loader from './Loader';


function AddTournament({ tournamentState, addTournament }) {


    const [state, setState] = useState({
        tournamentName: '',
        organiserId: 0,
        matchIds: '',
        cancel: false
    });

    const matchIdMapper = matchIds => {
        const pattern = /(\d+,\d+)/
        console.log("Pattern: ", pattern.test(matchIds))
        let x;
        if (pattern.test(matchIds)) {
            x = matchIds.split(",").map(id => Number(id))
            return Array.from(...x)
        } else {
            x = Number(matchIds)
            console.log(Array.from(x))
            console.log(x)
            return [x]
        }

    }

    const navigate = useNavigate();

    const changeHandler = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = (event) => {

        event.preventDefault();

        const stateTwo = {

            tournamentName: state.tournamentName,

            organiserId: Number(state.organiserId),

            matchIds: matchIdMapper(state.matchIds),

            cancel: new Boolean(state.cancel)

        }

        console.log("The state is: ", stateTwo)

        addTournament(stateTwo)

        setTimeout(

            () => navigate("/", { replace: true })

            , 500)

    }


    return (
        // check for loading 
        tournamentState.loading ?
            <Loader /> :
            tournamentState.error ?
                <h2>{tournamentState.error}</h2> :
                <div className='container'>
                    <h2>Add Tournament</h2>
                    <form className="g-3" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Tournament Name:</label>
                            <input name="tournamentName" required type="text" className="form-control" id="name" placeholder="tournament name"
                                value={state.tournamentName}
                                onChange={changeHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="organiserId" className="form-label">Organiser Id: </label>
                            <input name="organiserId" required type="number" className="form-control" id="organiserId" placeholder="OrganiserId"
                                value={state.organiserId}
                                onChange={changeHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="matchIds" className="form-label">Match Id: </label>
                            <input name="matchIds" required type="text" className="form-control" id="matchIds" placeholder="MatchId"
                                value={state.matchIds}
                                onChange={changeHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cancel" className="form-label">Cancel: </label>
                            <input name="cancel" required type="text" className="form-control" id="cancel" placeholder="cancel"
                                value={state.cancel}
                                onChange={changeHandler} />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Add</button>
                        </div>
                    </form>
                </div>
    );
}

const mapStateToProps = state => (
    {
        tournamentState: state.tournament
    }
)

const mapDispatchToProps = dispatch => (
    {
        addTournament: tournament => dispatch(addTournament(tournament))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(AddTournament)