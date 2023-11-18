// import ax from 'axios'
const ax = require('axios');

class GroundService {
    constructor() {
        this.state = {
            baseUrl: "http://localhost:2222/grounds"

        }
    }

    fetchAllGrounds = () => {
        return ax.get(this.state.baseUrl);
    }

    fetchById = groundId => (
        ax.get(`${this.state.baseUrl}/${groundId}`)
    )

    addGround = ground => (
        ax.post(this.state.baseUrl, ground)
    )

    updateGround = ground => (
        ax.patch(`${this.state.baseUrl}/${ground.groundId}`, ground)
    )

    deleteGround = groundId => (
        ax.delete(`${this.state.baseUrl}/${groundId}`)
    )
}

module.exports = {
    GroundService
}

// export { GroundService }