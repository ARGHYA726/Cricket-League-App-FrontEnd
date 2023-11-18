var OwnerService = require("../../src/service/OwnerService");
var Owner = require("../../src/models/Owner");

describe('to check Owner functions..', () => {

    var owner;
    var ownerService;
    var prevOwner;
    owner = new Owner.Owner();
    var owners = [];
    ownerService = new OwnerService.OwnerService();


    it('should return a owner with id 1', function (done) {

        ownerService.fetchOwnerById(1)

            .then(response => {

                expect(response.data.ownerId).toBe(1);

                done()

            })

    });

    it("should fetch all owners", done => {
        ownerService.fetchAllOwners()
            .then(
                response => {
                    owners = response.data;
                    expect(response.data[0].ownerId).toBe(1);
                    expect(response.data).toBeInstanceOf(Array);
                    done();
                }
            );
    });

    it("should post a owner and get a response back", done => {

        // posting a owner
        owner.ownerName = "Owner_Test";
        owner.budget = 3000000000;

        ownerService.addOwner(owner)
            .then(response => {
                owner = response.data;
                expect(owner.ownerName).toBe('Owner_Test');
                expect(owner.budget).toBe(3000000000)
                done();
            });

    });


    it("should update the current owner", done => {

        owner.ownerName = "Owner_Test_Update"
        prevOwner = owner;
        ownerService.updateOwner(owner)
            .then(resp => {
                owner = resp.data;
                expect(owner.ownerName).toBe("Owner_Test_Update");

                expect(prevOwner.ownerId).toEqual(owner.ownerId);

                done();
            });
    });

    it("should delete a owner", done => {
        prevOwner = owner;
        ownerService.deleteOwner(owner.ownerId)
            .then(resp => {
                owner = resp.data;

                expect("Owner deleted").toEqual(owner);

                expectAsync(ownerService.fetchAllOwners().then(resp => {
                    return resp.data
                })).toBeResolvedTo(owners.filter(o => o.ownerId !== o.ownerId));

                done();
            })
    })
})

