const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const { prompt } = require("inquirer");
let questions = require("./questions");

prompt(questions).then((answers) => {
  console.log(answers.welcome);
});
