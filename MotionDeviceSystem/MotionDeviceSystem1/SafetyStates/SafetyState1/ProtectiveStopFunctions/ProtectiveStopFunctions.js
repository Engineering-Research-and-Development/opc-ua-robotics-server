var protectiveStopFunction1 = require("./ProtectiveStopFunction1/ProtectiveStopFunction")

module.exports = {
    ProtectiveStopFunctions: function(server, namespace, safetyState, sharedProperties) {
        var protectiveStopFunctions = namespace.addObject({
            componentOf: safetyState,
            browseName: "ProtectiveStopFunctions"
        });
        
        protectiveStopFunction1.ProtectiveStopFunction(server, namespace, protectiveStopFunctions, sharedProperties);
    }
}
