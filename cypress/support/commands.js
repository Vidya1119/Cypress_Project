

Cypress.Commands.add("login",(usrename, password) => { 
    //perform login click
    cy.contains('Login').click()

    cy.get("#loginLink").invoke('text').as("linkText")

    cy.get("@linkText").then(($x)=>{
           expect($x).is.eql('Login')
    })

    cy.url().should("include", "/Account/Login")

    //enter usermane and password
    cy.get('#UserName').type(usrename)
    cy.get('#Password').type(password)

    cy.get('.btn-default').click({force: true });
})