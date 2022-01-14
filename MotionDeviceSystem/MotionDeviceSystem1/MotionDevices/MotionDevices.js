var motionDevice1 = require("./MotionDevice1/MotionDevice");

module.exports = {
    MotionDevices: function(server, namespace, motionDeviceSystem, sharedProperties) {
        var motionDevices = namespace.addObject({
            componentOf: motionDeviceSystem,
            browseName: "MotionDevices"
        });
        motionDevice1.MotionDevice(server, namespace, motionDevices, sharedProperties);
    }
}
