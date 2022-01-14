var opcua = require("node-opcua");

module.exports = {
    ParameterSet: function(server, namespace, axis, sharedProperties) {
        var parameterSet = namespace.addObject({
            componentOf: axis,
            browseName: "ParameterSet"
        });

        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "ActualPosition",
            dataType: "Double",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Double, value: sharedProperties.parameterSetOfAxisX.actualPosition });
                }
            }
        });

        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "ActualSpeed",
            dataType: "Double",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Double, value: sharedProperties.parameterSetOfAxisX.actualSpeed });
                }
            }
        });

        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "ActualAcceleration",
            dataType: "Double",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Double, value: sharedProperties.parameterSetOfAxisX.actualAcceleration });
                }
            }
        });
    }
}