import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

function AudienceInfo({ loginState }) {


    const { aid } = useParams();

    console.log("before useState")
    const [state, setState] = useState({
        "audienceId": 0,
        "audienceName": "",
        "amount": 0,
        "ticketId": null,
        "matchId": null,
        "ticket": null
    });

    useEffect(
        () => {
            console.log("inside useEffect")
            setState(loginState.data)
        }, []
    )

    console.log("data", loginState.data)
    return (
        <div className='container'><div className="jumbotron">
            <h1 className="display-4">Hello, {state.audienceName}</h1>
            <h6 className="display-6">Amount: {state.amount}</h6>
            <p className="lead"></p>
            <hr className="my-4" />
            <p>Book a ticket to enjoy a match</p>
            <p>{state.ticket ? `Ticket: ${state.ticket.ticketName} and cost: ${state.ticket.totalAmount}` : "You have not bought a ticket"}</p>
            {
                state.ticket === null ?
                    <p className="lead">
                        <Link className="btn btn-dark btn-lg" to={`/audience/${state.audienceId}/book-ticket`} style={{}}>Book a ticket</Link>
                    </p>
                    :
                    <p className="lead">
                        <button disabled className="btn btn-dark btn-lg">
                            Book a ticket
                        </button>
                    </p>
            }
        </div></div>
    )
}


const mapStateToProps = state => (
    {
        loginState: state.audience
    }
)

const mapDispatchToProps = dispatch => (
    {}
)

export default connect(mapStateToProps, mapDispatchToProps)(AudienceInfo)