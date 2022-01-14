var opcua = require("node-opcua");

module.exports = {
    ParameterSet: function(server, namespace, motionDevice, sharedProperties) {
        var parameterSet = namespace.addObject({
            componentOf: motionDevice,
            browseName: "ParameterSet"
        });
        
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "OnPath",
            dataType: "Boolean",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Boolean, value: sharedProperties.parameterSetOfMotionDevice.onPath });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "InControl",
            dataType: "Boolean",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Boolean, value: sharedProperties.parameterSetOfMotionDevice.inControl });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "SpeedOverride",
            dataType: "Double",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Double, value: sharedProperties.parameterSetOfMotionDevice.speedOverride });
                }
            }
        });
    }
}