const chalk = require("chalk");

const log = text => console.log(chalk.green(text));
const info = text => console.log(chalk.blueBright(text));
const notice = text => console.log(chalk.yellow(text));
const danger = text => console.log(chalk.red(text));

module.exports = {
  log,
  info,
  notice,
  danger
};
