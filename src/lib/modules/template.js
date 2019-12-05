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

const removeOldLicense = async () => {
  // Remove license file so we don't accidentally
  // release someone's code under MIT license
  // when that's not what they want
  await rm(`${stagingPath}template/LICENSE`);
};

const removeOldPackageJson = async () => {
  // Remove package-lock.json so they can use whichever
  // package manager they prefer
  await rm(`${stagingPath}template/package-lock.json`);
};

const generateNewLicense = async (author, licenseName) => {
  exec(
    `license ${licenseName} -o "${author}" -y ${new Date().getFullYear()} > ${stagingPath}template/LICENSE`,
    {
      stdio: "inherit"
    }
  );
};

const moveTemplateToProjectDir = async dirName => {
  await mv(`${stagingPath}template/`, `${workingDir}/${dirName}`);
};

module.exports = {
  cloneTemplateRepo,
  removeOldGitFiles,
  removeOldLicense,
  removeOldPackageJson,
  generateNewLicense,
  moveTemplateToProjectDir
};
