import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { modifyTournament } from '../../redux/actions/TournamentActionCreators';
import Loader from './Loader';


function UpdateTournament({ tournamentState, updateTournaments }) {

    const [state, setState] = useState({
        tournamentId: 0,
        tournamentName: '',
        organiser: {
            "organiserId": 0,
            "organiserName": "",
            "email": "",
            "phone": 0,
            "payment": 0,
            "budget": 0
        },
        cancel: false
    })

    const { tid } = useParams();
    const navigate = useNavigate();
    useEffect(
        () => {
            console.log("Tournament state", tournamentState)
            setState(
                tournamentState.data.find(tournament => tournament.tournamentId === Number(tid))
            )
        }, []
    )


    const changeHandler = (event) => {
        setState(
            {
                ...state,
                [event.target.name]: event.target.value
            }
        );
    }

    // const matchIdMapper = matchIds => {
    //     const x = matchIds.split(",").map(id => Number(id))
    //     return new Array(...x)
    // }

    const submitHandler = (event) => {

        event.preventDefault();

        const stateTwo = {

            tournamentId: state.tournamentId,
            tournamentName: state.tournamentName,

            organiserId: Number(state.organiserId),

            // matchIds: matchIdMapper(state.matchIds),

            cancel: new Boolean(state.cancel)

        }

        console.log("The state is: ", stateTwo)

        updateTournaments(stateTwo)

        setTimeout(

            () => navigate("/", { replace: true })

            , 500)

    }



    return (

        tournamentState.loading ?
            <Loader /> :
            tournamentState.error ?
                <h2>{tournamentState.error}</h2> :
                <div className='container'>
                    < h2 className='lead'>Update Tournament</h2 >
                    <form className="g-3" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="tid" className="form-label">Tournament Id</label>
                            <input name="tournamentId" required type="number" disabled readOnly className="form-control" id="tid" placeholder="Tournament id"
                                value={state.tournamentId} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Tournament Name</label>
                            <input name="tournamentName" required type="text" className="form-control" id="name" placeholder="Tournament name"
                                value={state.tournamentName}
                                onChange={changeHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="organiser" className="form-label">Organiser Id</label>
                            <input name="organiserId" required type="number" className="form-control" id="organiser" placeholder="Organiser Id"
                                value={state.organiser.organiserId}
                                onChange={changeHandler} />
                        </div>
                        {/*  <div className="mb-3">
                            <label htmlFor="matchId" className="form-label">Match Ids:</label>
                            <input name="matchIds" required type="text" className="form-control" id="matchId" placeholder="Match Ids (Comma Separated Values)"
                                value={state.matchIds}
                                onChange={changeHandler} />
                        </div> */}

                        <div className="mb-3">
                            <label htmlFor="cancel" className="form-label">Cancel Tournament?</label>
                            <input name="cancel" required type="text" className="form-control" id="cancel" placeholder="Cancel?"
                                value={state.cancel}
                                onChange={changeHandler} />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-warning mb-3 px-3">Update</button>
                        </div>
                    </form>
                </div >
    )
}


const mapStateToProps = state => (
    {
        tournamentState: state.tournament
    }
)

const mapDispatchToProps = dispatch => (
    { updateTournaments: tournament => dispatch(modifyTournament(tournament)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTournament)