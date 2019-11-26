"use strict";
const { join } = require("path");
const figlet = require("figlet");
const clear = require("clear");
const ora = require("ora");
const { rm } = require("shelljs");
const {
  log,
  info,
  notice,
  danger
} = require("../lib/utils/color-logs");
const { createStagingDir } = require("../lib/modules/staging");
const {
  cloneTemplateRepo,
  moveTemplateToProjectDir
} = require("../lib/modules/template");

const command = "create <directory>";
const describe = "Creates new YARB project in <directory>";
const builder = {
  name: {
    alias: "n",
    describe: "Optional project name (defaults to directory name)"
  },

  initial: {
    describe: "Optional initial version (defaults to 1.0.0)"
  }
};

const spinner = ora();

const handleCreateStagingDir = async () => {
  spinner.start();

  try {
    await createStagingDir();
  } catch (err) {
    danger(err);
    // throw err;
  } finally {
    spinner.stop();
  }

  return await null;
};

const handleCloneTemplateRepo = async () => {
  spinner.start();

  try {
    await cloneTemplateRepo();
  } catch (err) {
    danger(err);
    // throw err;
  } finally {
    spinner.stop();
  }

  return await null;
};

const handleMoveTemplateToProjectDir = async dir => {
  spinner.start();

  try {
    await moveTemplateToProjectDir(dir);
  } catch (err) {
    danger(err);
    // throw err;
  } finally {
    spinner.stop;
  }

  return await null;
};

const exec = async argv => {
  const projName = argv.name || argv.directory;
  const initVersion = argv.initial || "1.0.0";

  clear();
  notice(figlet.textSync("YARB-CLI"));
  log(
    `Creating ${projName} with initial version ${initVersion} in ${argv.directory}...`
  );

  info("Creating temp directory for staging...");
  await handleCreateStagingDir();

  info("Getting template repository...");
  await handleCloneTemplateRepo();

  info("Copying template into project directory...");
  await handleMoveTemplateToProjectDir(argv.directory);
};

const handler = argv => {
  info("Creating new YARB project...");
  setTimeout(
    () =>
      exec(argv)
        .then(() => {
          log(figlet.textSync("Project created!"));
        })
        .catch(err => danger(err))
        .finally(() => {
          spinner.stop();
          rm("-rf", join(__dirname, "../../staging/"));
        }),
    1000
  );
};

module.exports = {
  command,
  describe,
  builder,
  handler
};
