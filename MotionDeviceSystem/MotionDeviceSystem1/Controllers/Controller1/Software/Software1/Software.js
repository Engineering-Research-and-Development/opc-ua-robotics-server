var opcua = require("node-opcua");

module.exports = {
    Software: function(server, namespace, software, sharedProperties) {
        var software1 = namespace.addObject({
            componentOf: software,
            browseName: "Software1"
        });

        // namespace.addVariable({
        //     componentOf: motionDevice1,
        //     browseName: "ComponentName",
        //     dataType: "LocalizedText",
        //     value: {
        //         get: function () {
        //             return new opcua.Variant({dataType: opcua.DataType.LocalizedText, value: sharedProperties.componentName });
        //         }
        //     }
        // });
    }
}