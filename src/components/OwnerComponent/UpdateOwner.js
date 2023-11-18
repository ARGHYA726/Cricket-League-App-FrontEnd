import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from "react-router";
import { updateOwner } from '../../redux/actions/OwnerActionCreators';
import Loader from './Loader';


function UpdateOwner({ ownerState, updateOwner }) {

    const [state, setState] = useState({
        ownerId: 0,
        ownerName: '',
        budget: 0,
        team: {
            teamId: '',
            teamName: '',
        }
    })


    // id
    const { oid } = useParams();
    // navigation
    const navigate = useNavigate();

    // fetching owner
    useEffect(
        () => {

            setState(
                ownerState.data.find(owner => owner.ownerId === Number(oid))
            )
        }, []
    )


    const changeHandler = (event) => {
        setState(
            (event.target.name === "ownerName" || event.target.name === "budget") ?
                { ...state, [event.target.name]: event.target.value }
                :
                { ...state, team: { ...state.team, [event.target.name]: event.target.value } }
        );
    }



    const submitHandler = (event) => {
        event.preventDefault();
        updateOwner(state)
        setTimeout(
            () => navigate("/", { replace: true })
            , 500)
    }


    return (

        ownerState.loading ?
            <Loader /> :
            ownerState.error ?
                <h2>{ownerState.error}</h2> :
                <div className='container m-4'>
                    < h2 className='lead'><b>Update Owner</b></h2 >
                    <form className="g-3 m-3" onSubmit={submitHandler}>

                        {/* owner id */}
                        <div className="mb-3">
                            <label htmlFor="oid" className="form-label">Owner Id</label>
                            <input name="ownerId" required type="number" disabled readOnly className="form-control" id="oid" placeholder="owner Id"
                                value={state.ownerId}
                            />
                        </div>


                        {/* owner name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Owner Name</label>
                            <input name="ownerName" required type="text" className="form-control" id="name" placeholder="owner name"
                                value={state.ownerName}
                                onChange={changeHandler}
                            />
                        </div>


                        {/* owner budget */}
                        <div className="mb-3">
                            <label htmlFor="budget" className="form-label">Owner Budget</label>
                            <input name="budget" required type="number" className="form-control" id="budget" placeholder="owner budget"
                                value={state.budget}
                                onChange={changeHandler}
                            />
                        </div>


                        <div className="col">
                            <button type="submit" className="btn btn-warning mb-3 px-3">Update Owner</button>
                        </div>
                    </form>
                </div >
    )
}


const mapStateToProps = state => (
    {
        ownerState: state.owners
    }
)

const mapDispatchToProps = dispatch => (
    { updateOwner: owner => dispatch(updateOwner(owner)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(UpdateOwner)