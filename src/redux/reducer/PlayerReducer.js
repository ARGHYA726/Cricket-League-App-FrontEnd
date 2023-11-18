import {
    ADD_PLAYER_REQUEST,
    FETCH_PLAYERS_REQUEST,
    FETCH_PLAYERS_SUCCESS,
    FETCH_PLAYERS_FAILURE,
    UPDATE_PLAYER_REQUEST,
    DELETE_PLAYER_REQUEST,
    FETCH_PLAYERBYID_REQUEST
} from "../action-types/playerTypes";

const initialStatePlayer = {
    loading: false,
    players: [],
    player: {},
    error: "",
};


const PlayerReducer = (state = initialStatePlayer, action) => {
    switch (action.type) {
        case ADD_PLAYER_REQUEST:
            return {
                ...state,
                players: [...state.players, action.payload],
            }
        case FETCH_PLAYERS_REQUEST:
            return {
                ...state,
                players: [...state.players, action.payload],
                loading: true,
            };
        case FETCH_PLAYERS_SUCCESS:
            return {
                ...state,
                players: action.payload,
                loading: false
            };
        case FETCH_PLAYERS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case UPDATE_PLAYER_REQUEST:
            let items = state.players.filter(e => e.playerId !== action.payload.playerId)
            return {
                ...state,
                players: [...items, action.payload]
            };
        case DELETE_PLAYER_REQUEST:
            return {
                ...state,
                players: state.players.filter(e => e.playerId !== action.payload)
            };
        case FETCH_PLAYERBYID_REQUEST:
            return {
                ...state,
                player: state.players.find(p => p.playerId == action.payload)
            }
        default:
            return state;
    }
};

export default PlayerReducer;
