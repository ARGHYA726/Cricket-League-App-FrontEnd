import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addAudience } from '../../redux/actions/AudienceActionCreators';
import { useNavigate } from 'react-router-dom'
import Loader from './Loader';


function AddAudience({ audienceState, addAudience }) {


    // console.log("state", audienceState)
    const [state, setState] = useState({
        audienceName: '',
        amount: 200,
    });

    const navigate = useNavigate()


    const changeHandler = (event) => {

        setState(
            { ...state, [event.target.name]: event.target.value }
        )
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(state);

        addAudience(state)


        setTimeout(
            () => navigate("/", { replace: true })
            , 500)
    }


    return (
        // check for loading 
        audienceState.loading ?
            <Loader /> :
            audienceState.error ?
                <h2>{audienceState.error}</h2> :
                <div className='container'>
                    <h2>Add Audience</h2>
                    <form className="g-3" onSubmit={submitHandler}>

                        {/* audience name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Audience Name</label>
                            <input name="audienceName" required type="text" className="form-control" id="name" placeholder="audience name"
                                value={state.audienceName}
                                onChange={changeHandler}
                            />
                        </div>


                        {/* audience amount */}
                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label">Audience amount: {state.amount}</label>
                            <input name="amount" required type="range" min={50} max={1000} step={50} className="form-control" id="amount" placeholder="audience amount"
                                value={state.amount}
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
        audienceState: state.audience
    }
)

const mapDispatchToProps = dispatch => (
    {
        addAudience: audience => dispatch(addAudience(audience))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(AddAudience)