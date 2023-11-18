import React, { useState } from "react";
import { Ticket } from "../../models/Ticket";
import { Link } from "react-router-dom";
import { addTicket } from "../../redux/actions/ticketActions";
import { connect } from "react-redux";
import { useNavigate } from 'react-router';


function AddTicket(props) {
  const navigate = useNavigate();
  const [state, setState] = useState({ ticket: new Ticket() });
  const [ticketNameErr, setTicketNameErr] = useState("");
  const [totalAmountErr, setTotalAmountErr] = useState("");
  const [seatNoErr, setSeatNoErr] = useState("");

  const formValidation = () => {
    let isValid = true;

    const ticketNameErr = {};
    const totalAmountErr = {};
    const seatNoErr = {};

    if (state.ticket.ticketName.trim().length <= 0) {
      ticketNameErr.ticketNameRequired = "ticket Name is required";
      isValid = false;
    }

    if (state.ticket.totalAmount.trim().length <= 0) {
      totalAmountErr.totalAmountRequired = "ticket totalAmount is required";
      isValid = false;
    }

    if (state.ticket.seatNo.trim().length <= 0) {
      seatNoErr.seatNoRequired = "Ticket seatNo is required";
      isValid = false;
    }

    setTicketNameErr(ticketNameErr);
    setTotalAmountErr(totalAmountErr);
    setSeatNoErr(seatNoErr);
    return isValid;
  }


  function handleClick(e) {
    e.preventDefault();
    let isValid = formValidation()
    if (!isValid) {
      return false;
    }
    else {
      props.addTicket(state.ticket);
      alert('Ticket Added')
      navigate('/tickets');
    }
  }

  return (
    <div>
      <div>
        <form className="addForm">

          <div>
            <input className="form-control my-2" type="text" placeholder="Enter Ticket Name"
              value={state.ticket.ticketName}
              onChange={(e) => setState({
                ticket: {
                  ...state.ticket,
                  ticketName: e.target.value
                }
              })}
            />
            {Object.keys(ticketNameErr).map((key) => {
              return <div style={{ color: "red" }}>{ticketNameErr[key]}</div>
            })}
          </div>

          <div>
            <input className="form-control" type="text" placeholder="Enter Total Amount"
              value={state.ticket.totalAmount}
              onChange={(e) => setState({
                ticket:
                {
                  ...state.ticket,
                  totalAmount: e.target.value
                }
              })}
            /><br></br>
            {Object.keys(totalAmountErr).map((key) => {
              return <div style={{ color: "red" }}>{totalAmountErr[key]}</div>
            })}
          </div>

          <div>
            <input className="form-control" type="text" placeholder="Enter Seat No"
              value={state.ticket.seatNo}
              onChange={(e) => setState({
                ticket:
                {
                  ...state.ticket,
                  seatNo: e.target.value
                }
              })}
            /><br></br>
            {Object.keys(seatNoErr).map((key) => {
              return <div style={{ color: "red" }}>{seatNoErr[key]}</div>
            })}
          </div>

          <button className="addButton" onClick={handleClick}>Add Ticket</button>
          <div>
            <Link className="addButton" to='/tickets'>Back</Link>
          </div>
        </form>
      </div>

    </div>
  )
}

//used for dispatching actions to the store.
const mapDispatchToProps = (dispatch) => {

  return {
    //triger action
    addTicket: (t) => { dispatch(addTicket(t)) },

  };
};

export default connect(null, mapDispatchToProps)(AddTicket);