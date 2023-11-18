import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addGround } from '../../redux/actions/GroundActionCreators';
import { useNavigate } from 'react-router-dom'
import Loader from './Loader';
import { GroundValidationUtils } from './GroundValidationUtils';


function AddGround({ groundState, addGround }) {


    // console.log("state", groundState)
    const [state, setState] = useState({
        groundName: '',
        capacity: 40,
        address: {
            city: '',
            country: '',
            pincode: '',
            state: ""
        }
    });


    /* ERROR STATES */
    const [groundNameError, setGroundNameError] = useState("");
    const [cityError, setcityError] = useState("");
    const [countryError, setCountryError] = useState("");
    const [pincodeError, setPincodeError] = useState("");
    const [stateError, setStateError] = useState("");

    const navigate = useNavigate()

    const groundValidator = new GroundValidationUtils();



    /* Handlers */


    const changeHandler = (event) => {
        // console.log(groundState)

        setState(
            (event.target.name === "groundName" || event.target.name === "capacity") ?
                {
                    ...state,
                    [event.target.name]: event.target.value
                }
                :
                {
                    ...state,
                    address: { ...state.address, [event.target.name]: event.target.value }
                }
        )
    }


    const submitHandler = (event) => {
        event.preventDefault();
        console.log(state);

        if (groundValidator.globalStatus)
            addGround(state)


        setTimeout(
            () => navigate("/", { replace: true })
            , 500)
    }


    return (
        // check for loading 
        groundState.loading ?
            <Loader /> :
            groundState.error ?
                <h2>{groundState.error}</h2> :
                <div className='container'>
                    <h2>Add Ground</h2>
                    <form className="g-3" onSubmit={submitHandler}>

                        {/* ground name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Ground Name</label>
                            <input name="groundName" required pattern='[A-Z][a-z0-9]+' title="The name should start with a captital letter followed by small letters and digits" type="text" className="form-control" id="name" placeholder="ground name"
                                value={state.groundName}
                                onChange={changeHandler}
                                onBlur={() => setGroundNameError(groundValidator.groundNameChecker(state.groundName))}
                            />

                            {/* error paragraph */}
                            {
                                groundNameError.length ?
                                    <h6 className='text-danger display-6'>{`*${groundNameError}`}</h6> :
                                    <p></p>
                            }
                        </div>


                        {/* ground capacity */}
                        <div className="mb-3">
                            <label htmlFor="capacity" className="form-label">Ground capacity: {state.capacity}</label>
                            <input name="capacity" required type="range" min='10' max='500' className="form-control" id="capacity" placeholder="ground capacity"
                                value={state.capacity}
                                onChange={changeHandler}
                            />
                        </div>


                        <fieldset>
                            <legend>Address</legend>
                            {/* city */}
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">City</label>
                                <input name="city" required type="text" className="form-control" id="city" placeholder="city"
                                    value={state.address.city}
                                    onChange={changeHandler}
                                    onBlur={() => setcityError(groundValidator.nameChecker(state.address.city))}
                                />
                            </div>

                            {/* error paragraph */}
                            {
                                cityError.length ?
                                    <h6 className='text-danger display-6'>{`*${cityError}`}</h6> :
                                    <p></p>
                            }


                            {/* pincode */}
                            <div className="mb-3">
                                <label htmlFor="pincode" className="form-label">Pincode</label>
                                <input name="pincode" required type="number" className="form-control" id="pincode" placeholder="pincode"
                                    value={state.address.pincode}
                                    onChange={changeHandler}
                                    onBlur={() => setPincodeError(groundValidator.nameChecker(state.address.pincode))}
                                />
                            </div>

                            {/* error paragraph */}
                            {
                                pincodeError.length ?
                                    <h6 className='text-danger display-6'>{`*${pincodeError}`}</h6> :
                                    <p></p>
                            }

                            {/* state */}
                            <div className="mb-3">
                                <label htmlFor="state" className="form-label">state</label>
                                <input name="state" required type="text" className="form-control" id="state" placeholder="state"
                                    value={state.address.state}
                                    onChange={changeHandler}
                                    onBlur={() => setStateError(groundValidator.nameChecker(state.address.state))}
                                />
                            </div>
                            {/* error paragraph */}
                            {
                                stateError.length ?
                                    <h6 className='text-danger display-6'>{`*${stateError}`}</h6> :
                                    <p></p>
                            }

                            {/* country */}
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">Country</label>
                                <input name="country" required type="text" className="form-control" id="country" placeholder="country"
                                    value={state.address.country}
                                    onChange={changeHandler}
                                    onBlur={() => setCountryError(groundValidator.nameChecker(state.address.country))}
                                />
                            </div>
                            {/* error paragraph */}
                            {
                                countryError.length ?
                                    <h6 className='text-danger display-6'>{`*${countryError}`}</h6> :
                                    <p></p>
                            }

                        </fieldset>



                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Add</button>
                        </div>
                    </form>
                </div>
    )
}

const mapStateToProps = state => (
    {
        groundState: state.grounds
    }
)

const mapDispatchToProps = dispatch => (
    {
        addGround: ground => dispatch(addGround(ground))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(AddGround)