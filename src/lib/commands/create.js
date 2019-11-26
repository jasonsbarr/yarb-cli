"use strict";

const command = "create <directory>";
const describe = "Creates new YARB project in <directory>";
const builder = {
  name: {
    alias: "n",
    describe: "Optional project name (defaults to directory name)"
  },

  version: {
    alias: "v",
    describe: "Optional initial version (defaults to 1.0.0)"
  }
};

module.exports = {
  command,
  describe,
  builder
};
