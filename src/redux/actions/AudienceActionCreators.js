import { AudienceService } from "../../service/AudienceService";

import { ADD_AUDIENCE_ERROR, ADD_AUDIENCE_REQUEST, ADD_AUDIENCE_SUCCESS, BOOK_TICKET_ERROR, BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, /** DELETE_AUDIENCE_ERROR, DELETE_AUDIENCE_REQUEST, DELETE_AUDIENCE_SUCCESS,*/ FETCH_AUDIENCE_ERROR, FETCH_AUDIENCE_REQUEST, FETCH_AUDIENCE_SUCCESS } from "../action-types/AudienceActionTypes";

const audienceService = new AudienceService();


// action creators
const fetchAudienceRequest = () => (
    {
        type: FETCH_AUDIENCE_REQUEST
    }
);

const fetchAudienceSuccess = audienceId => (
    {
        type: FETCH_AUDIENCE_SUCCESS,
        payload: audienceId
    }
);

const fetchAudienceError = error => (
    {
        type: FETCH_AUDIENCE_ERROR,
        payload: error
    }
);

// ADD
const addAudienceRequest = () => {
    return {
        type: ADD_AUDIENCE_REQUEST
    }
}


const addAudienceSuccess = audience => (
    {
        type: ADD_AUDIENCE_SUCCESS,
        payload: audience
    }
)

const addAudienceError = err => (
    {
        type: ADD_AUDIENCE_ERROR,
        payload: err
    }
)

// BOOK TICKET
const bookTicketRequest = () => {
    return {
        type: BOOK_TICKET_REQUEST
    }
}

const bookTicketSuccess = (audience) => {
    return {
        type: BOOK_TICKET_SUCCESS,
        payload: audience
    }
}

const bookTicketError = error => {
    return {
        type: BOOK_TICKET_ERROR,
        payload: error
    }
}


// update
// const updateGroundRequest = () => (
//     {
//         type: UPDATE_GROUNDS_REQUEST
//     }
// )

// const updateGroundSuccess = ground => (
//     {
//         type: UPDATE_GROUNDS_SUCCESS,
//         payload: ground
//     }
// )

// const updateGroundError = err => (
//     {
//         type: UPDATE_GROUNDS_ERROR,
//         payload: err
//     }
// )


// delete

// const deleteAudienceRequest = () => (
//     {
//         type: DELETE_AUDIENCE_REQUEST
//     }
// )

// const deleteAudienceSuccess = audienceId => (
//     {
//         type: DELETE_AUDIENCE_SUCCESS,
//         payload: groundId
//     }
// )

// const deleteGroundError = error => (
//     {
//         type: DELETE_GROUNDS_ERROR,
//         payload: error
//     }
// )








const fetchAudience = (audienceId) => {
    return disp => {
        disp(fetchAudienceRequest()) // to set loading to true

        audienceService.fetchById(audienceId)
            .then(response => {
                console.log("response from audience service", response)
                setTimeout(() => disp(fetchAudienceSuccess(response.data)), 2000)

            })
            .catch(error => {
                disp(fetchAudienceError(error.message))
            })
    }
}



const addAudience = audience => (
    dispatch => {
        dispatch(addAudienceRequest())
        audienceService.addAudience(audience)
            .then(response => {
                setTimeout(() => dispatch(addAudienceSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(addAudienceError(error.message))
            })
    }
)

const bookTicket = (audienceId, ticketId) => {
    return dispatch => {
        dispatch(bookTicketRequest())
        audienceService.bookTicket(audienceId, ticketId)
            .then(response => {
                setTimeout(() => dispatch(bookTicketSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(bookTicketError(error.message))
            })
    }
}

// const updateGround = ground => (
//     dispatch => {
//         dispatch(updateGroundRequest)
//         groundService.updateGround(ground)
//             .then(response => {
//                 setTimeout(() => dispatch(updateGroundSuccess(response.data)), 2000)
//             })
//             .catch(error => {
//                 dispatch(updateGroundError(error))
//             })
//     }
// )


// const deleteGround = groundId => (
//     dispatch => {
//         dispatch(deleteGroundRequest)
//         groundService.deleteGround(groundId)
//             .then(response => {
//                 setTimeout(() => dispatch(deleteGroundSuccess(response.data.groundId)), 2000)
//             })
//             .catch(error => {
//                 dispatch(deleteGroundError(error))
//             })
//     }
// )

export { fetchAudience, addAudience, bookTicket /** updateAudience, deleteAudience **/ }

