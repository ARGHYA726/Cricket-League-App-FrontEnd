import { TeamService } from "../../service/TeamService";

import { ADD_TEAMS_ERROR, ADD_TEAMS_REQUEST, ADD_TEAMS_SUCCESS, DELETE_TEAMS_ERROR, DELETE_TEAMS_REQUEST, DELETE_TEAMS_SUCCESS, FETCH_TEAMS_ERROR, FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS, UPDATE_TEAMS_ERROR, UPDATE_TEAMS_REQUEST, UPDATE_TEAMS_SUCCESS ,FETCH_TEAMBYID_ERROR,FETCH_TEAMBYID_REQUEST,FETCH_TEAMBYID_SUCCESS, FETCH_TEAM_PLAYERS_ERROR, FETCH_TEAM_PLAYERS_REQUEST, FETCH_TEAM_PLAYERS_SUCCESS} from "../action-types/TeamActionTypes";

const teamService = new TeamService();

// action creators

const fetchTeamsRequest = () => (
    {
        type: FETCH_TEAMS_REQUEST
    }
);

const fetchTeamsSuccess = data => (
    {
        type: FETCH_TEAMS_SUCCESS,
        payload: data
    }
);

const fetchTeamsError = error => (
    {
        type: FETCH_TEAMS_ERROR,
        payload: error
    }
);

// ADD
const addTeamsRequest = () => {
    return {
        type: ADD_TEAMS_REQUEST
    }
}

const addTeamSuccess = team => (
    {
        type: ADD_TEAMS_SUCCESS,
        payload: team
    }
)

const addTeamError = err => (
    {
        type: ADD_TEAMS_ERROR,
        payload: err
    }
)

// update
const updateTeamRequest = () => (
    {
        type: UPDATE_TEAMS_REQUEST
    }
)

const updateTeamSuccess = team => (
    {
        type: UPDATE_TEAMS_SUCCESS,
        payload: team
    }
)

const updateTeamError = err => (
    {
        type: UPDATE_TEAMS_ERROR,
        payload: err
    }
)


// delete

const deleteTeamRequest = () => (
    {
        type: DELETE_TEAMS_REQUEST
    }
)

const deleteTeamSuccess = teamId => (
    {
        type: DELETE_TEAMS_SUCCESS,
        payload:teamId
    }
)

const deleteTeamError = error => (
    {
        type: DELETE_TEAMS_ERROR,
        payload: error
    }
)
const fetchTeamPlayersRequest = () => (
    {
        type: FETCH_TEAM_PLAYERS_REQUEST
    }
)

const fetchTeamPlayersSuccess = data => (
    {
        type: FETCH_TEAM_PLAYERS_SUCCESS,
        payload: data
    }
)

const fetchTeamPlayersError = error => (
    {
        type: FETCH_TEAM_PLAYERS_ERROR,
        payload: error
    }
)
const fetchTeamByIdRequest = () => (
    {
        type: FETCH_TEAMBYID_REQUEST
    }
)
const fetchTeamByIdSuccess = data => (
    {
        type: FETCH_TEAMBYID_SUCCESS,
        payload: data
    }
)
const fetchTeamByIdError = error => (
    {
        type: FETCH_TEAMBYID_ERROR,
        payload: error
    }
)
const fetchTeams = () => {
    return disp => {
        disp(fetchTeamsRequest()) // to set loading to true
        teamService.fetchAllTeams()
            .then(response => {
                setTimeout(() => disp(fetchTeamsSuccess(response.data)), 2000)

            })
            .catch(error => {
                disp(fetchTeamsError(error.message))
            })
    }
}


const addTeam = team => (
    dispatch => {
        dispatch(addTeamsRequest)
        teamService.addTeam(team)
            .then(response => {
                setTimeout(() => dispatch(addTeamSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(addTeamError(error))
            })
    }
)

const updateTeam = team => (
    dispatch => {
        dispatch(updateTeamRequest)
        teamService.updateTeam(team)
            .then(response => {
                setTimeout(() => dispatch(updateTeamSuccess(response.data)), 2000)
            })
            .catch(error => {
                dispatch(updateTeamError(error))
            })
    }
)


const deleteTeam = teamId => (
    dispatch => {
        dispatch(deleteTeamRequest)
        teamService.deleteTeam(teamId)
            .then(response => {
                setTimeout(() => dispatch(deleteTeamSuccess(response.data.teamId)), 2000)
            })
            .catch(error => {
                dispatch(deleteTeamError(error))
            })
    }
)

const fetchTeamById = teamId => {
    return dispatch => {
        dispatch(fetchTeamByIdRequest())

        teamService.fetchTeamById(teamId)
        .then(response => {
            setTimeout(() => dispatch(fetchTeamByIdSuccess(response.data)), 2000)
        })
        .catch(error => {
            dispatch(fetchTeamByIdError(error.message))
        })
    }
}
const fetchTeamPlayers = teamId => {
    return dispatch => {
        dispatch(fetchTeamPlayersRequest())

        teamService.fetchTeamPlayers(teamId)
        .then(response => {
            setTimeout(() => dispatch(fetchTeamPlayersSuccess(response.data)),2000)
        })
        .catch(error => {
            dispatch(fetchTeamPlayersError(error.message))
        })

    }
}

export { fetchTeams, addTeam, updateTeam, deleteTeam,fetchTeamById ,fetchTeamPlayers}

