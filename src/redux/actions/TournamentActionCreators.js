import { TournamentService } from "../../service/TournamentService";
import { ADD_TOURNAMENT_ERROR, ADD_TOURNAMENT_REQUEST, ADD_TOURNAMENT_SUCCESS, FETCH_TOURNAMENTBYID_ERROR, FETCH_TOURNAMENTBYID_REQUEST, FETCH_TOURNAMENTBYID_SUCCESS, FETCH_TOURNAMENT_ERROR, FETCH_TOURNAMENT_REQUEST, FETCH_TOURNAMENT_SUCCESS, UPDATE_TOURNAMENT_ERROR, UPDATE_TOURNAMENT_REQUEST, UPDATE_TOURNAMENT_SUCCESS } from "../action-types/TournamentActionTypes";

//

const tournamentService = new TournamentService();

// fetch all 
const fetchTournamentsRequest = () => (
    {
        type: FETCH_TOURNAMENT_REQUEST
    }
);

const fetchTournamentsSuccess = data => (
    {
        type: FETCH_TOURNAMENT_SUCCESS,
        payload: data
    }
);

const fetchTournamentsError = error => (
    {
        type: FETCH_TOURNAMENT_ERROR,
        payload: error
    }
);

// fetch by Id
const fetchTournamentByIdRequest = () => (
    {
        type: FETCH_TOURNAMENTBYID_REQUEST
    }
)
const fetchTournamentByIdSuccess = data => (
    {
        type: FETCH_TOURNAMENTBYID_SUCCESS,
        payload: data
    }
)
const fetchTournamentByIdError = error => (
    {
        type: FETCH_TOURNAMENTBYID_ERROR,
        payload: error
    }
)

// update
const updateTournamentRequest = () => (
    {
        type: UPDATE_TOURNAMENT_REQUEST
    }
)

const updateTournamentSuccess = tournament => (
    {
        type: UPDATE_TOURNAMENT_SUCCESS,
        payload: tournament
    }
)

const updateTournamentError = err => (
    {
        type: UPDATE_TOURNAMENT_ERROR,
        payload: err
    }
)

//add
const addTournamentRequest = () => {
    return {
        type: ADD_TOURNAMENT_REQUEST
    }
}


const addTournamentSuccess = tournament => (
    {
        type: ADD_TOURNAMENT_SUCCESS,
        payload: tournament
    }
)

const addTournamentError = err => (
    {
        type: ADD_TOURNAMENT_ERROR,
        payload: err
    }
)




//
const fetchTournaments = () => {
    return disp => {
        disp(fetchTournamentsRequest()) // to set loading to true

        tournamentService.fetchAllTournaments()
            .then(response => {
                setTimeout(() => disp(fetchTournamentsSuccess(response.data)), 2000)

            })
            .catch(error => {
                disp(fetchTournamentsError(error.message))
            })
    }
}


const fetchTournamentById = tournamentId => {
    return dispatch => {
        dispatch(fetchTournamentByIdRequest())

        tournamentService.fetchTournamentById(tournamentId)
            .then(response => {
                setTimeout(() => dispatch(fetchTournamentByIdSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(fetchTournamentByIdError(error.message))
            })
    }
}

const addTournament = tournament => (
    dispatch => {
        dispatch(addTournamentRequest())
        tournamentService.addTournament(tournament)
            .then(response => {
                setTimeout(() => dispatch(addTournamentSuccess(response.data)), 2000)
            })
            .catch(error => {
                console.log(error)
                dispatch(addTournamentError(error.message))
            })
    }
)

const modifyTournament = tournament => (
    dispatch => {
        dispatch(updateTournamentRequest())
        tournamentService.updateTournament(tournament)
            .then(response => {
                setTimeout(() => dispatch(updateTournamentSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(updateTournamentError(error.message))
            })
    }
)

export { fetchTournaments, modifyTournament, fetchTournamentById, addTournament };
