

// const generateBadge = badgeText =>  {
//   if (badgeText === 'MIT') {
//     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//   }
// };

// [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
// [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)

// const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
// const GNU = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'

// function to generate markdown for README
function generateMarkdown(data) {

  return `

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  # ${data.title}
  
  
  ## Table of Contents
[Description](#Description)     
  
[Languages/Technologies](#Languages/Technologies)
  
[Installation Instructions](#Installation)
  
[Usage Instructions](#Usage)
  
[License](#License)
  
[Contribution](#Contribution)
  
[Testing](#Testing)
  
[Acknowledgements](#Acknowledgements)
  
[Questions](#Questions)
  
  ## Description 
  ---
  ${data.describe}
  
  ## Languages/Technologies
  ---
  ${data.languages}
  
  ## Installation Instructions
  ---
  ${data.install}
  
  ## Usage Instructions
  ---
  ${data.useage}
  
  ## License
  ---
  Licensed under the ${data.license} license.
  
  ## Contribution
  ---
  ${data.repo}
  ${data.contribute}
  
  ## Testing
  ---
  ${data.test}
  
  ## Acknowledgements 
  ---
  ${data.acknowledge}
  
  ## Questions
  ---
  [GitHub](https://github.com/${data.github}) profile.

  E-mail: ${data.email}
  
  ### Built by ${data.name} 
  

`;
}

module.exports = generateMarkdown;
