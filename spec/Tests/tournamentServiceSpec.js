var TournamentService = require("../../src/service/TournamentService");
var Tournament = require("../../src/models/Tournament");

describe("Testing Tournament functionalities..", () => {

    var tournament;
    var tournamentService;
    var prevTournament;
    tournament = new Tournament.tournament();
    var tournaments = [];
    tournamentService = new TournamentService.TournamentService();


    it('should return a Tournament with id:- 1', function (done) {

        tournamentService.fetchTournamentById(1)

            .then(response => {
                // console.log(response.data)
                expect(response.data.tournamentId).toBe(1);

                done()

            })

    });

    it("should fetch all Tournaments", done => {
        tournamentService.fetchAllTournaments()
            .then(
                response => {
                    tournament = response.data;
                    expect(response.data[0].tournamentId).toBe(1);
                    expect(response.data).toBeInstanceOf(Array);
                    done();
                }
            );
    });

    it("should post a Tournament and get a response back", done => {

        tournament.tournamentName = "T2";
        tournament.organiserId = 1
        tournament.matchIds = [1100]
        tournament.cancel = false

        tournamentService.addTournament(tournament)
            .then(response => {
                tournament = response.data;
                expect(tournament.tournamentName).toBe('T2');
                done();
            });

    });


    xit("should delete a Tournament", done => {
        prevTournament = tournament;
        tournamentService.deleteTournament(tournament.tournamentId)
            .then(resp => {
                tournament = resp.data;

                expect("Tournament deleted").toEqual(tournament);

                expectAsync(tournamentService.fetchAllTournaments().then(resp => {
                    return resp.data
                })).toBeResolvedTo(tournaments.filter(obj => obj.tournamentId !== obj.tournamentId));

                done();
            })
    })
})

