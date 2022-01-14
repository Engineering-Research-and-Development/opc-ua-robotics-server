var opcua = require("node-opcua");
var motionDeviceSystem = require("./MotionDeviceSystem/MotionDeviceSystem1/MotionDeviceSystem");

const config = require('./config');

// Let's create an instance of OPCUAServer

// 2.0 resourcePath must start with '/'
var server = new opcua.OPCUAServer({
    port: parseInt(config.port), // the port of the listening socket of the server
    resourcePath: config.resourcePath, // this path will be added to the endpoint resource name
    buildInfo : {
		productName: config.productName,
        buildNumber: "20201009",
        buildDate: new Date(2020,10,09)
    },
  	serverCertificateManager: new opcua.OPCUACertificateManager({
  		automaticallyAcceptUnknownCertificate: true,
  		rootFolder: "node_modules/node-opcua-server-discovery/certificates"
  	})
});

function post_initialize() {
    console.log("initialized");

    motionDeviceSystem.construct_my_address_space(server);

    server.start(function() {
        console.log("Server is now listening ... ( press CTRL+C to stop)");
        console.log("port ", server.endpoints[0].port);
        var endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
        console.log(" the primary server endpoint url is ", endpointUrl );
    });

}
server.initialize(post_initialize);
