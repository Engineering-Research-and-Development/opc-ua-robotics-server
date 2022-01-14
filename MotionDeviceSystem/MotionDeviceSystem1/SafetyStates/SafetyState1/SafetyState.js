var opcua = require("node-opcua");

var parameterSet = require("./ParameterSet/ParameterSet")
var emergencyStopFunctions = require("./EmergencyStopFunctions/EmergencyStopFunctions")
var protectiveStopFunctions = require("./ProtectiveStopFunctions/ProtectiveStopFunctions")


module.exports = {
    SafetyState: function(server, namespace, safetyStates, sharedProperties) {
        var safetyState = namespace.addObject({
            componentOf: safetyStates,
            browseName: "SafetyState"
        });
        
        namespace.addVariable({
            componentOf: safetyState,
            browseName: "ComponentName",
            dataType: "LocalizedText",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.LocalizedText, value: sharedProperties.componentName });
                }
            }
        });

        parameterSet.ParameterSet(server, namespace, safetyState, sharedProperties);
        emergencyStopFunctions.EmergencyStopFunctions(server, namespace, safetyState, sharedProperties);
        protectiveStopFunctions.ProtectiveStopFunctions(server, namespace, safetyState, sharedProperties);

    }
}
