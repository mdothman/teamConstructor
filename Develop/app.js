const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const { prompt } = require("inquirer");
let questions = require("./questions");

prompt(questions).then((answers) => {
  const optionsArr = [answers.intern, answers.engineer, answers.manager];

  let options = optionsArr.filter(function (options) {
    return options !== undefined;
  });
  let data = {
    name: answers.name,
    id: answers.id,
    email: answers.email,
    role: answers.role,
    options: options.pop(),
  };

  console.log(data);
});
