const Audience = require('../../src/models/Audience');
const AudienceService = require('../../src/service/AudienceService')

describe('to check audience functions..', () => {
    let audience;
    let audienceService;

    audienceService = new AudienceService.AudienceService();


    it('should return a audience with id 1', function (done) {
        audienceService.fetchById(1)
            .then(response => {
                expect(response.data.audienceId).toBe(1);
                done()
            })
    });

    it("should post a audience and get a response back", done => {
        audience = new Audience.Audience();
        audience.audienceName = "Audience_Test";
        audience.amount = 1000;

        audienceService.addAudience(audience)
            .then(response => {
                ticket = response.data;

                expect(audience.audienceName).toBe('Audience_Test');
                expect(audience.amount).toBe(1000)
                done();
            });

    });

})