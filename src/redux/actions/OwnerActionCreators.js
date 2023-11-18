import { OwnerService } from "../../service/OwnerService";

import { ADD_OWNERS_ERROR, ADD_OWNERS_REQUEST, ADD_OWNER_SUCCESS, DELETE_OWNERS_ERROR, DELETE_OWNERS_REQUEST, DELETE_OWNERS_SUCCESS, FETCH_OWNERS_ERROR, FETCH_OWNERS_REQUEST, FETCH_OWNERS_SUCCESS, UPDATE_OWNERS_ERROR, UPDATE_OWNERS_REQUEST, UPDATE_OWNERS_SUCCESS,FETCH_OWNERBYID_ERROR,FETCH_OWNERBYID_REQUEST,FETCH_OWNERBYID_SUCCESS ,PAY_SALARY_ERROR,PAY_SALARY_REQUEST,PAY_SALARY_SUCCESS} from "../action-types/OwnerActionTypes";

const ownerService = new OwnerService();


// action creators
const fetchOwnersRequest = () => (
    {
        type: FETCH_OWNERS_REQUEST
    }
);

const fetchOwnersSuccess = data => (
    {
        type: FETCH_OWNERS_SUCCESS,
        payload: data
    }
);

const fetchOwnersError = error => (
    {
        type: FETCH_OWNERS_ERROR,
        payload: error
    }
);

// ADD
const addOwnerRequest = () => {
    return {
        type: ADD_OWNERS_REQUEST
    }
}


const addOwnerSuccess = owner => (
    {
        type: ADD_OWNER_SUCCESS,
        payload: owner
    }
)

const addOwnerError = err => (
    {
        type: ADD_OWNERS_ERROR,
        payload: err
    }
)


// update
const updateOwnerRequest = () => (
    {
        type: UPDATE_OWNERS_REQUEST
    }
)

const updateOwnerSuccess = owner => (
    {
        type: UPDATE_OWNERS_SUCCESS,
        payload: owner
    }
)

const updateOwnerError = err => (
    {
        type: UPDATE_OWNERS_ERROR,
        payload: err
    }
)


// delete

const deleteOwnerRequest = () => (
    {
        type: DELETE_OWNERS_REQUEST
    }
)

const deleteOwnerSuccess = ownerId => (
    {
        type: DELETE_OWNERS_SUCCESS,
        payload: ownerId
    }
)

const deleteOwnerError = error => (
    {
        type: DELETE_OWNERS_ERROR,
        payload: error
    }
)

const fetchOwnerByIdRequest = () => (
    {
        type: FETCH_OWNERBYID_REQUEST
    }
)
const fetchOwnerByIdSuccess = data => (
    {
        type: FETCH_OWNERBYID_SUCCESS,
        payload: data
    }
)
const fetchOwnerByIdError = error => (
    {
        type: FETCH_OWNERBYID_ERROR,
        payload: error
    }
)
const paySalaryRequest = () => (
    {
        type: PAY_SALARY_REQUEST
    }
)
const paySalarySuccess = data => (
    {
        type: PAY_SALARY_SUCCESS,
        payload: data
    }
)
const paySalaryError = error => (
    {
        type: PAY_SALARY_ERROR,
        payload: error
    }
)
const paySalaryTo = (ownerId, playerId,salary) => {
    return dispatch => {
        dispatch(paySalaryRequest())

        ownerService.paySalary(ownerId, playerId,salary)
        .then(response => {
            setTimeout(() => dispatch(paySalarySuccess(response.data)), 2000)
        })
        .catch(error => {
            dispatch(paySalaryError(error.message))
        })
    }
}

const fetchOwnerById = ownerId => {
    return dispatch => {
        dispatch(fetchOwnerByIdRequest())

        ownerService.fetchOwnerById(ownerId)
        .then(response => {
            setTimeout(() => dispatch(fetchOwnerByIdSuccess(response.data)), 2000)
        })
        .catch(error => {
            dispatch(fetchOwnerByIdError(error.message))
        })
    }
}




const fetchOwners = () => {
    return disp => {
        disp(fetchOwnersRequest()) // to set loading to true

        ownerService.fetchAllOwners()
            .then(response => {
                setTimeout(() => disp(fetchOwnersSuccess(response.data)), 2000)

            })
            .catch(error => {
                disp(fetchOwnersError(error.message))
            })
    }
}



const addOwner = owner => (
    dispatch => {
        dispatch(addOwnerRequest)
        ownerService.addOwner(owner)
            .then(response => {
                setTimeout(() => dispatch(addOwnerSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(addOwnerError(error))
            })
    }
)

const updateOwner = owner => (
    dispatch => {
        dispatch(updateOwnerRequest)
        ownerService.updateOwner(owner)
            .then(response => {
                setTimeout(() => dispatch(updateOwnerSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(updateOwnerError(error))
            })
    }
)


const deleteOwner = ownerId => (
    dispatch => {
        dispatch(deleteOwnerRequest)
        ownerService.deleteOwner(ownerId)
            .then(response => {
                setTimeout(() => dispatch(deleteOwnerSuccess(response.data.ownerId)), 2000)
            })
            .catch(error => {
                dispatch(deleteOwnerError(error))
            })
    }
)

export { fetchOwners, addOwner, updateOwner,fetchOwnerById, deleteOwner,paySalaryTo }

