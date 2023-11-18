import React from 'react'
import { deleteTicket} from "../../redux/actions/ticketActions";
import { connect } from "react-redux";

function DeleteTicket({deleteTicket}) {
    let ticketId = 0;

  return (
    <div>
      <div>
        <form className="addForm">

         <div>
            <input className="form-control" type="text" placeholder="Enter Ticket ID"
              onChange={(e) => ticketId = e.target.value}
            />
          </div>

         <button className="addButton" onClick={() => deleteTicket(ticketId)}>
                Delete </button> 
        </form>
      </div>
    </div>
  )
}



const mapDispatchToProps = (dispatch) => {
    return {
        deleteTicket: (tid) => { dispatch(deleteTicket(tid)) },
    };
};
export default connect(null, mapDispatchToProps)(DeleteTicket);