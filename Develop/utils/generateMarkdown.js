// function to generate markdown for README
function generateMarkdown(data) {
  return `

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  # ${data.title}
  
  
  ## Table of Contents
  > #### [Description](#Description)     
  
  > #### [Languages/Technologies](#Languages/Technologies)
  
  > #### [Installation Instructions](#Installation)
  
  > #### [Usage Instructions](#Usage)
  
  > #### [License](#License)
  
  > #### [Contribution](#Contribution)
  
  > #### [Testing](#Testing)
  
  > #### [Acknowledgements](#Acknowledgements)
  
  > #### [Questions](#Questions)
  
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
  ${data.usage}
  
  ## License
  ---
  Licensed un the ${data.license} license.
  
  ## Contribution
  ---
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
