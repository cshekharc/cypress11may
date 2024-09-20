///<reference types="cypress"/>

describe("smoke test suite for contact us page",()=>{
    let contactDtls
    before(()=>{
        cy.fixture("contactData").then((data)=>{
            contactDtls = data
        })
    })
    beforeEach("",()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        // works on the css selectors
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
    })
    it("filling up contact us form using fixture",()=>{
        cy.get('[name="first_name"]').type(contactDtls.firstName)
        cy.get('[name="last_name"]').type(contactDtls.lastName)
        cy.get('[name="email"]').type(contactDtls.email) //  
        cy.get('[placeholder="Comments"]').type(contactDtls.comment)
        cy.get('[type="submit"]').click()
    })
    it("fillin up contact us form",()=>{
        cy.get('[name="first_name"]').type(contactDtls.firstName)// .type('velocity')
        cy.get('[name="last_name"]').type(contactDtls.lastName)// .type('velocity')
        cy.get('[name="email"]').type(contactDtls.email)//.type('vel@velocity.com') //  
        cy.get('[placeholder="Comments"]').type(contactDtls.comment)//.type('this is for testing')
        cy.get('[type="submit"]').click()
    })
})