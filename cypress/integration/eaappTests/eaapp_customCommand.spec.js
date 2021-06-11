   /// <reference types="Cypress" />

describe('Test EA application', () => {

    before('Login to application', () => {
        cy.visit("./")
       
        //getting data from fixture folder
        cy.fixture('eauser').as('userData')

        
        cy.get("@userData").then((userData) => {
          cy.login(userData.UserName, userData.Password)
    })
})


    it('Performing benifit check', () => {
        cy.contains('Employee List').click()

        cy.get('.table').find('tr').contains('Karthik').parent().contains('Benefits').click()
        
        cy.get('.table').find('tr').as("rows")

        cy.get("@rows").then(($row)=>{
            cy.wrap($row).click({multiple: true })
        })
        
       

    
    })

})
