const { join } = require("path");
const simpleGit = require("simple-git");
const { mv } = require("shelljs");

const templateUrl =
  "https://github.com/jasonsbarr/yet-another-react-boilerplate.git";
const stagingPath = join(__dirname, "../../../staging/");
const workingDir = process.cwd();
let git;

const getGit = () => {
  git = simpleGit(stagingPath);
};

const cloneTemplateRepo = async () => {
  getGit();
  return await git.clone(templateUrl, "template");
};

const moveTemplateToProjectDir = async dirName => {
  await mv(`${stagingPath}template/`, `${workingDir}/${dirName}/`);
};

module.exports = {
  cloneTemplateRepo,
  moveTemplateToProjectDir
};
