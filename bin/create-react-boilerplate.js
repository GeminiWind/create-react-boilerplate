#!/usr/bin/env node

const prompts = require('prompts');
const { exec } = require('child_process');
const fs = require('fs-extra');

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
    message: 'Do you want to setup Terraform script to deploy to AWS?',
    initial: true,
    active: 'yes',
    inactive: 'no'
  }
];

const REMOTE_URL = 'git@github.com:kominam/react-boilerplate.git';

(async () => {
  const response = await prompts(questions);


  try {
    console.log('Cloning template ...');
    await execSync(`git clone ${REMOTE_URL} ${response.name}`);
  } catch (e) {
    throw new Error('Error in cloning template project');
  }

  // TODO: delete devDepedencies, script in package.json
  if (!response.isEnableCypress) {
    try {
      await execSync(`rm -rf ${response.name}/cypress`);
    } catch (e) {
      throw new Error('Could not disable e2e test.');
    }
  }

  if (!response.isEnableTerraform) {
    try {
      await execSync(
        `rm -rf ${response.name}/provision && rm -rf ${response.name}/scripts`
      );
    } catch (e) {
      throw new Error('Could not disable Terraform provision.');
    }
  }

  // TODO: modify name, author in package.json
  // then write new package.json file

  console.log('Done. Run npm install to install deps');
})();
