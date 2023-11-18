const ax = require('axios')

class PlayerService {

    constructor() {
        this.state = {
            baseUrl : "http://localhost:2222"
        }
    }

    getAllPlayers = () => {
        return ax.get(`${this.state.baseUrl}/players/get-all-players`);
    }

    deletePlayerById = pid => {
        return ax.delete(`${this.state.baseUrl}/players/delete-player/${pid}`);
    }

    addPlayer = player => {
        return ax.post(`${this.state.baseUrl}/players/insert-player`, player);
    }

    updatePlayer = (player,pid) => {
        return ax.put(`${this.state.baseUrl}/players/${pid}`, player);
    }

    getPlayerById = pid => {
        return ax.get(`${this.state.baseUrl}/players/get-player-by-id/${pid}`);
    }

}

module.exports = {
    PlayerService
}
