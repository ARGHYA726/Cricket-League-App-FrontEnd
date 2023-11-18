import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bookTicket } from '../../redux/actions/AudienceActionCreators'

function BookTicket({ loginState, bookTicket }) {


    const [state, setState] = useState({
        "audienceId": 0,
        "audienceName": "",
        "amount": 0,
        "ticketId": 0,
        "matchId": 0,
        "ticket": ''
    });

    const navigator = useNavigate()


    useEffect(
        () => {
            console.log("inside useEffect")
            setState(loginState.data)
        }, []
    )


    const changeHandler = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }


    const submitHandler = event => {
        event.preventDefault()
        console.log(state)

        if (state.audienceId !== 0 && state.ticketId !== 0) {
            bookTicket(state.audienceId, Number(state.ticketId))
            console.log("Login state", loginState)

            setTimeout(() => navigator('/audience/' + state.audienceId, { replace: false }), 3000)
        }
        else
            alert("Please fill info")


    }




    return (
        <div className='container'>
            <form onSubmit={submitHandler}>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Ticket Id</label>
                    <input type="number" id="form2Example1" className="form-control"
                        name="ticketId"
                        value={state.ticketId}
                        onChange={changeHandler}
                    />
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block mb-4">Book ticket</button>
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
        bookTicket: (audienceId, ticketId) => dispatch(bookTicket(audienceId, ticketId))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(BookTicket)