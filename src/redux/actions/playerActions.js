import { PlayerService } from '../../service/PlayerService';
import {
    ADD_PLAYER_REQUEST,
    FETCH_PLAYERS_REQUEST,
    FETCH_PLAYERS_SUCCESS,
    FETCH_PLAYERS_FAILURE,
    UPDATE_PLAYER_REQUEST,
    DELETE_PLAYER_REQUEST,
    FETCH_PLAYERBYID_REQUEST
} from "../action-types/playerTypes";


const service = new PlayerService();

export const fetchPLayersRequest = () => {
    return {
        type: FETCH_PLAYERS_REQUEST,
    };
};
export const fetchPlayersSuccess = (players) => {
    return {
        type: FETCH_PLAYERS_SUCCESS,
        payload: players
    };
};
export const fetchPlayersFailure = (error) => {
    return {
        type: FETCH_PLAYERS_FAILURE,
        payload: error,
    };
};
export const addPlayerRequest = (p) => {
    return {
        type: ADD_PLAYER_REQUEST,
        payload: p,
    };
};

export const updatePlayerRequest = (p) => {
    return {
        type: UPDATE_PLAYER_REQUEST,
        payload: p,
    };
};
export const deletePlayerRequest = (pid) => {
    return {
        type: DELETE_PLAYER_REQUEST,
        payload: pid
    };
};
export const getPlayerByIdRequest = (pid) => {
    return {
        type: FETCH_PLAYERBYID_REQUEST,
        payload: pid
    }
}



//Adding Player
export const addPlayer = (p) => {
    return (dispatch) => {
        service.addPlayer(p)
            .then((response) => {
                const player = response.data;
                dispatch(addPlayerRequest(player));
                alert('PLayer Added Successfully')
            })
            .catch((error) => {
                alert('Cant add player, please check the data')
            });
    };
};

//get all players
export const fetchPlayers = () => {
    return (dispatch) => {
        service.getAllPlayers()
            .then((response) => {
                const players = response.data;
                dispatch(fetchPlayersSuccess(players));
            })
            .catch((error) => {
                dispatch(fetchPlayersFailure(error.message));
            });
    };
};

//update player
export const updatePlayer = (p) => {
    return (dispatch) => {
        service.updatePlayer(p, p.playerId)
            .then((response) => {
                alert('Successfully updated Player')
                dispatch(updatePlayerRequest(p));
            })
            .catch((error) => {
                alert('Error updating player, please check the data')
            });
    };
};

//delete player
export const deletePlayer = (pid) => {
    return (dispatch) => {
        service.deletePlayerById(pid)
            .then((result) => {
                dispatch(deletePlayerRequest(pid));
                service.getAllPlayers()
                    .then((response) => {
                        const players = response.data;
                        alert('Successfully deleted player')
                        dispatch(fetchPlayersSuccess(players));
                    })
                    .catch((error) => {
                        dispatch(fetchPlayersFailure(error.message));
                    });
            })
            .catch((error) => {
                alert('Error deleting player')
                dispatch(fetchPlayersFailure(error.message));
            });
    };
};

//get player by id
export const getPlayerById = (pid) => {
    return (dispatch) => {
        service.getPlayerById(pid)
            .then((result) => {
                dispatch(getPlayerByIdRequest(pid));
            })
            .catch((error) => {
                alert('Error fetching data')
            })
    }
}
