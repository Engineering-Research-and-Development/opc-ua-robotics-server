var motor1 = require("./Motor1/Motor");

module.exports = {
    Motors: function(server, namespace, powerTrain, sharedProperties) {
        var motors = namespace.addObject({
            componentOf: powerTrain,
            browseName: "Motors"
        });
        motor1.Motor(server, namespace, motors, sharedProperties);
    }
}
