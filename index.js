const fs = require('fs');
const inquirer = require('inquirer');

function generateMarkdown(data) {
    return `
    # ${data.Title}

    ${data.Description}

    ## Instructions

    ${data.Instructions}

    ## License

    ${data.License}

    ## Collaborations

    ${data.collab}
     `
 };

const questions = [{
                type: 'input',
                name: 'Title',
                message: 'Enter Project Name (Required) : ',
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log('Please enter your project name!');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'Description',
                message: 'Provide a short description explaining the project (Required) : ',
                validate: descriptionInput => {
                  if (descriptionInput) {
                    return true;
                  } else {
                    console.log('Please enter a description');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'Instructions',
                message: 'Provide instructions and examples for use : ',
                validate: instructionInput => {
                  if (instructionInput) {
                    return true;
                  } else {
                    console.log('Please enter a description');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'collab',
                message: 'List your collaborators, if any, with links to their GitHub profiles : ',
                validate: collabInput => {
                  if (collabInput) {
                    return true;
                  } else {
                    console.log('Please enter a description');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'license',
                message: 'Enter licensing and restrictions : ',
                validate: licenseInput => {
                  if (licenseInput) {
                    return true;
                  } else {
                    console.log('Please enter a description');
                    return false;
                  }
                }
              },];
  

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log(
        "Your readMe has been created"
      );
    });
  }

  function init() {
    inquirer.prompt(questions).then(function (userInputs) {
      console.log(userInputs);
      writeToFile("README.md", generateMarkdown(userInputs));
    });
  }

  init();
