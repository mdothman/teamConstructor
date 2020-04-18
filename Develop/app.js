const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const { prompt } = require("inquirer");

const questions = [
  {
    type: "confirm",
    name: "welcome",
    message: "Build your engineering team",
  },
  {
    type: "input",
    name: "name",
    message: "Please enter in your name",
    when: function (answers) {
      return answers.welcome;
    },
    validate: (input) => {
      if (input !== "") {
        return true;
      }
      return "Please enter your first or last name";
    },
  },
];
prompt(questions).then((answers) => {
  console.log(answers.welcome);
});
