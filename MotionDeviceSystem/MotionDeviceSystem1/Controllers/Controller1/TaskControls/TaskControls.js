var taskControl1 = require("./TaskControl1/TaskControl");

module.exports = {
    TaskControls: function(server, namespace, controller, sharedProperties) {
        var taskControls = namespace.addObject({
            componentOf: controller,
            browseName: "TaskControls"
        });

        taskControl1.TaskControl(server, namespace, taskControls, sharedProperties);
    }
}