import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addOrganiser } from '../../redux/actions/OrganiserActionCreators';
import { useNavigate } from 'react-router-dom'
import Loader from './Loader';


function AddOrganiser({ organiserState, addOrganiser }) {


    const [state, setState] = useState({
        organiserId: 0,
        organiserName: '',
        email: '',
        phone: 0,
        payment: 0,
        budget: 40000
    });
    const [organiserNameErr, setOrganiserNameErr] = useState("");
    const [organiserEmailErr, setOrganiserEmailErr] = useState("");
    const [organiserPhoneErr, setOrganiserPhoneErr] = useState("");
    const [organiserPaymentErr, setOrganiserPaymentErr] = useState("");

    const navigate = useNavigate()

    const changeHandler = (event) => {
        setState( {
            ...state,
            [event.target.name]: event.target.value
        })
    }
    const formValidation = () => {
        let isValid = true;
    
        const organiserNameErr = {};
        const organiserEmailErr = {};
        const organiserPhoneErr = {};
        const organiserPaymentErr = {};
    
        if (state.organiserName.length <= 0) {
          organiserNameErr.organiserNameRequired = "Organiser Name is required";
          isValid = false;
        }
    
        if (state.email == "") {
          organiserEmailErr.organiserEmailRequired = "Organiser Salary is required";
          isValid = false;
        }
    
        if (state.phone.length < 10 || state.phone === 0) {
          organiserPhoneErr.organiserPhoneRequired = "Not a valid phone number";
          isValid = false;
        }
    
        if (state.payment <=0) {
          organiserPaymentErr.organiserPaymentRequired = "Payment not valid";
          isValid = false;
        }
    
        setOrganiserNameErr(organiserNameErr);
        setOrganiserEmailErr(organiserEmailErr);
        setOrganiserPhoneErr(organiserPhoneErr);
        setOrganiserPaymentErr(organiserPaymentErr);
        return isValid;
      }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(state);
        let isValid = formValidation()
         if (!isValid) {
            return false;
         }else {
            addOrganiser(state)
            setTimeout(
                () => navigate("/", { replace: true })
                , 500)
         }
    }


    return (
        // check for loading 
        organiserState.loading ?
            <Loader /> :
            organiserState.error ?
                <h2>{organiserState.error}</h2> :
                <div className='container'>
                    <h2>Add Organiser</h2>
                    <form className="g-3" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Organiser Name:</label>
                            <input name="organiserName" type="text" className="form-control" id="name" placeholder="organiser name"
                                value={state.organiserName}
                                onChange={changeHandler}
                            />
                            {Object.keys(organiserNameErr).map((key) => {
                                return <div style={{ color: "red" }}>{organiserNameErr[key]}</div>
                            })}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address: </label>
                            <input name="email" type="email" className="form-control" id="email" placeholder="email address"
                                value={state.email}
                                onChange={changeHandler}
                            />
                            {Object.keys(organiserEmailErr).map((key) => {
                                return <div style={{ color: "red" }}>{organiserEmailErr[key]}</div>
                            })}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number: </label>
                            <input name="phone" type="number" className="form-control" id="phone" placeholder="phone number"
                                value={state.phone}
                                onChange={changeHandler}
                            />
                            {Object.keys(organiserPhoneErr).map((key) => {
                                return <div style={{ color: "red" }}>{organiserPhoneErr[key]}</div>
                            })}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="payment" className="form-label">Payment: </label>
                            <input name="payment" type="number" className="form-control" id="payment" placeholder="Payment"
                                value={state.payment}
                                onChange={changeHandler}
                            />
                            {Object.keys(organiserPaymentErr).map((key) => {
                                return <div style={{ color: "red" }}>{organiserPaymentErr[key]}</div>
                            })}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="budget" className="form-label">Budget:{state.budget} </label>
                            <input name="budget" type="range" min="10000" max="1000000" step="10000" className="form-control" id="budget" placeholder="Budget"
                                value={state.budget}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Add</button>
                        </div>
                    </form>
                </div>
    )
}

const mapStateToProps = state => (
    {
        organiserState: state.organiser
    }
)

const mapDispatchToProps = dispatch => (
    {
        addOrganiser: organiser => dispatch(addOrganiser(organiser))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(AddOrganiser)