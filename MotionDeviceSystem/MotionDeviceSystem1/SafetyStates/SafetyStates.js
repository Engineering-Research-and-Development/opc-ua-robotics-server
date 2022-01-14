var safetyState1 = require("./SafetyState1/SafetyState");

module.exports = {
    SafetyStates: function(server, namespace, motionDeviceSystem, sharedProperties) {
        var safetyStates = namespace.addObject({
            componentOf: motionDeviceSystem,
            browseName: "SafetyStates"
        });

        safetyState1.SafetyState(server, namespace, safetyStates, sharedProperties);
    }
}
