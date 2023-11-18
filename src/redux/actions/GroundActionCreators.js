import { GroundService } from "../../service/GroundService";

import { ADD_GROUNDS_ERROR, ADD_GROUNDS_REQUEST, ADD_GROUND_SUCCESS, DELETE_GROUNDS_ERROR, DELETE_GROUNDS_REQUEST, DELETE_GROUNDS_SUCCESS, FETCH_GROUNDS_ERROR, FETCH_GROUNDS_REQUEST, FETCH_GROUNDS_SUCCESS, UPDATE_GROUNDS_ERROR, UPDATE_GROUNDS_REQUEST, UPDATE_GROUNDS_SUCCESS } from "../action-types/GroundActionTypes";

const groundService = new GroundService();


// action creators
const fetchGroundsRequest = () => (
    {
        type: FETCH_GROUNDS_REQUEST
    }
);

const fetchGroundsSuccess = data => (
    {
        type: FETCH_GROUNDS_SUCCESS,
        payload: data
    }
);

const fetchGroundsError = error => (
    {
        type: FETCH_GROUNDS_ERROR,
        payload: error
    }
);

// ADD
const addGroundRequest = () => {
    return {
        type: ADD_GROUNDS_REQUEST
    }
}


const addGroundSuccess = ground => (
    {
        type: ADD_GROUND_SUCCESS,
        payload: ground
    }
)

const addGroundError = err => (
    {
        type: ADD_GROUNDS_ERROR,
        payload: err
    }
)


// update
const updateGroundRequest = () => (
    {
        type: UPDATE_GROUNDS_REQUEST
    }
)

const updateGroundSuccess = ground => (
    {
        type: UPDATE_GROUNDS_SUCCESS,
        payload: ground
    }
)

const updateGroundError = err => (
    {
        type: UPDATE_GROUNDS_ERROR,
        payload: err
    }
)


// delete

const deleteGroundRequest = () => (
    {
        type: DELETE_GROUNDS_REQUEST
    }
)

const deleteGroundSuccess = groundId => (
    {
        type: DELETE_GROUNDS_SUCCESS,
        payload: groundId
    }
)

const deleteGroundError = error => (
    {
        type: DELETE_GROUNDS_ERROR,
        payload: error
    }
)








const fetchGrounds = () => {
    return disp => {
        disp(fetchGroundsRequest()) // to set loading to true

        groundService.fetchAllGrounds()
            .then(response => {
                setTimeout(() => disp(fetchGroundsSuccess(response.data)), 2000)

            })
            .catch(error => {
                disp(fetchGroundsError(error.message))
            })
    }
}



const addGround = ground => (
    dispatch => {
        dispatch(addGroundRequest())
        groundService.addGround(ground)
            .then(response => {
                setTimeout(() => dispatch(addGroundSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(addGroundError(error))
            })
    }
)

const updateGround = ground => (
    dispatch => {
        dispatch(updateGroundRequest())
        groundService.updateGround(ground)
            .then(response => {
                setTimeout(() => dispatch(updateGroundSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(updateGroundError(error))
            })
    }
)


const deleteGround = groundId => (
    dispatch => {
        dispatch(deleteGroundRequest())
        groundService.deleteGround(groundId)
            .then(response => {
                setTimeout(() => dispatch(deleteGroundSuccess(response.data.groundId)), 2000)
            })
            .catch(error => {
                dispatch(deleteGroundError(error))
            })
    }
)

export { fetchGrounds, addGround, updateGround, deleteGround }

