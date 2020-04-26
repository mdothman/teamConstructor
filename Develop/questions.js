const questionsSchema = [
  {
    type: "confirm",
    name: "welcome",
    message: "Build your engineering team?",
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
  {
    name: "role",
    type: "list",
    message: "Please choose your role",
    choices: ["Intern", "Engineer", "Manager"],
    when: function (answers) {
      return answers.email;
    },
  },
  {
    name: "intern",
    type: "input",
    message: "Please write the name of the School you graduated from.",
    when: function (answers) {
      return answers.role === "Intern";
    },
    validate: (input) => {
      if (input === "" || input.length < 3) {
        return "Please enter in your most recent education";
      }
      return true;
    },
  },
  {
    name: "engineer",
    type: "input",
    message: "Please write your current github username.",
    when: function (answers) {
      return answers.role === "Engineer";
    },
    validate: (input) => {
      if (input === "" || input.length < 3) {
        return "Please enter in your most recent education";
      }
      return true;
    },
  },
  {
    name: "manager",
    type: "input",
    message: "Please write your current office number.",
    when: function (answers) {
      return answers.role === "Manager";
    },
    validate: (input) => {
      if (input === NaN || input.length < 3) {
        return "You must enter in your 3 digit office number";
      }
      return true;
    },
  },
];
module.exports = questionsSchema;
