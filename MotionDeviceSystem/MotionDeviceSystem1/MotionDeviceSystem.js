var opcua = require("node-opcua");
var motionDevices = require("./MotionDevices/MotionDevices.js");
var controllers = require("./Controllers/Controllers");
var safetyStates = require("./SafetyStates/SafetyStates");
var sharedProperties = require("../../config/specifications.js")

module.exports ={
  construct_my_address_space: function (server) {

    var addressSpace = server.engine.addressSpace;
    var unusedNamespace = addressSpace.registerNamespace("unusedNamespace"); // index 2
    var namespace = addressSpace.registerNamespace("UACompanionSpecificagtion"); // index 3

    // console.log("--- NAMESPACE INFO ---");
    // console.log(namespace);    

    var motionDeviceSystem = namespace.addObject({
      organizedBy: addressSpace.rootFolder.objects,
      browseName: "MotionDeviceSystem"
    });

    motionDevices.MotionDevices(server, namespace, motionDeviceSystem, sharedProperties);
    controllers.Controllers(server, namespace, motionDeviceSystem, sharedProperties);
    safetyStates.SafetyStates(server, namespace , motionDeviceSystem, sharedProperties);
  }
}
