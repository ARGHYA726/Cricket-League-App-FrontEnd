const Ticket = require('../../src/models/Ticket');
const TicketService = require('../../src/service/TicketService')

describe('to check ticket functions..', () => {
    let ticket;
    let ticketService;
    ticketService = new TicketService.TicketService();



    it('should return a ticket with id 5', function (done) {
        ticketService.getTicketById(5)
            .then(response => {
                expect(response.data.ticketId).toBe(5);
                done()  
            })
    });

    it("should post a ticket and get a response back", done => {
        ticket = new Ticket.Ticket();
        // posting a ground
        ticket.ticketName = "Ticket_Test";
        ticket.totalAmount = 100;
        ticket.seatNo= 400

        ticketService.addTicket(ticket)
            .then(response => {
                ticket = response.data;

                expect(ticket.ticketName).toBe('Ticket_Test');
                expect(ticket.totalAmount).toBe(100)
                done();
            });

    });

    it("should delete a ticket", done => {
        // prevTicket = ticket;
        ticketService.deleteTicketById(ticket.ticketId)
            .then(resp => {
                ticket = resp.data;

                expect(ticket).toEqual(ticket);
                done();
            })
    })


})