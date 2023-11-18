var axios = require("axios");

class TicketService {
    baseUrl = 'http://localhost:2222/tickets';
    

    addTicket(ticket){
        return axios.post(this.baseUrl, ticket);
    }

    deleteTicketById(tid) {
        // alert("Ticket deleted successfully")
        return axios.delete(this.baseUrl + '/' + tid);
    }

    getTicketById(tid) {
        return axios.get(this.baseUrl + '/' + tid);
    }

}
// export default TicketService;
module.exports={
    TicketService
}













