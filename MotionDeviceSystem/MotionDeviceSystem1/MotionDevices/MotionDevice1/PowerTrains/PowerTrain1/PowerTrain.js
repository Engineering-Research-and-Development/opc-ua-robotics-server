var opcua = require("node-opcua");
var gears = require("./Gears/Gears")
var motors = require("./Motors/Motors")

module.exports = {
    PowerTrain: function(server, namespace, powerTrains, sharedProperties) {
        var powerTrain = namespace.addObject({
            componentOf: powerTrains,
            browseName: "PowerTrain"
        });
        gears.Gears(server, namespace, powerTrain, sharedProperties);
        motors.Motors(server, namespace, powerTrain, sharedProperties);
    }
}
