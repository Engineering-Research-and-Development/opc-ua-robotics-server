var opcua = require("node-opcua");

var parameterSet = require("./ParameterSet/ParameterSet")

module.exports = {
    TaskControl: function(server, namespace, taskControls, sharedProperties) {
        var taskControl = namespace.addObject({
            componentOf: taskControls,
            browseName: "TaskControl"
        });

        namespace.addVariable({
            componentOf: taskControl,
            browseName: "ComponentName",
            dataType: "LocalizedText",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.LocalizedText, value: sharedProperties.componentName });
                }
            }
        });

        parameterSet.ParameterSet(server, namespace, taskControl, sharedProperties);

    }
}