import {
    ADD_GROUNDS_ERROR,
    ADD_GROUNDS_REQUEST,
    ADD_GROUND_SUCCESS,
    DELETE_GROUNDS_ERROR,
    DELETE_GROUNDS_REQUEST,
    DELETE_GROUNDS_SUCCESS,
    FETCH_GROUNDS_ERROR,
    FETCH_GROUNDS_REQUEST,
    FETCH_GROUNDS_SUCCESS,
    UPDATE_GROUNDS_ERROR,
    UPDATE_GROUNDS_REQUEST,
    UPDATE_GROUNDS_SUCCESS
} from '../action-types/GroundActionTypes'

const initialStateGround = {
    loading: false,
    data: [],
    error: ''
}

// reducers
export const GroundReducer = (state = initialStateGround, action) => {
    switch (action.type) {

        case FETCH_GROUNDS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_GROUNDS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_GROUNDS_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        case ADD_GROUNDS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_GROUND_SUCCESS:
            return {
                loading: false,
                data: [...state.data, action.payload],
                error: ""
            }

        case ADD_GROUNDS_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }

        case UPDATE_GROUNDS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_GROUNDS_SUCCESS:
            const allGrounds = state.data.filter(ground => ground.groundId !== action.payload.groundId);
            return {
                loading: false,
                data: [...allGrounds, action.payload],
                error: ''
            }
        case UPDATE_GROUNDS_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }

        case DELETE_GROUNDS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_GROUNDS_SUCCESS:
            const data = state.data.filter(ground => ground.groundId !== Number(action.payload))
            return {
                loading: false,
                data: data,
                error: ''
            }
        case DELETE_GROUNDS_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }

        default: return state
    }
}