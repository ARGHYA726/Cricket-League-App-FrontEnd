const { organiser } = require('./organiser')


class tournament {
    tournamentName = 'T1';
    organiser = new organiser();
    organiserId = 0;
    matchIds = [];
    matches = [];
    cancel = false
}

module.exports = {
    tournament
}