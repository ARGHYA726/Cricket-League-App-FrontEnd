import { TicketService } from '../../service/TicketService';
import {
    ADD_TICKET_REQUEST,
    DELETE_TICKET_REQUEST,
    FETCH_TICKETBYID_REQUEST
} from "../action-types/ticketTypes";

export const addTicketRequest = (t) => {
    return {
        type: ADD_TICKET_REQUEST,
        payload: t,
    };
};
export const deleteTicketRequest = (tid) => {
    return {
        type: DELETE_TICKET_REQUEST,
        payload: tid
    };
};

export const getTicketByIdRequest = (tid) => {
    // alert('inside getTicketByIdRequest')
    return {
        type: FETCH_TICKETBYID_REQUEST,
        payload: tid
    }
}


//Adding Ticket
export const addTicket = (t) => {
    return (dispatch) => {
        let service = new TicketService();
        service.addTicket(t)
            .then((response) => {
                const ticket = response.data;
                dispatch(addTicketRequest(ticket));
            })
            .catch((error) => {
                alert('Error Adding ticket')
            });
    };
};

// delete ticket
export const deleteTicket = (tid) => {
    return (dispatch) => {
        let service = new TicketService();
        service.deleteTicketById(tid)
            .then((result) => {
                dispatch(deleteTicketRequest(tid));

            })
            .catch((error) => {
                alert('Error deleting ticket')
            });
    };
};

//Fetch Ticket By Id

export const getTicketById = (tid) => {
    // alert('inside ticketActions 62')
    return (dispatch) => {
        let service = new TicketService();
        service.getTicketById(tid)
            .then((result) => {
                // alert('inside ticketActions 67')
                dispatch(getTicketByIdRequest(result.data));
            })
            .catch((error) => {
                alert('inside ticketActions 71')
                // alert('Error fetching data')
            })
    }
}

