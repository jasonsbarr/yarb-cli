# YARB CLI

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

Create React apps using [Yet Another React Boilerplate](https://github.com/jasonsbarr/yet-another-react-boilerplate) with a simple command line interface and an optional interactive prompt to help set up your project.

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
yarb-cli create <directory> [options]
```

`<directory>` is the only required argument. If you invoke the command with no other options it will launch an interactive prompt to help you configure your project.

### Options

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
- `--private`: make project private in `package.json` so it won't accidentally get published to NPM

## CLI tool installation

Install as a global package with NPM:

`npm install -g yarb-cli`

Or with Yarn:

`yarn -g yarb-cli`

## Project installation overview

After you run `create`, the script takes care of the following steps for you:

1. Downloading the project template files and config
2. Creating a new `package.json` based on the options you passed in
3. Creating the directory you've specified and moving the package files into it
4. Initializing a new Git repo and, if you provided a URL, setting `origin` to your remote
5. Installing dependencies with your preferred package manager (defaults to NPM)
6. Making an initial Git commit
7. Pushing the initial commit to `origin master` if you provided a remote URL

## Requirements

You'll need to have Node **v10 or later** installed on your development machine, though it's not required on the server.

## Roadmap

- Add ability to generate new components
- Add ability to run scripts through Yarb-CLI, not just directly with NPM/Yarn

## Contributing

Simply submit a PR and let's talk! If you have an idea but not a fully-formed code solution, either an issue or draft PR will do.

Please note that this project uses a [contributor code of conduct](CODE_OF_CONDUCT.md) to maintain a welcoming, inclusive, and healthy community to promote a positive experience for as many people as possible. By participating, you agree to abide by its terms.

## Author

Jason Barr (me@jasonbarr.dev)

## Copyright and license info

&copy; 2019 by Jason Barr. [Released under the MIT license](./LICENSE).
