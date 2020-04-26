const fs = require("fs");
htmlBody = require("../templates/mainHTML");

async function writeTofile(htmlBody) {
  await htmlBody;
  try {
    outputHTML();
  } catch {
    throw console.error;
  }
}

function outputHTML(htmlBody) {
  if (htmlBody !== undefined) {
    fs.writeFileSync(
      "./index.html",
      `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
          <title>Build a Team</title>
        </head>
        <body class="container-fluid">
        <div class="row justify-content-center bg-danger mb-3">
            <h1 class="text-white p-5">My Team</h1>
        </div>
            <div class="row">
              ${htmlBody}
            </div>
        </body>
        </html>`
    );
    require("child_process").exec("open index.html");
  } else {
    return console.error;
  }
}

`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <title>Build a Team</title>
</head>
<body class="container-fluid">
<div class="row justify-content-center bg-danger mb-3">
    <h1 class="text-white p-5">My Team</h1>
</div>
    <div class="row">
      ${htmlBody}
    </div>
</body>
</html>`;
