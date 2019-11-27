const { join } = require("path");
const exec = require("child_process").execSync;
const { mv, rm } = require("shelljs");

const templateUrl =
  "https://github.com/jasonsbarr/yet-another-react-boilerplate.git";
const stagingPath = join(__dirname, "../../../staging/");
const workingDir = process.cwd();

const cloneTemplateRepo = async () => {
  await exec(`git clone ${templateUrl} ${stagingPath}template -v`, {
    stdio: "inherit"
  });
};

const removeOldGitFiles = async () => {
  await rm("-rf", `${stagingPath}template/.git`);
};

const moveTemplateToProjectDir = async dirName => {
  await mv(`${stagingPath}template/`, `${workingDir}/${dirName}`);
};

module.exports = {
  cloneTemplateRepo,
  moveTemplateToProjectDir,
  removeOldGitFiles
};
