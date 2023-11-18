import { OrganiserService } from "../../service/OrganiserService";

import { ADD_ORGANISER_ERROR, ADD_ORGANISER_REQUEST, ADD_ORGANISER_SUCCESS, FETCH_ORGANISER_ERROR, FETCH_ORGANISER_REQUEST, FETCH_ORGANISER_SUCCESS, UPDATE_ORGANISER_ERROR, UPDATE_ORGANISER_REQUEST, UPDATE_ORGANISER_SUCCESS, FETCH_ORGANISER_TOURNAMENTS_ERROR, FETCH_ORGANISER_TOURNAMENTS_REQUEST, FETCH_ORGANISER_TOURNAMENTS_SUCCESS, FETCH_ORGANISERBYID_ERROR, FETCH_ORGANISERBYID_REQUEST, FETCH_ORGANISERBYID_SUCCESS, PRIZE_MONEY_ERROR, PRIZE_MONEY_REQUEST, PRIZE_MONEY_SUCCESS } from "../action-types/OrganiserActionTypes";

const organiserService = new OrganiserService();


// action creators
const prizeMoneyRequest = () => (
    {
        type: PRIZE_MONEY_REQUEST
    }
)
const prizeMoneySuccess = data => (
    {
        type: PRIZE_MONEY_SUCCESS,
        payload: data
    }
)
const prizeMoneyError = error => (
    {
        type: PRIZE_MONEY_ERROR,
        payload: error
    }
)

const fetchOrganiserByIdRequest = () => (
    {
        type: FETCH_ORGANISERBYID_REQUEST
    }
)
const fetchOrganiserByIdSuccess = data => (
    {
        type: FETCH_ORGANISERBYID_SUCCESS,
        payload: data
    }
)
const fetchOrganiserByIdError = error => (
    {
        type: FETCH_ORGANISERBYID_ERROR,
        payload: error
    }
)
const fetchOrganiserTournamentsRequest = () => (
    {
        type: FETCH_ORGANISER_TOURNAMENTS_REQUEST
    }
)

const fetchOrganiserTournamentsSuccess = data => (
    {
        type: FETCH_ORGANISER_TOURNAMENTS_SUCCESS,
        payload: data
    }
)

const fetchOrganiserTournamentsError = error => (
    {
        type: FETCH_ORGANISER_TOURNAMENTS_ERROR,
        payload: error
    }
)
const fetchOrganisersRequest = () => (
    {
        type: FETCH_ORGANISER_REQUEST
    }
);

const fetchOrganisersSuccess = data => (
    {
        type: FETCH_ORGANISER_SUCCESS,
        payload: data
    }
);

const fetchOrganisersError = error => (
    {
        type: FETCH_ORGANISER_ERROR,
        payload: error
    }
);

// ADD
const addOrganiserRequest = () => {
    return {
        type: ADD_ORGANISER_REQUEST
    }
}


const addOrganiserSuccess = organiser => (
    {
        type: ADD_ORGANISER_SUCCESS,
        payload: organiser
    }
)

const addOrganiserError = err => (
    {
        type: ADD_ORGANISER_ERROR,
        payload: err
    }
)


// update
const updateOrganiserRequest = () => (
    {
        type: UPDATE_ORGANISER_REQUEST
    }
)

const updateOrganiserSuccess = organiser => (
    {
        type: UPDATE_ORGANISER_SUCCESS,
        payload: organiser
    }
)

const updateOrganiserError = err => (
    {
        type: UPDATE_ORGANISER_ERROR,
        payload: err
    }
)



const payPrizeMoneyTo = (organiserId, owner) => {
    return dispatch => {
        dispatch(prizeMoneyRequest())

        organiserService.payPrizeMoney(organiserId, owner)
        .then(response => {
            setTimeout(() => dispatch(prizeMoneySuccess(response.data)), 2000)
        })
        .catch(error => {
            dispatch(prizeMoneyError(error.message))
        })
    }
}

const fetchOrganiserById = organiserId => {
    return dispatch => {
        dispatch(fetchOrganiserByIdRequest())

        organiserService.fetchOrgById(organiserId)
        .then(response => {
            setTimeout(() => dispatch(fetchOrganiserByIdSuccess(response.data)), 2000)
        })
        .catch(error => {
            dispatch(fetchOrganiserByIdError(error.message))
        })
    }
}

const fetchOrganiserTournaments = organiserId => {
    return dispatch => {
        dispatch(fetchOrganiserTournamentsRequest())

        organiserService.fetchOrgTournaments(organiserId)
        .then(response => {
            setTimeout(() => dispatch(fetchOrganiserTournamentsSuccess(response.data)),2000)
        })
        .catch(error => {
            dispatch(fetchOrganiserTournamentsError(error.message))
        })

    }
}

const fetchOrganisers = () => {
    return disp => {
        disp(fetchOrganisersRequest()) // to set loading to true

        organiserService.fetchAllOrganisers()
            .then(response => {
                setTimeout(() => disp(fetchOrganisersSuccess(response.data)), 2000)

            })
            .catch(error => {
                disp(fetchOrganisersError(error.message))
            })
    }
}



const addOrganiser = organiser => (
    dispatch => {
        dispatch(addOrganiserRequest())
        organiserService.addOrganiser(organiser)
            .then(response => {
                setTimeout(() => dispatch(addOrganiserSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(addOrganiserError(error.message))
            })
    }
)

const updateOrganiser = organiser => (
    dispatch => {
        dispatch(updateOrganiserRequest())
        organiserService.updateOrganiser(organiser)
            .then(response => {
                setTimeout(() => dispatch(updateOrganiserSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(updateOrganiserError(error.message))
            })
    }
)

export { fetchOrganisers, addOrganiser, updateOrganiser, fetchOrganiserTournaments, fetchOrganiserById, payPrizeMoneyTo }