"use strict";

const { join } = require("path");
const yargs = require("yargs");

yargs.commandDir(join(__dirname, "lib", "commands")).help().argv;

const run = () => {};

module.exports = run;
