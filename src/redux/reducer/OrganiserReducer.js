import {
    ADD_ORGANISER_ERROR,
    ADD_ORGANISER_REQUEST,
    ADD_ORGANISER_SUCCESS,
    FETCH_ORGANISER_ERROR,
    FETCH_ORGANISER_REQUEST,
    FETCH_ORGANISER_SUCCESS,
    UPDATE_ORGANISER_ERROR,
    UPDATE_ORGANISER_REQUEST,
    UPDATE_ORGANISER_SUCCESS,
    FETCH_ORGANISER_TOURNAMENTS_ERROR,
    FETCH_ORGANISER_TOURNAMENTS_REQUEST,
    FETCH_ORGANISER_TOURNAMENTS_SUCCESS,
    FETCH_ORGANISERBYID_ERROR,
    FETCH_ORGANISERBYID_REQUEST,
    FETCH_ORGANISERBYID_SUCCESS,
    PRIZE_MONEY_ERROR,
    PRIZE_MONEY_REQUEST,
    PRIZE_MONEY_SUCCESS
} from '../action-types/OrganiserActionTypes'

const initialStateOrganiser = {
    loading: false,
    data: [],
    prize: 0,
    error: ''
}

// reducers
export const organiserReducer = (state = initialStateOrganiser, action) => {
    switch (action.type) {

        case FETCH_ORGANISER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_ORGANISER_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                prize: 0,
                error: ''
            }

        case FETCH_ORGANISER_ERROR:
            return {
                loading: false,
                data: [],
                prize: 0,
                error: action.payload
            }

        case ADD_ORGANISER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_ORGANISER_SUCCESS:
            return {
                loading: false,
                data: [...state.data, action.payload],
                prize: 0,
                error: ""
            }

        case ADD_ORGANISER_ERROR:
            return {
                loading: false,
                data: state.data,
                prize: 0,
                error: action.payload
            }

        case UPDATE_ORGANISER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_ORGANISER_SUCCESS:
            const allOrganisers = state.data.filter(organiser => organiser.organiserId !== action.payload.organiserId);
            return {
                loading: false,
                data: [...allOrganisers, action.payload],
                prize: 0,
                error: ''
            }
        case UPDATE_ORGANISER_ERROR:
            return {
                loading: false,
                data: state.data,
                prize: 0,
                error: action.payload
            }
        case FETCH_ORGANISER_TOURNAMENTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ORGANISER_TOURNAMENTS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                prize: 0,
                error: ''
            }
        case FETCH_ORGANISER_TOURNAMENTS_ERROR:
            return {
                loading: false,
                data: [],
                prize: 0,
                error: action.payload
            }
        case FETCH_ORGANISERBYID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ORGANISERBYID_SUCCESS:
            return {
                loading: false,
                data: [action.payload],
                prize: 0,
                error: ''
            }
        case FETCH_ORGANISERBYID_ERROR:
            return {
                loading: false,
                data: [],
                prize: 0,
                error: action.payload
            }
        case PRIZE_MONEY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRIZE_MONEY_SUCCESS:
            return {
                loading: false,
                data: [],
                prize: action.payload,
                error: ''
            }
        case PRIZE_MONEY_ERROR:
            return {
                loading: false,
                data: [],
                prize: 0,
                error: action.payload
            }
        default: return state
    }
}
