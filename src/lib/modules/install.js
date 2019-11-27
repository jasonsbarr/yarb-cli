const { join } = require("path");
const exec = require("child_process").execSync;
const cwd = process.cwd();
let projectPath;

const setProjectPath = projectDir => {
  projectPath = join(cwd, projectDir);
};

const initNewRepo = () => {
  exec(`cd ${projectPath} && git init`, {
    stdio: "inherit"
  });
};

const setGitRemote = url => {
  exec(`cd ${projectPath} && git remote add origin ${url}`, {
    stdio: "inherit"
  });
};

const installDeps = pm => {
  exec(`cd ${projectPath} && ${pm} install`, {
    stdio: "inherit"
  });
};

const makeInitialCommit = () => {
  exec(
    `cd ${projectPath} && git add -A && git commit -m --no-verify "Initial commit from YARB-CLI"`
  );
};

const pushToRemote = () => {
  exec(`cd ${projectPath} && git push -u --no-verify origin master`, {
    stdio: "inherit"
  });
};

module.exports = {
  setProjectPath,
  initNewRepo,
  setGitRemote,
  installDeps,
  makeInitialCommit,
  pushToRemote
};
