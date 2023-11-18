import { ADD_MATCH_ERROR, ADD_MATCH_REQUEST, ADD_MATCH_SUCCESS, CANCEL_MATCH_ERROR, CANCEL_MATCH_REQUEST, CANCEL_MATCH_SUCCESS, FETCH_MATCH_FAIL, FETCH_MATCH_REQUEST, FETCH_MATCH_SUCCESS } from "../action-types/MatchActionTypes"

const initialStateMatch = {
    loading: false,
    matches: [],
    error: ""
}

export const MatchReducer = (state = initialStateMatch, action) => {
    switch (action.type) {
        case FETCH_MATCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MATCH_SUCCESS:
            return {
                loading: false,
                matches: action.payload,
                error: ''
            }
        case FETCH_MATCH_FAIL:
            return {
                loading: false,
                matches: [],
                error: action.payload
            }

        case ADD_MATCH_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_MATCH_SUCCESS:
            return {
                loading: false,
                matches: [...state.matches, action.payload],
                error: ''
            }

        case ADD_MATCH_ERROR:
            return {
                loading: false,
                matches: state.matches,
                error: action.payload
            }

        case CANCEL_MATCH_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CANCEL_MATCH_SUCCESS:
            return {
                loading: false,
                matches: state.matches,
                error: ''
            }
        case CANCEL_MATCH_ERROR:
            return {
                loading: false,
                matches: state.matches,
                error: action.payload
            }

        default: return state
    }
}
