"use strict";
const figlet = require("figlet");
const clear = require("clear");
const { log, info, notice } = require("../lib/utils/color-logs");

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

const exec = argv => {
  clear();
  notice(figlet.textSync("YARB-CLI"));
  log(`Creating new project in ${argv.directory}...`);
};

const handler = argv => {
  info("Creating new YARB project...");
  setTimeout(() => exec(argv), 1500);
};

module.exports = {
  command,
  describe,
  builder,
  handler
};
