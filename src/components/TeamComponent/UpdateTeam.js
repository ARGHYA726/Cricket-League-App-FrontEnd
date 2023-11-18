import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from "react-router";
import { updateTeam } from '../../redux/actions/TeamActionCreators';
import Loader from './Loader';

function UpdateTeam({ teamState, updateTeam }) {

    const [state, setState] = useState({
        teamId: 0,
        teamName:''
    })

    // id
    const { tid } = useParams();
    // navigation
    const navigate = useNavigate();

    // fetching team
    useEffect(
        () => {
            setState(
                teamState.data.find(team => team.teamId === Number(tid))
            )
        }, []
    )
    const changeHandler = (event) => {
        setState(
                { ...state, [event.target.name]: event.target.value }
         );
    }
    const submitHandler = (event) => {
        event.preventDefault();
        updateTeam(state)
        setTimeout(
            () => navigate("/", { replace: true })
            , 500)
    }
    return (
        teamState.loading ?
            <Loader /> :
            teamState.error ?
                <h2>{teamState.error}</h2> :
                <div className='container m-4 mx-auto'>
                    < h2 className='lead'><b>Update Team</b></h2 >
                    <form className="g-3 m-3" onSubmit={submitHandler}>

                        {/* team id */}
                        <div className="mb-3 ">
                            <label htmlFor="tid" className="form-label">Team Id</label>
                            <input name="teamId" required type="number" disabled readOnly className="form-control" id="tid" placeholder="Team Id"
                                value={state.teamId}
                            />
                        </div>

                        {/* team name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Team Name</label>
                            <input name="teamName" required type="text" minLength={2} className="form-control" id="name" placeholder="Team Name"
                                value={state.teamName}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-warning mb-3 px-3">Update Team</button>
                        </div>
                    </form>
                </div >
    )
}

const mapStateToProps = state => (
    {
        teamState: state.teams
    }
)

const mapDispatchToProps = dispatch => (
    { updateTeam: team => dispatch(updateTeam(team)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTeam)