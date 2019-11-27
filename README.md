# YARB CLI

Create React apps using [Yet Another React Boilerplate](https://github.com/jasonsbarr/yet-another-react-boilerplate) with a simple, command line interface.

This gives you a fully-functional React setup with development and production builds, a built-in dev server, testing, linting, and formatting scripts, a pre-commit hook to ensure code quality, simple, modular state management, and much more.

You **don't** need to:
- Configure tools like Webpack or Babel
- Set up a test runner like Jest
- Write and rewrite a ton of boilerplate for Redux or another complicated state management tool
- Maintain your own dev/prod configs
- Decide where to put your components, routes, reducers, etc.

You **do** need to:
- Build your own React app, because while this is a pretty fantastic tool that takes care of a lot of things so you don't have to... it can't do _that_ for you

Plus if you _do_ want to change something in the boilerplate config you can do so without ejecting or running some other script, because all the config is there in the project root for you.

No complicated setup plus the ability to change any configuration options you want without a script or extra work? It's a win/win!

## Usage

Create an app in `[current working directory]/<directory>`:

```bash
yarb create <directory>
```

`<directory>` is required. All other arguments are optional.

### Arguments

Options without a default will _not_ be added to `package.json`.

- `--name`, `-n`: name of project. Must be a valid `package.json` name, defaults to `directory`
- `--initial`: initial version, defaults to `1.0.0`
- `--description`, `-d`: project description, defaults to `""`
- `--author`, `-a`: project author, defaults to `""`
- `--license`, `-l`: project license
- `--repo`, `-r`: Git repo URL
  - If you give it a value for this option, the init script will push the newly-installed project to your repo's `master` branch
- `--noprecommit`: disable the default pre-commit hook, which runs ESLint, Stylelint, and Prettier on staged files before committing
- `--yarn`: use Yarn for your package manager instead of NPM

## CLI tool installation

This tool is not _yet_ published to NPM as an installable package, though I hope to do that soon. For now, follow these steps:

1. Clone the repo into a suitable directory on your local machine: `git clone https://github.com/jasonsbarr/yarb-cli.git`
2. `cd yarb-cli`
3. `npm link`

To unlink this version from your local machine `PATH`, e.g. when I do publish this to NPM, go to the package installation directory and run `npm unlink`.

Honestly you should probably just wait until I have it on NPM.

## Project installation overview

After you run `yarb create`, the script takes care of the following steps for you:

1. Downloading the project template files and config
2. Creating a new `package.json` based on the options you passed in
3. Creating the directory you've specified and moving the package files into it
4. Initializing a new Git repo and, if you provided a URL, setting `origin` to your remote
5. Installing dependencies with your preferred package manager (defaults to NPM)
6. Making an initial Git commit
7. Pushing the initial commit to `origin master` if you provided a remote URL

## Included scripts

Here are the included scripts you can use after installation and their provided options

### Start

Starts the dev server with live reload when you make a change to the code.

Run with `npm start` or `yarn start`.

### Build

Makes a production build, complete with optimized assets including responsive images for devices with different viewport sizes and pixel densities.

Run with `npm run build` or `yarn build`.

### Lint

Runs one or both of:

- ESLint on your JS/JSX code
- Stylelint on your CSS/SCSS and CSS-in-JS

Use `npm run lint:css` or `yarn run lint:css` to lint styles.

Use `npm run lint:js` or `yarn run lint:js` to lint your JS/JSX.

Use `npm run lint:all` or `yarn run lint:all` to lint everything.

### Format

Uses Prettier to format JS/JSX.

Run with `npm run format` or `yarn run format`.

### Test

Uses Jest and React Testing Library to run your tests.

Use `npm test` or `yarn test` to run all tests once.

Use `npm test:watch` or `yarn test:watch` to watch for file changes and then run only the tests for changed files.

Use `npm test:all` or `yarn test:all` to watch for file changes and then run _all_ tests on each change.

Use `npm test:update` or `yarn test:update` to update tests, including snapshots, and then run all tests.

Use `npm test:coverage` or `yarn test:coverage` to generate coverage statistics for your test suite.

## Requirements

You'll need to have Node **v10 or later** installed on your development machine, though it's not required on the server.

## Roadmap

- Further testing
- Make changes to boilerplate files as needed
- Add CSS/SCSS modules to boilerplate
- Publish to NPM
- Add interactive project setup process
- Ability to generate new components

## Contributing

Simply submit a PR and let's talk! If you have an idea but not a fully-formed code solution, either an issue or draft PR will do.

## Author

Jason Barr (jason@jasonsbarr.com)

## Copyright and license info

&copy; 2019 by Jason Barr. [Released under the MIT license](./LICENSE).
