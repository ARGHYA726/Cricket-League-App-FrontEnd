const ax = require('axios')
class OwnerService {

    constructor() {

        this.state = {

            baseUrl: "http://localhost:2222/owner"



        }

    }

    fetchAllOwners = () => {
        return ax.get(`${this.state.baseUrl}/getAllOwners`);
    }

    addOwner = owner => (
        ax.post(`${this.state.baseUrl}/addOwner`, owner)
    )

    updateOwner = owner => (
        ax.put(`${this.state.baseUrl}/updateOwner/${owner.ownerId}`, owner)
    )

    deleteOwner = ownerId => (
        ax.delete(`${this.state.baseUrl}/deleteById/${ownerId}`)
    )
    fetchOwnerById = ownerId => (
        ax.get(`${this.state.baseUrl}/getOwnerById/${ownerId}`)
    )
    paySalary = (ownerId, playerId, salary) => {
        return ax.put(`${this.state.baseUrl}/${ownerId}/paySalaryto/${playerId}/amount/${salary}`, ownerId, playerId, salary);
    }
}
module.exports = {

    OwnerService

}

