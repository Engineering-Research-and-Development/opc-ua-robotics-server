var powerTrain1 = require("./PowerTrain1/PowerTrain")

module.exports = {
    PowerTrains: function(server, namespace, motionDevice, sharedProperties) {
        var powerTrains = namespace.addObject({
            componentOf: motionDevice,
            browseName: "PowerTrains"
        });
        
        powerTrain1.PowerTrain(server, namespace, powerTrains, sharedProperties);
    }
}
