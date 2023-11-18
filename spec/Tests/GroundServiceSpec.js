var GroundService = require("../../src/service/GroundService");
var Ground = require("../../src/models/Ground");

describe("Testing the ground functionalities", function () {

    var groundService;
    var ground;
    var prevGround;
    ground = new Ground.Ground();
    var grounds = [];

    beforeEach(function () {
        groundService = new GroundService.GroundService();
    });


    it("should return a ground with id: 1001", function (done) {
        groundService.fetchById(1001)
            .then(response => {
                ground = response.data
                expect(ground.groundId).toBe(1001);
                expect(ground.groundName).toBe("Ground_updated");
                expect(ground).toBe(ground)
                done();
            });
    });



    it("should fetch all grounds", done => {
        groundService.fetchAllGrounds()
            .then(
                response => {
                    grounds = response.data;
                    // expect(response.data.length).toBe(7);
                    expect(response.data[0].groundId).toBe(1001);
                    expect(response.data).toBeInstanceOf(Array);
                    done();
                }
            );
    });


    it("should post a ground and get a response back", done => {
        ground = new Ground.Ground();
        // posting a ground
        ground.groundName = "Ground_Test";
        ground.capacity = 300;
        ground.address = {
            city: "city_test",
            country: "country_test",
            state: "state_test",
            pincode: 76252
        }

        groundService.addGround(ground)
            .then(response => {
                ground = response.data;

                expect(ground.groundName).toBe('Ground_Test');
                expect(ground.capacity).toBe(300)
                done();
            });

    });

    it("should update the current ground", done => {
        prevGround = ground; // storing previous ground to verify id
        ground.groundName = "Ground_test_update"

        groundService.updateGround(ground)
            .then(resp => {
                ground = resp.data;
                expect(ground.groundName).toBe("Ground_test_update");

                expect(prevGround.groundId).toBe(ground.groundId);

                done();
            });
    });

    it("should delete a ground", done => {
        prevGround = ground;
        groundService.deleteGround(ground.groundId)
            .then(resp => {
                ground = resp.data;

                expect(prevGround).toEqual(ground);

                expectAsync(groundService.fetchAllGrounds().then(resp => {
                    return resp.data
                })).toBeResolvedTo(grounds.filter(g => g.groundId !== ground.groundId));

                done();
            })
    })



});