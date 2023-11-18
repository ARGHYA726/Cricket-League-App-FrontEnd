const ax=require('axios')

class TeamService {
    constructor() {

        this.state = {
            baseUrl: "http://localhost:2222/teams"
        }
    }
    
    fetchAllTeams = () => {
        return ax.get(`${this.state.baseUrl}`);
    }
    fetchTeamById = teamId => (
        ax.get(`${this.state.baseUrl}/${teamId}`)
    )
    addTeam = team => (
        ax.post(`${this.state.baseUrl}`, team)
    )

    updateTeam = team => (
        ax.put(`${this.state.baseUrl}/${team.teamId}`, team)
    )

    deleteTeam = teamId => (
        ax.delete(`${this.state.baseUrl}/${teamId}`)
    )
    fetchTeamPlayers = teamId => {
        return ax.get(`${this.state.baseUrl}/${teamId}/players`);
    }
}

module.exports = {
    TeamService
}
