"use strict";
const { join } = require("path");
const { rm } = require("shelljs");
const init = require("../lib/scripts/init");
const { info, danger } = require("../lib/utils/color-logs");

const command = "create <directory>";
const describe =
  "Creates new YARB project in <directory>\nRunning this command without options launches an interactive prompt.";
const builder = {
  name: {
    alias: "n",
    describe:
      "Optional project name (defaults to directory name)\nMust be all lowercase letters with words separated by dashes or underscores (no spaces)"
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
    describe:
      "Optional project author name (must be in quotation marks)"
  },

  license: {
    alias: "l",
    describe:
      "Optional license for project (must be a valid SPDX license identifier, e.g. MIT)"
  },

  repo: {
    alias: "r",
    describe:
      "Optional Git repo URL (script will push project to this repo when finished)"
  },

  noprecommit: {
    describe:
      "Don't use the pre-commit hook for linting, formatting, and testing (We VERY HIGHLY recommend you use it)",
    boolean: true
  },

  yarn: {
    describe: "Use Yarn package manager instead of NPM",
    boolean: true
  },

  private: {
    alias: "p",
    describe:
      "Make project private to prevent accidental publishing to NPM",
    boolean: true
  }
};

const handler = argv => {
  info("Initializing new YARB project...");
  setTimeout(
    () =>
      init(argv)
        .then(msg => console.log(msg))
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
