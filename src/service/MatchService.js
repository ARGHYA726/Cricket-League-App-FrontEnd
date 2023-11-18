const ax = require('axios');

class MatchService {
    constructor() {
        this.state = {
            baseUrl: "http://localhost:2222"
        }
    }

    fetchAllMatches = () => (
        ax.get(`${this.state.baseUrl}/matches`)
    );

    addMatch = match => (
        ax.post(`${this.state.baseUrl}/matches`, match)
    )

    cancelMatch = (matchId, status) => (
        ax.patch(`${this.state.baseUrl}/matches/${matchId}/cancel`, status)
    )


    // other methods
    fetchAllTeams = () => (
        ax.get(`${this.state.baseUrl}/teams`)
    );

    fetchAllTournaments = () => (
        ax.get(`${this.state.baseUrl}/tournaments`)
    )


    /* Methods for testing */
    // add an owner
    addOwner = owner => (
        ax.post(`${this.state.baseUrl}/owner/addOwner`, owner)
    )

    // add team
    addTeam = team => (
        ax.post(`${this.state.baseUrl}/teams`, team)
    )


}

module.exports = {
    MatchService
}