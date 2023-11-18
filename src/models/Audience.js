const Ticket = require("./Ticket")

class Audience{
    audienceId = '';
    audienceName = '';
	amount = '';
    ticket =  new Ticket.Ticket();
}
module.exports={
    Audience
}