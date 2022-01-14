module.exports = {
  stage: process.env.NODE_ENV,
  port: process.env.NODE_ENV === 'production' ? process.env.PORT : 5001,
  productName: process.env.NODE_ENV === 'production' ? process.env.PRODUCT_NAME : "RoboticsCompanion",
  resourcePath: process.env.NODE_ENV === 'production' ? process.env.RESOURCE_PATH : "/UA/RoboticsCompanion"
};
