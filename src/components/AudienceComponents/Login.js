import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchAudience } from '../../redux/actions/AudienceActionCreators'

function Login({ loginState, searchAudience }) {

    const navigator = useNavigate()

    const [state, setState] = useState({
        audienceId: 0,
        audienceName: ''
    });

    const changeHandler = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = event => {
        event.preventDefault()
        console.log(state)

        if (state.audienceId !== 0 && state.audienceName !== '') {
            searchAudience(state.audienceId)
            console.log(loginState)

            setTimeout(() => navigator('/audience/' + state.audienceId, { replace: false }), 3000)
        }
        else
            alert("Please fill info")


    }


    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Audience Id</label>
                    <input type="number" id="form2Example1" className="form-control"
                        name="audienceId"
                        value={state.audienceId}
                        onChange={changeHandler}
                    />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">UserName</label>
                    <input type="text" id="form2Example2" className="form-control"
                        name="audienceName"
                        value={state.audienceName}
                        onChange={changeHandler}
                    />
                </div>

                {/* <!-- 2 column grid layout htmlFor inline styling -->
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <!-- Checkbox -->
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <!-- Simple link -->
                        <a href="#!">Forgot password?</a>
                    </div>
                </div> */}

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block mb-4">View Info</button>

                {/* <!-- Register buttons -->
                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div> */}
            </form>
        </div>
    )
}

const mapStateToProps = state => (
    {
        loginState: state.audience
    }
)

const mapDispatchToProps = dispatch => (
    {
        searchAudience: audienceId => dispatch(fetchAudience(audienceId))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)