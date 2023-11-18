import {
    ADD_OWNERS_ERROR,
    ADD_OWNERS_REQUEST,
    ADD_OWNER_SUCCESS,
    DELETE_OWNERS_ERROR,
    DELETE_OWNERS_REQUEST,
    DELETE_OWNERS_SUCCESS,
    FETCH_OWNERS_ERROR,
    FETCH_OWNERS_REQUEST,
    FETCH_OWNERS_SUCCESS,
    UPDATE_OWNERS_ERROR,
    UPDATE_OWNERS_REQUEST,
    UPDATE_OWNERS_SUCCESS,
    FETCH_OWNERBYID_ERROR,
    FETCH_OWNERBYID_REQUEST,
    FETCH_OWNERBYID_SUCCESS,
    PAY_SALARY_ERROR,
    PAY_SALARY_REQUEST,
    PAY_SALARY_SUCCESS,
} from '../action-types/OwnerActionTypes'

const initialStateOwner = {
    loading: false,
    data: [],
    error: '',
    salary: 0
}

// reducers
export const OwnerReducer = (state = initialStateOwner, action) => {
    switch (action.type) {

        case FETCH_OWNERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_OWNERS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_OWNERS_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        case ADD_OWNERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_OWNER_SUCCESS:
            return {
                loading: false,
                data: [...state.data, action.payload],
                error: ""
            }

        case ADD_OWNERS_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }

        case UPDATE_OWNERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_OWNERS_SUCCESS:
            const allOwners = state.data.filter(owner => owner.ownerId !== action.payload.ownerId);
            return {
                loading: false,
                data: [...allOwners, action.payload],
                error: ''
            }
        case UPDATE_OWNERS_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }

        case DELETE_OWNERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_OWNERS_SUCCESS:
            const data = state.data.filter(owner => owner.ownerId !== Number(action.payload))
            return {
                loading: false,
                data: data,
                error: ''
            }
        case DELETE_OWNERS_ERROR:
            return {
                loading: false,
                data: state.data,
                error: action.payload
            }
        case FETCH_OWNERBYID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_OWNERBYID_SUCCESS:
            return {
                loading: false,
                data: [action.payload],
                error: ''
            }
        case FETCH_OWNERBYID_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        case PAY_SALARY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PAY_SALARY_SUCCESS:
            return {
                loading: false,
                data: [],
                salary: action.payload,
                error: ''
            }
        case PAY_SALARY_ERROR:
            return {
                loading: false,
                data: [],
                salary: 0,
                error: action.payload
            }
        default: return state
    }
}