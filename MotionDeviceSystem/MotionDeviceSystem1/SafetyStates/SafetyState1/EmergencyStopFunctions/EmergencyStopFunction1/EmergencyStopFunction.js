var opcua = require("node-opcua");

module.exports = {
    EmergencyStopFunction: function(server, namespace, emergencyStopFunctions, sharedProperties) {
        var emergencyStopFunction = namespace.addObject({
            componentOf: emergencyStopFunctions,
            browseName: "EmergencyStopFunction"
        });

        namespace.addVariable({
            componentOf: emergencyStopFunction,
            browseName: "Name",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.emergencyStopFunction.name });
                }
            }
        });
        namespace.addVariable({
            componentOf: emergencyStopFunction,
            browseName: "Active",
            dataType: "Boolean",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.StBooleanring, value: sharedProperties.emergencyStopFunction.active });
                }
            }
        });
    }
}
