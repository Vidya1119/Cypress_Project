/// <reference types="Cypress" />

describe("test 2", () => {

    it("useing then and as ", () => {
        
        cy.visit("http://eaapp.somee.com/")

        //long way of working with Promice(closure)
        //cy.get("#loginLink").then(($link) => {
        //      return $link.text();
        //}).as("linkText");
        
        //shorthand way of worklng with promice using invoke
        cy.get("#loginLink").invoke('text').as("linkText")
        
        cy.contains('Login').click()

        cy.get("@linkText").then(($x)=>{
            expect($x).is.eql('Login')
        })
       
        cy.url().should("include", "/Account/Login") 

        cy.get('#UserName').type("admin")
        cy.get('#Password').type("password")

        cy.get('.btn-default').click({force: true })
        
        cy.contains('Employee List').click()

        cy.get('.table').find('tr').contains('Karthik').parent().contains('Benefits').click()

        cy.get('.table').find('tr').as("rows")

        cy.get("@rows").then(($rows) =>{
            cy.wrap($rows).click({multiple:true})

        })   
     })

    
})