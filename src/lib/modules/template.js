const { join } = require("path");
const { exec, mv } = require("shelljs");

const templateUrl =
  "https://github.com/jasonsbarr/yet-another-react-boilerplate.git";
const stagingPath = join(__dirname, "../../../staging/");
const workingDir = process.cwd();

const cloneTemplateRepo = async () => {
  return await exec(
    `git clone ${templateUrl} ${stagingPath}template -v`
  ).stdout;
};

const moveTemplateToProjectDir = async dirName => {
  await mv(`${stagingPath}template/`, `${workingDir}/${dirName}/`);
};

module.exports = {
  cloneTemplateRepo,
  moveTemplateToProjectDir
};
