#!/usr/bin/env node

const prompts = require('prompts');
const { exec } = require('child_process');
const fs = require('fs-extra');
const chalk = require('chalk');
const ora = require('ora');

const execSync = require('util').promisify(exec);

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'What is your app name?',
    initial: process.argv[2]
  },
  {
    type: 'toggle',
    name: 'isEnableCypress',
    message: 'Do you want to setup e2e test ?',
    initial: true,
    active: 'yes',
    inactive: 'no'
  },
  {
    type: 'toggle',
    name: 'isEnableTerraform',
    message: 'Do you want to setup Terraform script to deploy to AWS ?',
    initial: true,
    active: 'yes',
    inactive: 'no'
  }
];

const REMOTE_URL = 'git@github.com:kominam/react-boilerplate.git';

(async () => {
  const response = await prompts(questions);

  try {
    const spinner = ora('Cloning template');
    spinner.start();

    await execSync(`git clone ${REMOTE_URL} ${response.name}`);
    await execSync(`./node_modules/.bin/rimraf ${response.name}/.git`);

    spinner.stop();
  } catch (e) {
    console.log(e);

    throw new Error('Error in cloning template project');
  }

  // TODO: delete devDepedencies, script in package.json
  if (!response.isEnableCypress) {
    try {
      await execSync(`./node_modules/.bin/rimraf ${response.name}/cypress`);
    } catch (e) {
      console.log(e);

      throw new Error('Could not disable e2e test.');
    }
  }

  if (!response.isEnableTerraform) {
    try {
      await execSync(
        `./node_modules/.bin/rimraf ${response.name}/provision && ./node_modules/.bin/rimraf ${response.name}/scripts`
      );
    } catch (e) {
      console.log(e);

      throw new Error('Could not disable Terraform provision.');
    }
  }

  // TODO: modify name, author in package.json
  // then write new package.json file

  console.log('%s Done', chalk.green('✓'));

  // TODO: guide user to run npm install and npm start
})();
