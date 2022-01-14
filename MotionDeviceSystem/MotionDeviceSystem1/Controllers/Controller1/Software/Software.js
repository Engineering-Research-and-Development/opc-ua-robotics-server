var software1 = require("./Software1/Software");

module.exports = {
    Software: function(server, namespace, controller, sharedProperties) {
        var software = namespace.addObject({
            softwareOf: controller,
            browseName: "Software"
        });

        software1.Software(server, namespace, software, sharedProperties);
    }
}