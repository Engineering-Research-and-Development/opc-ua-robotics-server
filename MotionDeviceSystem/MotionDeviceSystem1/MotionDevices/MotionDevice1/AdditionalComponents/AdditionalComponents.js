var additionalComponent1 = require("./AdditionalComponent1/AdditionalComponent")

module.exports = {
    AdditionalComponents: function(server, namespace, motionDevice, sharedProperties) {
        var additionalComponents = namespace.addObject({
            componentOf: motionDevice,
            browseName: "AdditionalComponents"
        });
        
        additionalComponent1.AdditionalComponent(server, namespace, additionalComponents, sharedProperties);
    }
}
