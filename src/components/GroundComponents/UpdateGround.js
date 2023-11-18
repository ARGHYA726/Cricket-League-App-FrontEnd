import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from "react-router";
import { updateGround } from '../../redux/actions/GroundActionCreators';
import Loader from './Loader';


function UpdateGround({ groundState, updateGround }) {

    // state object

    // console.log(groundState)
    const [state, setState] = useState({
        groundId: 0,
        groundName: '',
        capacity: 0,
        address: {
            city: '',
            country: '',
            pincode: '',
            state: ""
        }
    })


    // id
    const { gid } = useParams();
    // navigation
    const navigate = useNavigate();

    // fetching ground
    useEffect(
        () => {

            // console.log(groundState.data.find(ground => ground.groundId === Number(gid)))
            setState(
                groundState.data.find(ground => ground.groundId === Number(gid))
            )
        }, []
    )


    const changeHandler = (event) => {
        setState(
            (event.target.name === "groundName" || event.target.name === "capacity") ?
                { ...state, [event.target.name]: event.target.value }
                :
                { ...state, address: { ...state.address, [event.target.name]: event.target.value } }
        );
    }



    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(state);

        updateGround(state)
        setTimeout(
            () => navigate("/", { replace: true })
            , 500)
    }


    return (

        groundState.loading ?
            <Loader /> :
            groundState.error ?
                <h2>{groundState.error}</h2> :
                <div className='container'>
                    < h2 className='lead'>Update ground</h2 >
                    <form className="g-3" onSubmit={submitHandler}>

                        {/* ground id */}
                        <div className="mb-3">
                            <label htmlFor="gid" className="form-label">Ground Name</label>
                            <input name="groundId" required type="number" disabled readOnly className="form-control" id="gid" placeholder="ground name"
                                value={state.groundId}
                            />
                        </div>


                        {/* ground name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Ground Name</label>
                            <input name="groundName" required type="text" className="form-control" id="name" placeholder="ground name"
                                value={state.groundName}
                                onChange={changeHandler}
                            />
                        </div>


                        {/* ground capacity */}
                        <div className="mb-3">
                            <label htmlFor="capacity" className="form-label">Ground capacity</label>
                            <input name="capacity" required type="number" className="form-control" id="capacity" placeholder="ground capacity"
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
                                />
                            </div>


                            {/* country */}
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">Country</label>
                                <input name="country" required type="text" className="form-control" id="country" placeholder="country"
                                    value={state.address.country}
                                    onChange={changeHandler}
                                />
                            </div>


                            {/* pincode */}
                            <div className="mb-3">
                                <label htmlFor="pincode" className="form-label">Pincode</label>
                                <input name="pincode" required type="number" className="form-control" id="pincode" placeholder="pincode"
                                    value={state.address.pincode}
                                    onChange={changeHandler}
                                />
                            </div>

                            {/* state */}
                            <div className="mb-3">
                                <label htmlFor="state" className="form-label">state</label>
                                <input name="state" required type="text" className="form-control" id="state" placeholder="state"
                                    value={state.address.state}
                                    onChange={changeHandler}
                                />
                            </div>

                        </fieldset>



                        <div className="col">
                            <button type="submit" className="btn btn-warning mb-3 px-3">Update</button>
                        </div>
                    </form>
                </div >
    )
}


const mapStateToProps = state => (
    {
        groundState: state.grounds
    }
)

const mapDispatchToProps = dispatch => (
    { updateGround: ground => dispatch(updateGround(ground)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(UpdateGround)