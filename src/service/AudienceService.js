// import ax from 'axios'
const ax = require('axios');

class AudienceService {
    constructor() {
        this.state = {
            baseUrl: "http://localhost:2222/audiences"

        }
    }

    // fetchAllAudience = () => {
    //     return ax.get(this.state.baseUrl);
    // }

    fetchById = audienceId => (
        ax.get(`${this.state.baseUrl}/${audienceId}`)
    )

    addAudience = audience => (
        ax.post(`${this.state.baseUrl}`, audience)
    )

    bookTicket = (audienceId, ticketId) => (
        ax.patch(`${this.state.baseUrl}/${audienceId}/book-ticket/${ticketId}`)
    )

    // updateGround = ground => (
    //     ax.patch(`${this.state.baseUrl}/${ground.groundId}`, ground)
    // )

    // deleteGround = groundId => (
    //     ax.delete(`${this.state.baseUrl}/${groundId}`)
    // )
}

module.exports = {
    AudienceService
}

// export { AudienceService }