const DKYCVerification = artifacts.require("DKYCVerification");

module.exports = function (deployer) {
  deployer.deploy(DKYCVerification);
};