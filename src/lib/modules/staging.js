const { join } = require("path");
const { mkdir, rm } = require("shelljs");
const rootPath = join(__dirname, "../../../");

const createStagingDir = async () => {
  return await mkdir(`${rootPath}staging`);
};

const rmStagingDir = async () => {
  return await rm("-rf", `${rootPath}staging`);
};

module.exports = {
  createStagingDir,
  rmStagingDir
};
