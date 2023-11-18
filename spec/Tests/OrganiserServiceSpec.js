var OrganiserService = require('../../src/service/OrganiserService');
var Organiser = require('../../src/models/organiser');

describe("Testing the Organiser functionalities", function () {

    var organiserService;
    var organiser;
    var prevOrganiser;
    organiser = new Organiser.organiser();
    var organisers = [];

    beforeEach(function () {
        organiserService = new OrganiserService.OrganiserService();
    });


    it("should return an organiser with id 1", function (done) {
        organiserService.fetchOrgById(1)
            .then(response => {
                organiser = response.data
                expect(organiser.organiserId).toBe(1);
                done();
            });
    });



    it("should fetch all organisers", done => {
        organiserService.fetchAllOrganisers()
            .then(
                response => {
                    organisers = response.data;
                    expect(response.data).toBeInstanceOf(Array);
                    done();
                }
            );
    });


    xit("should post an organiser and get a response back", done => {
        organiser = new Organiser.organiser();
        organiser.organiserName = "organiserTest";
        organiser.email = "abcde@gmail.com";
        organiser.phone = 9051926239;
        organiser.payment = 5000;
        organiser.budget = 40000;

        organiserService.addOrganiser(organiser)
            .then(response => {
                organiser = response.data;

                expect(organiser.organiserName).toBe('organiserTest');
                done();
            });

    });

    xit("should update the current organiser", done => {
        prevOrganiser = organiser; // storing previous ground to verify id
        organiser.organiserName = "OrganiserTestUpdate"

        organiserService.updateOrganiser(organiser)
            .then(response => {
                organiser = response.data;
                expect(organiser.organiserName).toBe("OrganiserTestUpdate");

                expect(prevOrganiser.organiserId).toBe(organiser.organiserId);

                done();
            });
    });

});