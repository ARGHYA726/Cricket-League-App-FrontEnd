const MatchService = require('../../src/service/MatchService');
const Match = require('../../src/models/Match')



describe('Testing match service', function () {

    var matchService;
    var match;

    match = new Match.Match();
    var matches = [];

    beforeEach(() => {
        matchService = new MatchService.MatchService();
    });


    it('should fetch all matches', function (done) {
        matchService.fetchAllMatches()
            .then(response => {
                matches = response.data;
                expect(matches[0].match_id).toBe(1100);
                expect(matches).toBeInstanceOf(Array);
                done();
            });
    });


    it('should add a match', function () {

        const matchDTO = {
            "team_one_id": 9,
            "team_two_id": 10,
            "schedule": {
                "matchDate": "2022-03-21",
                "startTime": "02:23:23",
                "endTime": "03:03:03"
            },
            "ground_id": 1002
        }

        spyOn(matchService, "addMatch").and.callFake(() => {
            return new Promise((resolve, reject) => {

                const response = {
                    data:
                    {
                        "match_id": 1104,
                        "team_one_id": 17,
                        "team_one_name": "Team5",
                        "team_two_id": 18,
                        "team_two_name": "Team6",
                        "schedule": {
                            "matchDate": "2022-05-20",
                            "startTime": "04:34:00",
                            "endTime": "04:33:00"
                        },
                        "status": true,
                        "ground_id": 1007,
                        "ground_name": "BMC",
                        "ground_address": {
                            "pincode": 831656,
                            "city": "Jamshedpur",
                            "state": "Jharkhand",
                            "country": "India"
                        },
                        "tournament_id": null,
                        "tournament_name": null
                    }

                }

                setTimeout(() => {
                    resolve(response);
                }, 300);
            });
        })

        matchService.addMatch(matchDTO)
            .then(response => {
                match = response.data
                expect(match.match_id).toBe(1004);
                expect(match.schedule.matchDate).toBe("2022-05-20")
                done();
            });




    });

    

    const matchToCancel = 1100

    xit(`should cancel a match ${matchToCancel}`, done => {
        matchService.cancelMatch(matchToCancel, new Boolean(true))
            .then(response => {
                match = response.data
                expect(match.match_id).toBe(matchToCancel)
                expect(match.status).toBe(true)
                done();
            }).catch(error => console.log(error))
    })



});
