// Internal Modules
const fs = require('fs');


// Personal Modules
const generateMarkdown = require('./utils/generateMarkdown.js')


// NPM Modules
const inquirer = require('inquirer');


// array of questions for user
const questions = () => {
    console.log(`
    ===================================
    Welcome to the README.md Generator!
    ===================================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: '(Required) What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else{
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: '(Required) Enter your GitHub Username:',
            validate: githubUserInput => {
                if (githubUserInput) {
                    return true;
                }
                else{
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }    
        },

        {
            type: 'input',
            name: 'title',
            message: '(Required) What is title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else{
                    console.log('Please enter the project title!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'repo',
            message: '(Required) What is the link to the project repo?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else{
                    console.log('Please enter the URL for your project repo!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?'            
        },

        {
            type: 'input',
            name: 'describe',
            message: '(Required) Enter a description of your project:',
            validate: descInput => {
                if (descInput) {
                    return true;
                }
                else{
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'languages',
            message: 'Enter languages/technologies used:'       
            // To be converted to checkbox with a list of languages/technologies at a later date
            // choices: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery', 'Node.js']
        },


        {
            type: 'input',
            name: 'install',
            message: 'Enter installation instructions:'              
        },

        {
            type: 'input',
            name: 'useage',
            message: 'Enter usage instructions:'              
        },

        {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license for your project:',
        choices: ['GNU GPL v3', 'GNU GPL v2', 'MIT', 'BSD', 'Apache']
        }, 

        {
            type: 'input',
            name: 'contribute',
            message: 'Enter contribution instructions:'              
        },

        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions:'              
        },

        {
            type: 'input',
            name: 'ackowledge',
            message: 'Enter acknowledgements:'              
        },
        
    ])
    // .then(answers => {
    //     console.log(JSON.stringify(answers, null, '  '));
    // });
};

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

function generate(answers) {
    questions()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
};

generate()



// // function to initialize program
// function init() {
    

// }

// // function call to initialize program
// init();

