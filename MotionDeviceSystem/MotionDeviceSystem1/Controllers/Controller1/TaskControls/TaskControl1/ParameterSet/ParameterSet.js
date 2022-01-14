var opcua = require("node-opcua");

module.exports = {
    ParameterSet: function(server, namespace, controller, sharedProperties) {
        var parameterSet = namespace.addObject({
            componentOf: controller,
            browseName: "ParameterSet"
        });

        let variables = {
            taskProgramName : "TaskProgramName"
        }

        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "TaskProgramName",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: variables.taskProgramName });
                }
            }
        });
    }
}