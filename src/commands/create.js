"use strict";
const figlet = require("figlet");
const clear = require("clear");
const ora = require("ora");
const {
  log,
  info,
  notice,
  danger
} = require("../lib/utils/color-logs");
const { createStagingDir } = require("../lib/modules/staging");
const { cloneTemplateRepo } = require("../lib/modules/template");

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

const exec = async argv => {
  const projName = argv.name || argv.directory;
  const initVersion = argv.initial || "1.0.0";

  clear();
  notice(figlet.textSync("YARB-CLI"));
  log(
    `Creating ${projName} with initial version ${initVersion} in ${argv.directory}...`
  );

  const spinner = ora();

  try {
    await createStagingDir();
  } catch (err) {
    danger(err);
    throw err;
  } finally {
    spinner.stop();
  }

  log("Getting template repository...");

  spinner.start();

  try {
    await cloneTemplateRepo();
  } catch (err) {
    danger(err);
    throw err;
  } finally {
    spinner.stop();
  }
};

const handler = argv => {
  info("Creating new YARB project...");
  setTimeout(
    () =>
      exec(argv)
        .then(() => {
          info(figlet.textSync("Project created!"));
        })
        .catch(err => console.error(err)),
    1000
  );
};

module.exports = {
  command,
  describe,
  builder,
  handler
};
