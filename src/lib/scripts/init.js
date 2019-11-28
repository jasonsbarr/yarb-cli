const clear = require("clear");
const figlet = require("figlet");
// const ora = require("ora");
const { createStagingDir } = require("../../lib/modules/staging");
const {
  cloneTemplateRepo,
  moveTemplateToProjectDir,
  removeOldGitFiles
} = require("../../lib/modules/template");
const {
  setProjectPath,
  initNewRepo,
  setGitRemote,
  installDeps,
  makeInitialCommit,
  pushToRemote
} = require("../../lib/modules/install");
const {
  log,
  info,
  notice,
  danger
} = require("../../lib/utils/color-logs");

const handleCreateStagingDir = async () => {
  // spinner.start();

  try {
    await createStagingDir();
  } catch (err) {
    danger(err);
    // throw err;
  } finally {
    // spinner.stop();
  }

  return await null;
};

const handleCloneTemplateRepo = async () => {
  // spinner.start();

  try {
    await cloneTemplateRepo();
  } catch (err) {
    danger(err);
    // throw err;
  } finally {
    // spinner.stop();
  }

  return await null;
};

const handleMoveTemplateToProjectDir = async dir => {
  // spinner.start();

  try {
    await moveTemplateToProjectDir(dir);
  } catch (err) {
    danger(err);
    // throw err;
  } finally {
    // spinner.stop;
  }

  return await null;
};

module.exports = async ({
  directory,
  name,
  initial,
  description,
  author,
  license,
  repo,
  noprecommit,
  yarn
}) => {
  const projName = name || directory;
  const initVersion = initial || "1.0.0";
  const projDesc = description || "New React project";
  const projAuthor = author || "";
  const projLicense = license || "";
  const projRepo = repo || "";
  const preCommitHook = !noprecommit;
  const pm = yarn ? "yarn" : "npm";

  clear();
  notice(figlet.textSync("YARB-CLI"));
  log(
    `Creating ${projName} with initial version ${initVersion} in ${directory}...`
  );

  info("Creating temp directory...");
  await handleCreateStagingDir();

  info("Getting template repository...");
  await handleCloneTemplateRepo();

  removeOldGitFiles();

  const {
    setPackageProperty,
    setMainEntry,
    setDependencies,
    setBrowsersList,
    setRepo,
    setPrecommitHook,
    writePackageFile,
    setReadme
  } = require("../../lib/modules/package");

  // set project info:
  info("Applying your settings to project...");
  // - project name
  info(`Project name: ${projName}`);
  setPackageProperty("name")(projName);
  // - project version
  info(`Initial version: ${initVersion}`);
  setPackageProperty("version")(initVersion);
  // - project description
  info(`Description: ${projDesc}`);
  setPackageProperty("description")(projDesc);
  // - main entry point
  info(`Entry point: index.js`);
  setMainEntry();
  // - project author
  info(`Author: ${projAuthor}`);
  setPackageProperty("author")(projAuthor);
  // - project license?
  if (projLicense) {
    info(`License: ${projLicense}`);
    setPackageProperty("license")(projLicense);
  }
  // - project repo
  if (projRepo) {
    info(`Git remote: ${projRepo}`);
    setRepo(projRepo);
  }
  // - dependencies
  info("Setting dependencies and scripts...");
  setDependencies();
  // - browserslist
  setBrowsersList();
  // - use pre-commit hook?
  setPrecommitHook(preCommitHook);
  info("Done");
  // - write settings to package.json
  info("Writing package.json to project...");
  writePackageFile();
  info("Done");

  // - set preferred package manager
  info(`Setting package manager to ${pm}...`);
  info("Done");

  // modify README.md based on package manager
  info("Writing README.md...");
  setReadme(pm);
  info("Done");

  // move project files from staging to project directory
  info("Moving files to project directory...");
  await handleMoveTemplateToProjectDir(directory);
  info("Done");

  // Final setup steps
  // set project path
  setProjectPath(directory);
  // initialize new Git repo
  info("Initializing new Git repo...");
  initNewRepo();
  info("Done");
  // set remote, if any
  if (projRepo) {
    info(`Setting remote origin to ${projRepo}...`);
    setGitRemote(projRepo);
    info("Done");
  }

  // install dependencies with preferred package manager
  info(`Installing dependencies with ${pm}...`);
  notice("(This could take a while)");
  installDeps(pm);
  info("Done");

  // make initial commit
  info("Making initial commit to Git repo...");
  makeInitialCommit();
  info("Done");

  // push to remote, if any
  if (projRepo) {
    info(`Pushing initial commit to ${projRepo}`);
    pushToRemote();
    info("Done");
  }

  return await "Project created!";
};
