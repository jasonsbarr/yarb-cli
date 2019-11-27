"use strict";
const { join } = require("path");
const figlet = require("figlet");
const { rm } = require("shelljs");
const init = require("../lib/scripts/init");
const { log, info, danger } = require("../lib/utils/color-logs");

const command = "create <directory>";
const describe = "Creates new YARB project in <directory>";
const builder = {
  name: {
    alias: "n",
    describe: "Optional project name (defaults to directory name)"
  },

  initial: {
    describe: "Optional initial version (defaults to 1.0.0)"
  },

  description: {
    alias: "d",
    describe:
      "Optional project description (defaults to 'New React project')"
  },

  author: {
    alias: "a",
    describe: "Optional author name (defaults to '')"
  },

  license: {
    alias: "l",
    describe: "Optional license for project"
  },

  repo: {
    alias: "r",
    describe:
      "Optional Git repo URL - will push project to this repo on creation"
  },

  noprecommit: {
    describe:
      "Don't use the pre-commit hook for linting, formatting, and testing"
  },

  yarn: {
    describe: "Use Yarn package manager instead of NPM"
  }
};

const handler = argv => {
  info("Creating new YARB project...");
  setTimeout(
    () =>
      init(argv)
        .then(msg => {
          log(figlet.textSync(msg));
        })
        .catch(err => danger(err))
        .finally(() => {
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
