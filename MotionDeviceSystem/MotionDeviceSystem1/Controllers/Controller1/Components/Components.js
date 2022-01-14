var component1 = require("./Component1/Component");

module.exports = {
    Components: function(server, namespace, controller, sharedProperties) {
        var components = namespace.addObject({
            componentOf: controller,
            browseName: "Components"
        });

        component1.Component(server, namespace, components, sharedProperties);
    }
}