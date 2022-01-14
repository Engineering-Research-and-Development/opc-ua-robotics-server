var opcua = require("node-opcua");

module.exports = {
    Gear: function(server, namespace, gears, sharedProperties) {
        var gear = namespace.addObject({
            componentOf: gears,
            browseName: "Gear"
        });

        namespace.addVariable({
            componentOf: gear,
            browseName: "SerialNumber",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.gear.serialNumber });
                }
            }
        });
        namespace.addVariable({
            componentOf: gear,
            browseName: "Manufacturer",
            dataType: "LocalizedText",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.LocalizedText, value: sharedProperties.gear.manufacturer });
                }
            }
        });
        namespace.addVariable({
            componentOf: gear,
            browseName: "Model",
            dataType: "LocalizedText",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.LocalizedText, value: sharedProperties.gear.model });
                }
            }
        });
        namespace.addVariable({
            componentOf: gear,
            browseName: "ProductCode",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.gear.productCode });
                }
            }
        });
        namespace.addVariable({
            componentOf: gear,
            browseName: "GearRatio",
            dataType: "RationalNumber",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.RationalNumber, value: sharedProperties.gear.gearRatio });
                }
            }
        });
        namespace.addVariable({
            componentOf: gear,
            browseName: "Pitch",
            dataType: "Double",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.Double, value: sharedProperties.gear.pitch });
                }
            }
        });

    }
}
