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
  {
    name: "id",
    type: "input",
    message: "Please enter in a valid ID Number",
    when: function (answers) {
      return answers.name;
    },
    validate: (input) => {
      if (input === NaN || input.length < 6) {
        return "You must enter in 6 digits";
      }
      return true;
    },
  },
  {
    name: "email",
    type: "input",
    message: "Please enter in a valid email address",
    when: function (answers) {
      return answers.id;
    },
    validate: (input) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
        return true;
      }
      return "You have entered an invalid email address!";
    },
  },
];
prompt(questions).then((answers) => {
  console.log(answers.welcome);
});
