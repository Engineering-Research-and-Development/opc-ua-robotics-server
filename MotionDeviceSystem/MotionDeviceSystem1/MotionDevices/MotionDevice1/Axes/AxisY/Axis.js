var opcua = require("node-opcua");

var parameterSet = require("./ParameterSet/ParameterSet");

module.exports = {
    Axis: function(server, namespace, axes, sharedProperties) {
        var axis = namespace.addObject({
            componentOf: axes,
            browseName: "AxisY"
        });
        
        namespace.addVariable({
            componentOf: axis,
            browseName: "MotionProfile",
            dataType: "Integer",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Integer, value: sharedProperties.motionDevice.motionProfile });
                }
            }
        });

        parameterSet.ParameterSet(server, namespace, axis, sharedProperties);

    }
}
