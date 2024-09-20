///<reference types="cypress"/>

describe("smoke test suite for contact us page",()=>{

    const filePath = ':cypress/fixtures/testData.xlsx'
    it("fillin up contact us form from xl",()=>{
        cy.task('xlToJson', filePath).then((readData)=>{
            cy.visit('https://www.webdriveruniversity.com/')
            // works on the css selectors
            cy.get('#contact-us').invoke('removeAttr', 'target').click()
            cy.get('[name="first_name"]').type(readData.Sheet1[1].A)
            cy.get('[name="last_name"]').type(readData.Sheet1[2].B)
            cy.get('[name="email"]').type(readData.Sheet1[3].C) //  
            cy.get('[placeholder="Comments"]').type(readData.Sheet1[3].D)
            cy.get('[type="submit"]').click()

        })
    })
})


// cy.visit('https://www.webdriveruniversity.com/')
// // works on the css selectors
// cy.get('#contact-us').invoke('removeAttr', 'target').click()
// cy.get('[name="first_name"]').type('velocity')
// cy.get('[name="last_name"]').type('velocity')
// cy.get('[name="email"]').type('vel@velocity.com') //  
// cy.get('[placeholder="Comments"]').type('this is for testing')
// cy.get('[type="submit"]').click()