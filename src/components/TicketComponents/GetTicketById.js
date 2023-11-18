
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTicketById } from "../../redux/actions/ticketActions";


function GetTicketById({ ticketState, getTicketById }) {


    const [state, setState] = useState({
        ticketId: 0,
    });

    const changeHandler = (event) => {
        setState({
            ...state,
            ticketId: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(state);
        alert(state.ticketId)
        console.log("Ticket State: ", ticketState)
        getTicketById(state.ticketId)

    }


    return (
        // check for loading 
        ticketState.loading ?
            <div>Loading...</div> :
            ticketState.error ?
                <h2>{ticketState.error}</h2> :
                <div className='container'>
                    <h2>Show ticket</h2>
                    <form className="addForm" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Ticket Id:</label>
                            <input name="ticketId" required type="number" className="form-control" id="id" placeholder="team Id"
                                value={state.ticketId}
                                onChange={changeHandler} />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success mb-3">Show</button>
                        </div>
                    </form>
                    <h1 className='lead m-4'>ticket Details</h1>
                    {
                        
                        < table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th scope="col">Ticket Id</th>
                                    <th scope="col">Ticket Name</th>
                                    <th scope="col">Total Amount</th>
                                    <th scope="col">Seat No</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                <tr >
                                    <td>{ticketState.ticket.ticketId}</td>
                                    <td>{ticketState.ticket.ticketName}</td>
                                    <td>{ticketState.ticket.totalAmount}</td>
                                    <td>{ticketState.ticket.seatNo}</td>
                                </tr>

                            </tbody>
                        </table >

                    }
                </div>
    )
}

const mapStateToProps = state => (
    {
        ticketState: state.tickets
    }
)

const mapDispatchToProps = dispatch => (
    {
        getTicketById: ticketId => dispatch(getTicketById(ticketId))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(GetTicketById)