var axisX = require("./AxisX/Axis")
var axisY = require("./AxisY/Axis")

module.exports = {
    Axes: function(server, namespace, motionDevice, sharedProperties) {
        var axes = namespace.addObject({
            componentOf: motionDevice,
            browseName: "Axes"
        });
        
        axisX.Axis(server, namespace, axes, sharedProperties);
        axisY.Axis(server, namespace, axes, sharedProperties);
    }
}
