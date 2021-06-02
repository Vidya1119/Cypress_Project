// //import 'cypress-file-upload';

// Cypress.Commands.add('login', (email, password) =>{
//     cy.get('.login').click()
//     cy.get('#email').type(email)
//     cy.get('#passwd').type(password)
//     cy.get('#SubmitLogin').click()
// })


// Cypress.Commands.add('search', (product)=>{
//     cy.get('#search_query_top').type(product)
//     cy.get("button[name='submit_search']").click()
// })


// Cypress.Commands.add("login", (username, password) => { 
//     cy.get('@userData').then((userData) => {
//         cy.get('#UserName').type(username)
//         cy.get('#Password').type(password)
//     })
//     cy.get('.btn').click()
// })


// Cypress.Commands.add('login', (userName, password) => {
//     //Enter username and password
//     cy.get('#UserName').type(userName);
//     cy.get('#Password').type(password,{log:false});
//     cy.get('.btn').click();
// })
