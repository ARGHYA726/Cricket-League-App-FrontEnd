import { MatchService } from "../../service/MatchService";
import { ADD_MATCH_ERROR, ADD_MATCH_REQUEST, ADD_MATCH_SUCCESS, CANCEL_MATCH_ERROR, CANCEL_MATCH_REQUEST, CANCEL_MATCH_SUCCESS, FETCH_MATCH_FAIL, FETCH_MATCH_REQUEST, FETCH_MATCH_SUCCESS } from "../action-types/MatchActionTypes";


const matchService = new MatchService();

const fetchMatchRequest = () => {
    return {
        type: FETCH_MATCH_REQUEST
    }
}

const fetchMatchSuccess = matches => (
    {
        type: FETCH_MATCH_SUCCESS,
        payload: matches
    }
)

const fetchMatchFail = error => (
    {
        type: FETCH_MATCH_FAIL,
        payload: error
    }
)



// ADD

const addMatchRequest = () => (
    {
        type: ADD_MATCH_REQUEST
    }
)

const addMatchSuccess = match => (
    {
        type: ADD_MATCH_SUCCESS,
        payload: match
    }
)

const addMatchError = error => (
    {
        type: ADD_MATCH_ERROR,
        payload: error
    }
)


const cancelMatchRequest = () => (
    {
        type: CANCEL_MATCH_REQUEST
    }
)

const cancelMatchSuccess = matchId => (
    {
        type: CANCEL_MATCH_SUCCESS,
        payload: matchId
    }
)

const cancelMatchError = err => (
    {
        type: CANCEL_MATCH_ERROR,
        payload: err
    }
)


// thunk middleware allows us to define an action creator which returns a function and that function can have side effects
const fetchMatches = () => (
    dispatch => {
        dispatch(fetchMatchRequest())

        matchService.fetchAllMatches()
            .then(response => {
                setTimeout(() => dispatch(fetchMatchSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(fetchMatchFail(error))
            })
    }
)


const addMatch = match => (
    dispatch => {
        dispatch(addMatchRequest())
        matchService.addMatch(match)
            .then(response => {
                console.log("inside addMatch MatchActionCreators", response.data)
                setTimeout(() => dispatch(addMatchSuccess(response.data)), 1000)
            })
            .catch(error => { dispatch(addMatchError(error)) })
    }
)

const cancelMatch = (matchId, status) => (
    dispatch => {
        dispatch(cancelMatchRequest())
        matchService.cancelMatch(matchId, status)
            .then(resp => {
                console.log(resp.data)
                setTimeout(() => dispatch(cancelMatchSuccess(resp.data.match_id)), 2000)
            })
            .catch(error => {
                dispatch(cancelMatchError(error))
            })
    }
)

export { fetchMatches, addMatch, cancelMatch };
