var emergencyStopFunction1 = require("./EmergencyStopFunction1/EmergencyStopFunction")

module.exports = {
    EmergencyStopFunctions: function(server, namespace, safetyState, sharedProperties) {
        var emergencyStopFunctions = namespace.addObject({
            componentOf: safetyState,
            browseName: "EmergencyStopFunctions"
        });
        
        emergencyStopFunction1.EmergencyStopFunction(server, namespace, emergencyStopFunctions, sharedProperties);
    }
}
