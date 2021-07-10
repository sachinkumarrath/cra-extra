#! /usr/bin/env node
const shell = require('shelljs');
const inquirer = require('inquirer');

const frameworkTypes = ['react', 'ionic-react', 'angular', 'ionic-angular'];

const askQuestions = async () => {

  const questions = [
    {
      type: 'list',
      name: 'frameworkType',
      message: 'Choose the framework:',
      choices: ['react', 'ionic-react', 'angular', 'ionic-angular']
    },
    {
      type: 'input',
      name: 'appName',
      message: `What's the name of the application?`
    },
  ];
  const {appName, frameworkType} = await inquirer.prompt(questions);
  if (frameworkType === frameworkTypes[0]) {
    shell.exec(`npx create-react-app ${appName}`)
  } else {
    console.error('select valid framwork')
  }
};

askQuestions();



// console.log('load CRA');
