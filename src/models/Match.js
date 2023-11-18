const Address = require('./Address')
const Schedule = require('./Schedule')

class Match {

    match_id = 0;
    team_one_id = 0;
    team_one_name = "";
    team_two_id = 0;
    team_two_name = "";
    schedule = new Schedule.Schedule()
    status = false;
    ground_id = 0;
    ground_name = "";
    ground_address = new Address.Address()
    tournament_id = null;
    tournament_name = null


}

module.exports = {
    Match
}