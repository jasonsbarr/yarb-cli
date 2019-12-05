const inquirer = require("inquirer");
const chalk = require("chalk");
const validateUrl = require("../utils/validate_url");

const prompt = async ({ directory }) => {
  const questions = [
    {
      type: "input",
      name: "name",
      message:
        "Project name (must contain ONLY lowercase letters, dashes, and underscores):",
      default: directory
    },
    {
      type: "input",
      name: "initial",
      message: "Initial version:",
      default: "v1.0.0"
    },
    {
      type: "input",
      name: "description",
      message: "Project description:",
      default: "New React project"
    },
    {
      type: "input",
      name: "author",
      message: "Project author (required):",
      validate: value => {
        return value.length >= 2 || "Please enter a name";
      }
    },
    {
      type: "input",
      name: "license",
      message:
        "License (optional, must be valid SPDX identifier, e.g. MIT):"
    },
    {
      type: "input",
      name: "repo",
      message: "Git repository URL (optional, http version only):",
      validate: value =>
        value.length === 0 ||
        validateUrl(value) ||
        "Please provide a valid url"
    },
    {
      type: "confirm",
      name: "precommit",
      message: `Use the pre-commit hook to lint, format, and run tests? ${chalk.bold.bgCyan(
        "HIGHLY recommended"
      )} (defaults to Yes)`,
      default: true
    },
    {
      type: "list",
      name: "pm_yarn",
      message: "Which package manager will you be using?",
      choices: ["NPM", "Yarn"],
      filter: input => input === "Yarn"
    },
    {
      type: "list",
      name: "private",
      message:
        "Will you be publishing this project on NPM? (Defaults to No)",
      choices: ["No", "Yes"],
      filter: input => input === "No"
    }
  ];

  return await inquirer.prompt(questions);
};

module.exports = prompt;
