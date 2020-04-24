const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const { prompt } = require("inquirer");
const questions = require("./questions");
const fs = require("fs");

prompt(questions).then((answers) => {
  let data = {
    name: answers.name,
    id: answers.id,
    email: answers.email,
    role: answers.role,
    options: [answers.intern, answers.engineer, answers.manager],
  };
  console.log(data.options);
  let options = data.options.filter(isDefined).pop();
  let registration = data.role;
  if (registration === "Intern") {
    new Intern(data.name, data.id, data.email, options);
  }
  if (registration === "Engineer") {
    corporation.push(new Engineer(data.name, data.id, data.email, options));
  }
  if (registration === "Manager") {
    corporation.push(new Manager(data.name, data.id, data.email, options));
  }

  function isDefined(value) {
    return value !== undefined;
  }
  console.log(corporation);
  module.exports = corporation;
});
