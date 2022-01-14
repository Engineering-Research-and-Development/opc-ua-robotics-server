var controller1 = require("./Controller1/Controller");

module.exports = {
    Controllers: function(server, namespace, motionDeviceSystem, sharedProperties) {
        var controllers = namespace.addObject({
            componentOf: motionDeviceSystem,
            browseName: "Controllers"
        });

        controller1.Controller(server, namespace, controllers, sharedProperties);
    }
}
