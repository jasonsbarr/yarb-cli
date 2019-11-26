"use strict";

const { join } = require("path");
const yargs = require("yargs");

const app = yargs
  .commandDir(join(__dirname, "src", "commands"))
  .help();

const run = () => {
  app.argv;
};

module.exports = run;
