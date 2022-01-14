let MotionDeviceCategoryEnumeration = Object.freeze({
    OTHER : 0,                  //Any motion-device which is not defined by the MotionDeviceCategoryEnumeration.
    ARTICULATED_ROBOT : 1,      //This robot design features rotary joints and can range from simple two joint structures to 10 or more joints. The arm is connected to the base with a twisting joint. The links in the arm are connected by rotary joints.
    SCARA_ROBOT : 2,            //Robot has two parallel rotary joints to provide compliance in a selected plane.
    CARTESIAN_ROBOT : 3,        //Cartesian robots have three linear joints that use the Cartesian coordinate system (X, Y, and Z). They also may have an attached wrist to allow for rotational movement. The three prismatic joints deliver a linear motion along the axis.
    SPHERICAL_ROBOT : 4,        //The arm is connected to the base with a twisting joint and a combination of two rotary joints and one linear joint. The axes form a polar coordinate system and create a spherical-shaped work envelope.
    PARALLEL_ROBOT : 5,         //These spider-like robots are built from jointed parallelograms connected to a common base. The parallelograms move a single end of arm tooling in a dome-shaped work area.
    CYLINDRICAL_ROBOT : 6       //The robot has at least one rotary joint at the base and at least one prismatic joint to connect the links. The rotary joint uses a rotational motion along the joint axis, while the prismatic joint moves in a line.
});

let AxisMotionProfileEnumeration = Object.freeze({
    OTHER : 0,                  //Any motion-profile which is not defined by the AxisMotionProfileEnumeration.
    ROTARY : 1,                 //Rotary motion is a rotation along a circular path with defined limits. Motion movement is not going always in the same direction. Control unit is mainly degree.
    ROTARY_ENDLESS : 2,         //Rotary motion is a rotation along a circular path with no limits. Motion movement is going endless in the same direction. Control unit is mainly degree.
    LINEAR : 3,                 //Linear motion is a one dimensional motion along a straight line with defined limits. Motion movement is not going always in the same direction. Control unit is mainly mm.
    LINEAR_ENDLESS : 4          //Linear motion is a one dimensional motion along a straight line with no limits. Motion movement is going endless in the same direction. Control unit is mainly mm.
});


let OperationalModeEnumeration = Object.freeze({
    OTHER : 0,                  //This value is used when there is no valid operational mode. Examples are:
                                //- During system-boot
                                //- The system is not calibrated (and hence can not verify cartesian position values)
                                //- There is a failure in the safety system itself
    MANUAL_REDUCED_SPEED : 1,   //"Manual reduced speed" - name according to ISO 10218-1:2011.
    MANUAL_HIGH_SPEED : 2,      //"Manual high speed" - name according to ISO 10218-1:2011.
    AUTOMATIC : 3,              //"Automatic" - name according to ISO 10218-1:2011.
    AUTOMATIC_EXTERNAL : 4      //"Automatic external" - Same as "Automatic" but with external control, e.g. by a PLC.
});

module.exports = {

    motionDevice : {
        serialNumber : "ENG-001",                                           //mandatory
        manufacturer : "Engineering Ingegneria Informatica",                //mandatory
        model : "RobotArm",                                                 //mandatory
        productCode : "MP695ENG001",                                        //mandatory
        motionDeviceCategory  : MotionDeviceCategoryEnumeration.OTHER       //mandatory
    },
    parameterSetOfMotionDevice : {
        onPath : true,
        inControl: true,
        speedOverride : 0.0                                                 //mandatory
    },

    axisX : {
        motionProfile : AxisMotionProfileEnumeration.LINEAR                 //mandatory
    },
    parameterSetOfAxisX : {
        actualPosition : 1.0,                                               //mandatory
        actualSpeed : 5.0,
        actualAcceleration: 0.5
    },

    axisY : {
        motionProfile : AxisMotionProfileEnumeration.LINEAR                 //mandatory
    },
    parameterSetOfAxisY : {
        actualPosition : 15.0,                                              //mandatory
        actualSpeed : 1.0,
        actualAcceleration: 0.5
    },

    motor : {
        serialNumber : "ENG-002",                                           //mandatory
        manufacturer : "Engineering Ingegneria Informatica",                //mandatory
        model : "Engine",                                                   //mandatory
        productCode : "MP695ENG002"                                         //mandatory
    },
    parameterSetOfMotor : {
        brakeReleased : true,
        motorTemperature : 75.0,                                            //mandatory
        effectiveLoadRate: 0
    },

    gear : {
        serialNumber : "ENG-002",                                           //mandatory
        manufacturer : "Engineering Ingegneria Informatica",                //mandatory
        model : "Engine",                                                   //mandatory
        productCode : "MP695ENG002",                                        //mandatory
        gearRatio : 1/5,                                                    //mandatory
        pitch : 1.0
    },

    emergencyStopFunction : {
        name : "emergencyStop",                                             //mandatory
        active : true                                                       //mandatory
    },

    protectiveStopFunction : {
        name : "protectiveStop",                                            //mandatory
        enabled: true,                                                      //mandatory
        active : true                                                       //mandatory
    },

    parameterSetOfSafetyState : {
        operationalMode : OperationalModeEnumeration.MANUAL_REDUCED_SPEED,  //mandatory
        emergencyStop : true,                                               //mandatory
        protectiveStop: true                                                //mandatory
    },

    controller : {
        serialNumber : "ENG-002",                                           //mandatory
        manufacturer : "Engineering Ingegneria Informatica",                //mandatory
        model : "Engine",                                                   //mandatory
        productCode : "MP695ENG002"                                         //mandatory
    },
    parameterSetOfController : {
        totalPowerOnTime : "1 hour, 2 minutes",
        startUpTime : "2020-10-19T07:36:06.713Z",                                                                  
        upsState: "alive",
        totalEnergyConsumption : 170.1,
        cabinetFanSpeed : 2000.5,
        cpuFanSpeed : 1600.0,
        inputVoltage : 250.0,
        temperature : 50.0
    },
}
