import {
    ADD_AUDIENCE_ERROR,
    ADD_AUDIENCE_REQUEST,
    ADD_AUDIENCE_SUCCESS,
    BOOK_TICKET_ERROR,
    BOOK_TICKET_REQUEST,
    BOOK_TICKET_SUCCESS,
    // DELETE_GROUNDS_ERROR,
    // DELETE_GROUNDS_REQUEST,
    // DELETE_GROUNDS_SUCCESS,
    FETCH_AUDIENCE_ERROR,
    FETCH_AUDIENCE_REQUEST,
    FETCH_AUDIENCE_SUCCESS,
    // UPDATE_GROUNDS_ERROR,
    // UPDATE_GROUNDS_REQUEST,
    // UPDATE_GROUNDS_SUCCESS
} from '../action-types/AudienceActionTypes'

const initialStateAudiance = {
    loading: false,
    data: {},
    error: ''
}

// reducers
export const AudienceReducer = (state = initialStateAudiance, action) => {
    switch (action.type) {

        case FETCH_AUDIENCE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_AUDIENCE_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_AUDIENCE_ERROR:
            return {
                loading: false,
                data: {},
                error: action.payload
            }

        case ADD_AUDIENCE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_AUDIENCE_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ""
            }

        case ADD_AUDIENCE_ERROR:
            return {
                loading: false,
                data: {},
                error: action.payload
            }


        case BOOK_TICKET_REQUEST:
            return {
                ...state,
                loading: true
            }

        case BOOK_TICKET_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case BOOK_TICKET_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }

        default: return state
    }
}