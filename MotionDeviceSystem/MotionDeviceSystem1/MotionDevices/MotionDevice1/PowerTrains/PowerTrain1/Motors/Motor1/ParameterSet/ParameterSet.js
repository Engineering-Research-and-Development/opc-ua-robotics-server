var opcua = require("node-opcua");

module.exports = {
    ParameterSet: function(server, namespace, motor, sharedProperties) {
        var parameterSet = namespace.addObject({
            componentOf: motor,
            browseName: "ParameterSet"
        });
        
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "BrakeReleased",
            dataType: "Boolean",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Boolean, value: sharedProperties.parameterSetOfMotor.brakeReleased });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "MotorTemperature",
            dataType: "Double",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Double, value: sharedProperties.parameterSetOfMotor.motorTemperature });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "EffectiveLoadRate",
            dataType: "UInt16",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.UInt16, value: sharedProperties.parameterSetOfMotor.effectiveLoadRate });
                }
            }
        });
    }
}