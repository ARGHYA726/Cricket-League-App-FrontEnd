const Address = require("./Address")

class Ground {
    groundId = 0;
    groundName = "";
    capacity = 0
    address = new Address.Address();
}

module.exports={
    Ground
}