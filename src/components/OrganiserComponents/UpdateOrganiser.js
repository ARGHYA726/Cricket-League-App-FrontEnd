import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { updateOrganiser } from '../../redux/actions/OrganiserActionCreators';
import Loader from './Loader';


function UpdateOrganiser({ organiserState, updateOrganiser }) {

    const [state, setState] = useState({
        organiserId: 0,
        organiserName: '',
        email: '',
        phone: 0,
        payment: 0,
        budget: 0
    })

    const { orgid } = useParams();
    const navigate = useNavigate();
    useEffect(
        () => {
            setState(
                organiserState.data.find(organiser => organiser.organiserId === Number(orgid))
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



    const submitHandler = (event) => {
        event.preventDefault();
        updateOrganiser(state)
        setTimeout(
            () => navigate("/", { replace: true })
            , 500)
    }


    return (

        organiserState.loading ?
            <Loader /> :
            organiserState.error ?
                <h2>{organiserState.error}</h2> :
                <div className='container'>
                    < h2 className='lead'>Update Organiser</h2 >
                    <form className="g-3" onSubmit={submitHandler}>
                          <div className="mb-3">
                          <label htmlFor="orgid" className="form-label">OrganiserId</label>
                            <input name="organiserId" required type="number" disabled readOnly className="form-control" id="orgid" placeholder="Organiser id"
                                value={state.organiserId}/>
                            </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Organiser Name</label>
                            <input name="organiserName" required type="text" className="form-control" id="name" placeholder="Organiser name"
                                value={state.organiserName}
                                onChange={changeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input name="email" required type="email" className="form-control" id="email" placeholder="Email Address"
                                value={state.email}
                                onChange={changeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input name="phone" required type="number" className="form-control" id="phone" placeholder="Phone Number"
                                value={state.phone}
                                onChange={changeHandler}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="payment" className="form-label">Payment</label>
                            <input name="payment" required type="number" className="form-control" id="payment" placeholder="Payment"
                                value={state.payment}
                                onChange={changeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="budget" className="form-label">Budget</label>
                            <input name="budget" required type="number" className="form-control" id="budget" placeholder="Budget"
                                value={state.budget}
                                onChange={changeHandler}/>
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
        organiserState: state.organiser
    }
)

const mapDispatchToProps = dispatch => (
    { updateOrganiser: organiser => dispatch(updateOrganiser(organiser)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(UpdateOrganiser)