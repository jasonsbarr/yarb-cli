const fs = require("fs");
const os = require("os");
const { join } = require("path");

const templatePath = join(__dirname, "../../../staging/template/");
const templatePackageJson = require(join(
  templatePath,
  "package.json"
));
const appPackageJson = {};

const setPackageProperty = property => value =>
  Object.assign(appPackageJson, { [property]: value });

const setMainEntry = () => {
  setPackageProperty("main")("index.js");
};

const setRepo = url => {
  setPackageProperty("repository")({
    type: "git",
    url
  });
};

const setDependencies = () => {
  setPackageProperty("dependencies")(
    templatePackageJson.dependencies
  );
  setPackageProperty("devDependencies")(
    templatePackageJson.devDependencies
  );
};

const setBrowsersList = () => {
  setPackageProperty("browserslist")(
    templatePackageJson.browserslist
  );
};

const setPrecommitHook = useHook => {
  if (useHook) {
    setPackageProperty("lint-staged")(
      templatePackageJson["lint-staged"]
    );
    setPackageProperty("husky")(templatePackageJson["husky"]);
  }
};

const writePackageFile = () => {
  fs.writeFileSync(
    join(templatePath, "package.json"),
    JSON.stringify(appPackageJson, null, 2) + os.EOL
  );
};

const setReadme = pm => {
  const readme = fs.readFileSync(
    join(templatePath, "README.md"),
    "utf8"
  );
  const readmeWithPm =
    pm === "yarn"
      ? readme.replace(/(npm run |npm )/g, "yarn ")
      : readme;
  const newReadme =
    "Project bootstrapped with [Yet Another React Boilerplate](https://github.com/jasonsbarr/yet-another-react-boilerplate)\n\n" +
    readmeWithPm;

  fs.writeFileSync(
    join(templatePath, "README.md"),
    newReadme,
    "utf8"
  );
};

module.exports = {
  setPackageProperty,
  setMainEntry,
  setDependencies,
  setBrowsersList,
  setRepo,
  setPrecommitHook,
  writePackageFile,
  setReadme
};
