var opcua = require("node-opcua");

var components = require("./Components/Components");
var parameterSet = require("./ParameterSet/ParameterSet");
var software = require("./Software/Software");
var taskControls = require("./TaskControls/TaskControls");

module.exports = {
    Controller: function(server, namespace, controllers, sharedProperties) {
        var controller = namespace.addObject({
            componentOf: controllers,
            browseName: "Controller"
        });

        namespace.addVariable({
            componentOf: controller,
            browseName: "SerialNumber",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.controller.serialNumber });
                }
            }
        });
        namespace.addVariable({
            componentOf: controller,
            browseName: "Manufacturer",
            dataType: "LocalizedText",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.LocalizedText, value: sharedProperties.controller.manufacturer });
                }
            }
        });
        namespace.addVariable({
            componentOf: controller,
            browseName: "Model",
            dataType: "LocalizedText",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.LocalizedText, value: sharedProperties.controller.model });
                }
            }
        });
        namespace.addVariable({
            componentOf: controller,
            browseName: "ProductCode",
            dataType: "String",
            value: {
                get: function () {
                    return new opcua.Variant({dataType: opcua.DataType.String, value: sharedProperties.controller.productCode });
                }
            }
        });

        components.Components(server, namespace, controller, sharedProperties);
        parameterSet.ParameterSet(server, namespace, controller, sharedProperties);
        software.Software(server, namespace, controller, sharedProperties);
        taskControls.TaskControls(server, namespace, controller, sharedProperties);
    }
}
