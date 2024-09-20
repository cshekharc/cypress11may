// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('winAlert',()=>{
    cy.on('window:alert',(str)=>{
        expect(str).to.include('I am an alert box!')
        // cy.log(str)
    })
})
// winAlert
Cypress.Commands.add('userLogin',(userName, password)=>{
    cy.get('.locator').type(userName)
    cy.get('.locator').type(password)
    cy.get('.locator').click()
})