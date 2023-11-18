var TeamService = require("../../src/service/TeamService");
var Team = require("../../src/models/Team");

describe('to check Team functions..', () => {

    let team;
    let teams = []

    let teamService;

    teamService = new TeamService.TeamService();


    it('should return a team with id 13', function (done) {

        teamService.fetchTeamById(13)

            .then(response => {

                expect(response.data.teamId).toBe(13);

                done()

            })

    });
    it("should fetch all teams", done => {
        teamService.fetchAllTeams()
            .then(
                response => {
                    teams = response.data;
                    // expect(response.data.length).toBe(7);
                    expect(response.data[0].teamId).toBe(13);
                    expect(response.data).toBeInstanceOf(Array);
                    done();
                }
            );
    });
    it("should post a team and get a response back", done => {

        team = new Team.Team();

        // posting a team

        team.teamName = "Team_Test";


        teamService.addTeam(team)

            .then(response => {

                team = response.data;



                expect(team.teamName).toBe('Team_Test');

                //    expect(ground.capacity).toBe(300)

                done();

            });



    });
    it("should update the current team", done => {
        prevTeam = team; // storing previous team to verify id
        team.teamName = "Team_test_update"

        teamService.updateTeam(team)
            .then(resp => {
                team = resp.data;
                expect(team.teamName).toBe("Team_test_update");

                expect(prevTeam.teamId).toBe(team.teamId);

                done();
            });
    });


    it("should delete a team", done => {
        prevTeam = team;
        teamService.deleteTeam(team.teamId)
            .then(resp => {
                team = resp.data;

                expect("Team deleted successfully!").toEqual(team);
                expectAsync(teamService.fetchAllTeams().then(resp => {
                    return resp.data
                })).toBeResolvedTo(teams.filter(t => t.teamId !== team.teamId));

                done();
            })
    })

})