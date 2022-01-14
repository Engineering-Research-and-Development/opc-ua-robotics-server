var opcua = require("node-opcua");

module.exports = {
    AdditionalComponent: function(server, namespace, additionalComponents, sharedProperties) {
        var additionalComponent = namespace.addObject({
            componentOf: additionalComponents,
            browseName: "AdditionalComponent"
        });
        
    }
}
