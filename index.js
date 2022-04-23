const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type:'input',
        message:'what is your project title',
        name:'title',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },
    },
    {
        type:'input',
        message:'what is your user story?',
        name:'UserStory',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },
    

    },

    {
        type:'input',
        message:'what is your user story after that?',
        name:'UserStory2',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },

    },
    {
        type:'input',
        message:'what is your user story following that?',
        name:'UserStory3',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },

    },

    {
        type:'input',
        message:'what is the description of the project?',
        name:'description',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },
    },
    {
        type:'input',
        message:'what was your installation process?',
        name:'installation',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },
    },
    {
     
        type:'input',
        message:'how useful is your app?',
        name:'usage',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },   
    },
    {
        type:'input',
        message:'how do you use your app?',
        name:'howTo',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },   
    },
   
    {
        type:'input',
        message:'what license used for this project?',
        name:'license',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },   
    },

    {
        type:'input',
        message:'what was your biggest challenge?',
        name:'challenges',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },   
    },
    {
        type:'input',
        message:'what would be your future development plans?',
        name:'futureDevelopments',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },   
    },
    {
        type:'input',
        message:'what is your Github username?',
        name:'Github',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },   
    },
    {
        type:'input',
        message:'what is your linkedin account?',
        name:'Linkedin',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },   
    },
    {
        type:'input',
        message:'what is your email address?',
        name:'email',

        validate: (value)=>{
            if(value){
                return true;
                
            }else {
                return 'A value is needed to continue';
            }
        },   
    },
    
    
])

.then(
    ({
      title,
      userStory,
      userStory2,
      userStory3,
      description,
      installation,
      usage,
      license,
      howTo,
      challenges,
      futureDevelopments,
      github,
      linkedin,
      email,
    }) => {
      const template = `# ${title}
## USER STORY
AS A ${userStory}
I WANT ${userStory2}
SO THAT ${userStory3}

## DESCRIPTION
${description}

## TABLE OF CONTENTS
- [INSTALLATION](#installation)
- [USAGE](#usage)
- [LICENSE](#license)
- [QUESTIONS](#questions)

## INSTALLATION
${installation}
    
## USAGE
${usage}
${howTo}
    
## LICENSE
[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})
The license included for the project is under ${license}

## CHALLENGES FACED
${challenges}

## FUTURE DEVELOPMENTS
${futureDevelopments}

## QUESTIONS
If you have any further questions about this module or improvement ideas, please feel free to connect on either GitHub or LinkedIn, or email me at:
* GitHub: https://github.com/${github}
* LinkedIn: ${linkedin}
* E-Mail: ${email}`;

      createNewReadMe(title, template);
    }
  );

function createNewReadMe(fileName, data) {
  fs.writeFile(
    `./${fileName.toUpperCase().split(" ").join("")}.md`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("README.md File Created!");
    }
  );
}