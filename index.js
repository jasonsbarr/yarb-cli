"use strict";

const { join } = require("path");
const yargs = require("yargs");

const app = yargs
  .commandDir(join(__dirname, "src", "commands"))
  .alias("v", "version")
  .alias("h", "help")
  .usage("Usage: $0 <command> [options]")
  .usage("Use $0 <command> --help for more info about the command")
  .help();

const run = () => {
  app.argv;
};

module.exports = run;
