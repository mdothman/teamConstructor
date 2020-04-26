const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const internTemplate = require("./templates/internHTML");
const engineerTemplate = require("./templates/engineerHTML");
const mangerTemplate = require("./templates/mangerHTML");
const html = require("./templates/mainHTML");
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
    let employee = new Intern(data.name, data.id, data.email, options);
    let template = internTemplate(employee);
    let main = html(template);
    fs.appendFileSync("./output/index.html", main);
  }
  if (registration === "Engineer") {
    let employee = new Engineer(data.name, data.id, data.email, options);
    let template = engineerTemplate(employee);
    let main = html(template);
    fs.appendFileSync("./output/index.html", main);
  }
  if (registration === "Manager") {
    let employee = new Manager(data.name, data.id, data.email, options);
    let template = mangerTemplate(employee);
    let main = html(template);
    fs.appendFileSync("./output/index.html", main);
  }
  function isDefined(value) {
    return value !== undefined;
  }
});
