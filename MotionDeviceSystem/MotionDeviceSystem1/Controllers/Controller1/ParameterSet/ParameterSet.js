var opcua = require("node-opcua");

module.exports = {
    ParameterSet: function(server, namespace, controller, sharedProperties) {
        var parameterSet = namespace.addObject({
            componentOf: controller,
            browseName: "ParameterSet"
        });

        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "TotalPowerOnTime",
            dataType: "DurationString",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.DurationString, value: sharedProperties.parameterSetOfController.totalPowerOnTime });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "StartUpTime",
            dataType: "DateTime",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.parameterSetOfController.startUpTime });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "UpsState",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.parameterSetOfController.upsState });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "TotalEnergyConsumption",
            dataType: "Double",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Double, value: sharedProperties.parameterSetOfController.totalEnergyConsumption });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "CabinetFanSpeed",
            dataType: "Double",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Double, value: sharedProperties.parameterSetOfController.cabinetFanSpeed });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "CPUFanSpeed",
            dataType: "Double",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Double, value: sharedProperties.parameterSetOfController.cpuFanSpeed });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "InputVoltage",
            dataType: "Double",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Double, value: sharedProperties.parameterSetOfController.inputVoltage });
                }
            }
        });
        namespace.addVariable({
            componentOf: parameterSet,
            browseName: "Temperature",
            dataType: "Double",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Double, value: sharedProperties.parameterSetOfController.temperature });
                }
            }
        });
    }
}