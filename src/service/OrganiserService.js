var ax = require('axios')

class OrganiserService {
    baseUrl = "http://localhost:2222/organisers";

    fetchAllOrganisers = () => {
        return ax.get(this.baseUrl);
    }

    addOrganiser = organiser => (
        ax.post(this.baseUrl, organiser)
    )

    updateOrganiser = organiser => (
        ax.put(`${this.baseUrl}/${organiser.organiserId}`, organiser)
    )

    fetchOrgTournaments = organiserId => {
        return ax.get(`${this.baseUrl}/${organiserId}/tournaments`);
    }
    fetchOrgById = organiserId => {
        return ax.get(`${this.baseUrl}/${organiserId}`);
    }
    payPrizeMoney = (organiserId, owner) => {
        return ax.put(`${this.baseUrl}/${organiserId}/prizemoneyto`,owner);
    }
}
module.exports = {
    OrganiserService
}