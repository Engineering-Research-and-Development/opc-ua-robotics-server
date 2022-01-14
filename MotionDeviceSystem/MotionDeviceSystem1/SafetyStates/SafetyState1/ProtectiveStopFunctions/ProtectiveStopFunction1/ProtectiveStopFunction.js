var opcua = require("node-opcua");

module.exports = {
    ProtectiveStopFunction: function(server, namespace, protectiveStopFunctions, sharedProperties) {
        var protectiveStopFunction = namespace.addObject({
            componentOf: protectiveStopFunctions,
            browseName: "ProtectiveStopFunction"
        });
        
        namespace.addVariable({
            componentOf: protectiveStopFunction,
            browseName: "Name",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.protectiveStopFunction.name });
                }
            }
        });
        namespace.addVariable({
            componentOf: protectiveStopFunction,
            browseName: "Enabled",
            dataType: "Boolean",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.StBooleanring, value: sharedProperties.protectiveStopFunction.enabled });
                }
            }
        });
        namespace.addVariable({
            componentOf: protectiveStopFunction,
            browseName: "Active",
            dataType: "Boolean",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.StBooleanring, value: sharedProperties.protectiveStopFunction.active });
                }
            }
        });
    }
}
