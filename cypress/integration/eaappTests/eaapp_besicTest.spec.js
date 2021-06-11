/// <reference types="Cypress" />

describe("test 1", () => {

    it("Login to Application", () => {
        
        cy.visit("http://eaapp.somee.com/")

        cy.contains('Login').click()
       
        cy.url().should("include", "/Account/Login") 

        cy.get('#UserName').type("admin")
        cy.get('#Password').type("password")

        cy.get('.btn-default').click({force: true })
        
        cy.contains('Employee List').click()

        cy.get('.table').find('tr').contains('Karthik').parent().contains('Benefits').click()


    })

    
})

