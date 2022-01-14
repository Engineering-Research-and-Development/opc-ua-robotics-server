var gear1 = require("./Gear1/Gear");

module.exports = {
    Gears: function(server, namespace, powerTrain, sharedProperties) {
        var gears = namespace.addObject({
            componentOf: powerTrain,
            browseName: "Gears"
        });
        gear1.Gear(server, namespace, gears, sharedProperties);
    }
}
