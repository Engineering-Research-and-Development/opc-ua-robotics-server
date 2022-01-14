module.exports = {
    Component: function(server, namespace, motionDevices, sharedProperties) {
        var component = namespace.addObject({
            componentOf: motionDevices,
            browseName: "Component"
        });
    }
}