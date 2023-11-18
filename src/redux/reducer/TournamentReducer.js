import {
    ADD_TOURNAMENT_ERROR,
    ADD_TOURNAMENT_REQUEST,
    ADD_TOURNAMENT_SUCCESS, FETCH_TOURNAMENTBYID_ERROR,
    FETCH_TOURNAMENTBYID_REQUEST,
    FETCH_TOURNAMENTBYID_SUCCESS, FETCH_TOURNAMENT_ERROR,
    FETCH_TOURNAMENT_REQUEST,
    FETCH_TOURNAMENT_SUCCESS, UPDATE_TOURNAMENT_ERROR, UPDATE_TOURNAMENT_REQUEST, UPDATE_TOURNAMENT_SUCCESS
} from '../action-types/TournamentActionTypes';

const initialStateTournament = {
    loading: false,
    data: [],
    error: ''
}



// reducers
export const TournamentReducer = (state = initialStateTournament, action) => {
    switch (action.type) {

        case FETCH_TOURNAMENTBYID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TOURNAMENTBYID_SUCCESS:
            return {
                loading: false,
                data: [action.payload],
                error: ''
            }
        case FETCH_TOURNAMENTBYID_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        case FETCH_TOURNAMENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_TOURNAMENT_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_TOURNAMENT_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        case ADD_TOURNAMENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_TOURNAMENT_SUCCESS:
            return {
                loading: false,
                data: [...state.data, action.payload],
                error: ""
            }
        case ADD_TOURNAMENT_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }

        case UPDATE_TOURNAMENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_TOURNAMENT_SUCCESS:
            const allTournaments = state.data.filter(tournament => tournament.tournamentId !== action.payload.tournamentId);
            return {
                loading: false,
                data: [...allTournaments, action.payload],
                error: ''
            }
        case UPDATE_TOURNAMENT_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }
        default: return state;
    }
}

