var opcua = require("node-opcua");

module.exports = {
    ParameterSet: function(server, namespace, safetyState, sharedProperties) {
        var parameterSet = namespace.addObject({
            componentOf: safetyState,
            browseName: "ParameterSet"
        });

        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "OperationalMode",
            dataType: "Integer",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Integer, value: sharedProperties.parameterSetOfSafetyState.operationalMode });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "EmergencyStop",
            dataType: "Boolean",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Boolean, value: sharedProperties.parameterSetOfSafetyState.emergencyStop });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "ProtectiveStop",
            dataType: "Boolean",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Boolean, value: sharedProperties.parameterSetOfSafetyState.protectiveStop });
                }
            }
        });
    }
}