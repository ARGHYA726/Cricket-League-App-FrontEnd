import {
    ADD_TICKET_REQUEST,
    DELETE_TICKET_REQUEST,
    FETCH_TICKETBYID_REQUEST
} from "../action-types/ticketTypes";

const initialStateTicket = {
    loading: false,
    tickets: [],
    ticket: {},
    error: "",
};

const TicketReducer = (state = initialStateTicket, action) => {//state transition n home comp updated
    switch (action.type) {
        case ADD_TICKET_REQUEST:
            return {
                ...state,
                tickets: [...state.tickets, action.payload],//emp data
            };
        case DELETE_TICKET_REQUEST:
            return {
                ...state,
                tickets: state.tickets.filter(t => t.ticketId !== action.payload)
            };
        case FETCH_TICKETBYID_REQUEST:
            alert('inside FETCH_TICKETBYID_REQUEST reducer : ' + action.payload)
            return {
                ...state,
                // ticket: state.tickets.find(t => t.ticketId === action.payload)
                ticket: action.payload
            }
        default:
            return state;
    }
};

export default TicketReducer;