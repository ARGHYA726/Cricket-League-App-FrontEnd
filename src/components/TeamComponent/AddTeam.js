import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTeam } from '../../redux/actions/TeamActionCreators';
import { useNavigate } from 'react-router-dom'
import Loader from './Loader';

function AddTeam({ teamState, addTeam }) {
    const [state, setState] = useState({
        ownerId:0,
        teamName: '',
    });

    const navigate = useNavigate()
    const changeHandler = (event) => {

        setState(
    
                {
                    ...state,
                    [event.target.name]: event.target.value
                }
        )
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(state);

        addTeam(state)
        setTimeout(
            () => navigate("/", { replace: true })
            , 500)
    }
    return (
        // check for loading 
        teamState.loading ?
            <Loader /> :
            teamState.error ?
                <h2>{teamState.error}</h2> :
                <div className='container m-4 mx-auto'>
                   < h2 className='lead'><b>Add Team</b></h2 >
                    <form className="g-3 m-3 " onSubmit={submitHandler}>
                    <div className="mb-3 ">
                            <label htmlFor="ownerId" className="form-label">Owner Id</label>
                            <input name="ownerId" required type="number" min="1" className="form-control" id="ownerId" placeholder="OwnerId"
                                value={state.ownerId}
                                onChange={changeHandler}
                            />
                        </div>
                        {/* team name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Team Name</label>
                            <input name="teamName" required type="text" minLength={2} className="form-control" id="name" placeholder="TeamName"
                                value={state.teamName}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Add Team</button>
                        </div>
                    </form>
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
        addTeam: team => dispatch(addTeam(team))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(AddTeam)
