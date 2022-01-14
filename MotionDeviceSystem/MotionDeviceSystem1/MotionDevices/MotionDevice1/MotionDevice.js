var opcua = require("node-opcua");

var parameterSet = require("./ParameterSet/ParameterSet");
var axes = require("./Axes/Axes");
var powerTrains = require("./PowerTrains/PowerTrains");
var additionalComponents = require("./AdditionalComponents/AdditionalComponents");

module.exports = {
    MotionDevice: function(server, namespace, motionDevices, sharedProperties) {
        var motionDevice = namespace.addObject({
            componentOf: motionDevices,
            browseName: "MotionDevice"
        });

        namespace.addVariable({
            componentOf: motionDevice,
            browseName: "SerialNumber",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.motionDevice.serialNumber });
                }
            }
        });
        namespace.addVariable({
            componentOf: motionDevice,
            browseName: "Manufacturer",
            dataType: "LocalizedText",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.LocalizedText, value: sharedProperties.motionDevice.manufacturer });
                }
            }
        });
        namespace.addVariable({
            componentOf: motionDevice,
            browseName: "Model",
            dataType: "LocalizedText",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.LocalizedText, value: sharedProperties.motionDevice.model });
                }
            }
        });
        namespace.addVariable({
            componentOf: motionDevice,
            browseName: "ProductCode",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.motionDevice.productCode });
                }
            }
        });
        namespace.addVariable({
            componentOf: motionDevice,
            browseName: "MotionDeviceCategory",
            dataType: "Integer",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Integer, value: sharedProperties.motionDevice.motionDeviceCategory });
                }
            }
        });

        
        parameterSet.ParameterSet(server, namespace, motionDevice, sharedProperties);
        axes.Axes(server, namespace, motionDevice, sharedProperties);
        powerTrains.PowerTrains(server, namespace, motionDevice, sharedProperties);
        additionalComponents.AdditionalComponents(server, namespace, motionDevice, sharedProperties);
    }
}
