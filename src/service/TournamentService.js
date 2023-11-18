const ax = require('axios')

class TournamentService {
    baseUrl = "http://localhost:2222/tournaments";

    fetchAllTournaments = () => {
        return ax.get(this.baseUrl);
    }
    fetchTournamentById = (tournamentId) => {
        return ax.get(`${this.baseUrl}/${tournamentId}`);
    }
    addTournament = tournament => (
        ax.post(this.baseUrl, tournament)
    )
    updateTournament = tournament => (
        ax.put(`${this.baseUrl}/${tournament.tournamentId}`, tournament)
    )
}

module.exports = {
    TournamentService
}
