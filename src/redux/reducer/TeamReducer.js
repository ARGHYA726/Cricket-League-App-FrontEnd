import {
    ADD_TEAMS_ERROR,
    ADD_TEAMS_REQUEST,
    ADD_TEAMS_SUCCESS,
    DELETE_TEAMS_ERROR,
    DELETE_TEAMS_REQUEST,
    DELETE_TEAMS_SUCCESS,
    FETCH_TEAMS_ERROR,
    FETCH_TEAMS_REQUEST,
    FETCH_TEAMS_SUCCESS,
    UPDATE_TEAMS_ERROR,
    UPDATE_TEAMS_REQUEST,
    UPDATE_TEAMS_SUCCESS,
    FETCH_TEAMBYID_ERROR,
    FETCH_TEAMBYID_REQUEST,
    FETCH_TEAMBYID_SUCCESS,
    FETCH_TEAM_PLAYERS_ERROR,
    FETCH_TEAM_PLAYERS_REQUEST,
    FETCH_TEAM_PLAYERS_SUCCESS,
} from '../action-types/TeamActionTypes'

const initialStateTeams = {
    loading: false,
    data: [],
    error: ''
}

export const TeamsReducer = (state = initialStateTeams, action) => {
    switch (action.type) {

        case FETCH_TEAMS_REQUEST: return {
            ...state,

            loading: true
        }
        case FETCH_TEAMS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_TEAMS_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload

            }
        case ADD_TEAMS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case ADD_TEAMS_SUCCESS:

            return {
                loading: false,
                data: [...state.data, action.payload],
                error: ""
            }
        case ADD_TEAMS_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }

        case UPDATE_TEAMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_TEAMS_SUCCESS:
            const allTeams = state.data.filter(team => team.teamId !== action.payload.teamId);
            return {
                loading: false,
                data: [...allTeams, action.payload],
                error: ''
            }
        case UPDATE_TEAMS_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }

        case DELETE_TEAMS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_TEAMS_SUCCESS:
            const data = state.data.filter(team => team.teamId !== Number(action.payload))
            return {
                loading: false,
                data: data,
                error: ''
            }
        case DELETE_TEAMS_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }
        case FETCH_TEAMBYID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TEAMBYID_SUCCESS:
            return {
                loading: false,
                data: [action.payload],
                error: ''
            }
        case FETCH_TEAMBYID_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        case FETCH_TEAM_PLAYERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_TEAM_PLAYERS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_TEAM_PLAYERS_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default: return state;
    }

}
