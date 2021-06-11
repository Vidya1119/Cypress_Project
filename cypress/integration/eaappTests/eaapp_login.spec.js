/// <reference types="Cypress" />

describe('DataDriven test using Cypress fixtures', () => {

    before('Login to Application', () => {
        cy.visit("./")
       
        //getting data from fixture folder
        cy.fixture('eauser').as('userData')
    })

    it('Reading values from dataDriven.json', () => {
        cy.contains('Login').click()

        cy.get('@userData').then((userData) => {
            cy.get('#UserName').type(userData.UserName)
            cy.get('#Password').type(userData.Password)
        })

        cy.get('.btn-default').click()
    })

})

