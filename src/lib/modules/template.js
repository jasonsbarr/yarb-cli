const { join } = require("path");
const simpleGit = require("simple-git");
const { cp, mkdir } = require("shelljs");

const templateUrl =
  "https://github.com/jasonsbarr/yet-another-react-boilerplate.git";
const stagingPath = join(__dirname, "../../../staging/");
const workingDir = process.cwd();
let git;

const getGit = () => {
  git = simpleGit(stagingPath);
};

const cloneTemplateRepo = () => {
  getGit();
  git.clone(templateUrl, "template", ["--progress", "--verbose"]);
};

const copyTemplateToProjectDir = async dirName => {
  await mkdir("-p", `${workingDir}${dirName}`);
  cp("-R", `${stagingPath}template/*`, `${workingDir}${dirName}`);
};

module.exports = {
  cloneTemplateRepo,
  copyTemplateToProjectDir
};
