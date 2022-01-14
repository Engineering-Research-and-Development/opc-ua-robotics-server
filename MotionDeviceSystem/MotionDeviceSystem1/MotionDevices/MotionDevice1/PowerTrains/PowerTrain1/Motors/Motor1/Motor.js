var opcua = require("node-opcua");

var parameterSet = require("./ParameterSet/ParameterSet");

module.exports = {
    Motor: function(server, namespace, motors, sharedProperties) {
        var motor = namespace.addObject({
            componentOf: motors,
            browseName: "Motor"
        });

        namespace.addVariable({
            componentOf: motor,
            browseName: "SerialNumber",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.motor.serialNumber });
                }
            }
        });
        namespace.addVariable({
            componentOf: motor,
            browseName: "Manufacturer",
            dataType: "LocalizedText",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.LocalizedText, value: sharedProperties.motor.manufacturer });
                }
            }
        });
        namespace.addVariable({
            componentOf: motor,
            browseName: "Model",
            dataType: "LocalizedText",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.LocalizedText, value: sharedProperties.motor.model });
                }
            }
        });
        namespace.addVariable({
            componentOf: motor,
            browseName: "ProductCode",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.motor.productCode });
                }
            }
        });
        namespace.addVariable({
            componentOf: motor,
            browseName: "MotorCategory",
            dataType: "Integer",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Integer, value: sharedProperties.motor.motorCategory });
                }
            }
        });

        parameterSet.ParameterSet(server, namespace, motor, sharedProperties);

    }
}
