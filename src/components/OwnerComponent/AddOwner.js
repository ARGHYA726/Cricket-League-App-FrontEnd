import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addOwner } from '../../redux/actions/OwnerActionCreators';
import { useNavigate } from 'react-router-dom'
import Loader from './Loader';

function AddOwner({ ownerState, addOwner }) {

    const [state, setState] = useState({
        ownerName: '',
        budget: 0,
        team: {
            teamId: '',
            teamName: '',
        }
    });

    const navigate = useNavigate()


    const changeHandler = (event) => {

        setState(
            (event.target.name === "ownerName" || event.target.name === "budget") ?
                {
                    ...state,
                    [event.target.name]: event.target.value
                }
                :
                {
                    ...state,
                    team: { ...state.team, [event.target.name]: event.target.value }
                }
        )
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(state);

        addOwner(state)
        setTimeout(
            () => navigate("/", { replace: true })
            , 500)
    }


    return (
        // check for loading 
        ownerState.loading ?
            <Loader /> :
            ownerState.error ?
                <h2>{ownerState.error}</h2> :
                <div className='container m-4'>
                    < h2 className='lead'><b>Add Owner</b></h2 >
                    <form className="g-3 m-3" onSubmit={submitHandler}>

                        {/* owner name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Owner Name</label>
                            <input name="ownerName" required type="text" className="form-control" id="name" placeholder="Owner Name"
                                value={state.ownerName}
                                onChange={changeHandler}
                            />
                        </div>


                        {/* owner budget */}
                        <div className="mb-3">
                            <label htmlFor="budget" className="form-label">Owner budget</label>
                            <input name="budget" required type="number" min="100000000" className="form-control" id="budget" placeholder="Owner Budget"
                                value={state.budget}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Add Owner</button>
                        </div>
                    </form>
                </div>
    )
}

const mapStateToProps = state => (
    {
        ownerState: state.owners
    }
)

const mapDispatchToProps = dispatch => (
    {
        addOwner: owner => dispatch(addOwner(owner))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(AddOwner)