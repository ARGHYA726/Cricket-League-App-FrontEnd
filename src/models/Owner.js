const Team = require("./Team")

class Owner{
    ownerId = 0;
    ownerName = '';
	budget = '';
    team =  new Team.Team();
}
module.exports={
    Owner
}