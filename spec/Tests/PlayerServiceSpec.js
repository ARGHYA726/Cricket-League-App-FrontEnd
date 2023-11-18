var PlayerService = require("../../src/service/PlayerService");
var Player = require("../../src/models/Player");


describe("Testing the player functionalities", function () {

    var playerService;
    var player;
    var prevPlayer;
    player = new Player.Player();
    var players = [];

    beforeEach(function () {
        playerService = new PlayerService.PlayerService();
    });


    it("should return a player with id: 1", function (done) {
        playerService.getPlayerById(1)
            .then(response => {
                player = response.data
                expect(player.playerId).toBe(1);
                // expect(player.playerName).toBe("MS Dhoni");
                expect(player).toBe(player)
                done();
            });
    });



    it("should fetch all players", done => {
        playerService.getAllPlayers()
            .then(
                response => {
                    players = response.data;
                    // expect(response.data.length).toBe(7);
                    expect(response.data[0].playerId).toBe(1);
                    expect(response.data).toBeInstanceOf(Array);
                    done();
                }
            );
    });


    it("should post a player and get a response back", done => {
        player = new Player.Player();
        // posting a Player
        player.playerName = "Player Test";
        player.salary = 31000000;
        player.skill = "BOWLER";
        player.teamId = 4;

        playerService.addPlayer(player)
            .then(response => {
                player = response.data;
                expect(player.playerName).toBe('Player Test');
                expect(player.salary).toBe(31000000)
                done();
            });

    });

    it("should update the current player", done => {
        prevPlayer = player; // storing previous Player to verify id
        player.salary = 41000000;

        playerService.updatePlayer(player, player.playerId)
            .then(resp => {
                player = resp.data;
                expect(player.salary).toBe(41000000);
                expect(prevPlayer.playerId).toBe(player.playerId);

                done();
            });
    });

    it("should delete a player", done => {
        prevPlayer = player;
        playerService.deletePlayerById(player.playerId) //it doesnt return anything on delete
            .then(resp => {
                player = resp.data;

                expect("Player deleted successfully!.").toEqual(player);

                expectAsync(playerService.getAllPlayers().then(resp => {
                    return resp.data
                })).toBeResolvedTo(players.filter(p => p.playerId !== player.playerId));

                done();
            })
    })



});