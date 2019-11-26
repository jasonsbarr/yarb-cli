const { join } = require("path");
const simpleGit = require("simple-git");

const templateUrl =
  "https://github.com/jasonsbarr/yet-another-react-boilerplate.git";
const stagingPath = join(__dirname, "../../../staging");
let git;

const getGit = () => {
  git = simpleGit(stagingPath);
};

const cloneTemplateRepo = () => {
  getGit();
  git.clone(templateUrl, "template", ["--progress", "--verbose"]);
};

module.exports = {
  cloneTemplateRepo
};
