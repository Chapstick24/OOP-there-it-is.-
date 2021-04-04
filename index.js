const inquirer = require('inquirer');
const fs = require('fs');

const {topHtml, bottomHtml}= require("./info")

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/Engineer");

const allEmployees = [];


function addEmployee() {
    inquirer.prompt([{
        type: 'input',
        message: "Enter your name",
        name: "name",
    },
    {
        type: "list",
        message: "What do you do here",
        name: 'role',
        choices: ["Manager",
            "intern",
            "engineer"],

    },
    {
        type: "input",
        message: "whats your ID",
        name: 'id',

    },
    {
        type: "input",
        message: "EMAIL please",
        name: "email",

    }

    ])
        .then(function ({ name, role, id, email }) {
            var roleInfo = "";
            if (role === "engineer") {
                roleInfo = "Github username";
            }
            else if (role === "intern") {
                roleInfo = "School Name";
            }
            else {
                roleInfo = "Office Number"
            }
            inquirer.prompt([{
                type: 'input',
                message: `${roleInfo}`,
                name: "roleInfo",
            },
            {
                type: 'list',
                message: " would you like to add more people?",
                name: "moreMembers",
                choices: [
                    "yes",
                    "no",
                ]
            }])
            
                .then(function ({ roleInfo, moreMembers }) {
                    var newMember;
                    if (role === "engineer") {
                        newMember = new Engineer(name, id, email, roleInfo);
                    }
                    else if (role === "intern") {
                        newMember = new Intern(name, id, email, roleInfo);
                    }
                    else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }
                    allEmployees.push(newMember)
                    console.log(allEmployees)
                    // console.log(newMember)
                    if (moreMembers === "yes") {
                        addEmployee()
                    } else { generateH()
                        // console.log("finished")
                    }
                })
            })
        };
        function generateH (){
            var final = "";
            final = final + topHtml;
            for(let item of allEmployees){
                if(item.role === "Manager"){
                    var card = `<div class="card" style="width: 18rem;">
                    <div class="card-header">${item.name}
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"> Office:${item.office}</li>
                      <li class="list-group-item">ID: ${item.id}</li>
                      <li class="list-group-item">Job: ${item.role}</li>
                      <li class="list-group-item">Email: ${item.email}</li>
                    </ul>
                  </div>`
                }else if(item.role === "intern"){
                    var card = `<div class="card" style="width: 18rem;">
                    <div class="card-header">${item.name}
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"> ID: ${item.id}</li>
                      <li class="list-group-item">EMail: ${item.email}</li>
                      <li class="list-group-item">Jop: ${item.role}</li>
                      <li class="list-group-item">School: ${item.school}</li>
                    </ul>
                  </div>`
                    
                }else{
                    var card = `<div class="card" style="width: 18rem;">
                    <div class="card-header">${item.name}
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Job: ${item.role}</li>
                      <li class="list-group-item">ID: ${item.id}</li>
                      <li class="list-group-item">Email: ${item.email}</li>
                      <li class="list-group-item">Github: ${item.github}</li>
                    </ul>
                  </div>`
                } 
                final = final+card
            }
            final=final+bottomHtml
            fs.writeFile("./dist/index.html", final, (err, data) => {
                if(err){
                    throw err
                }
                console.log("finished")
            })
        }

addEmployee()