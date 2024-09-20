///<reference types="cypress"/>

describe("select a vaule fron dynamic dd",()=>{
    it("select a vaule fron dynamic dd",()=>{
        cy.visit('https://www.webdriveruniversity.com/')

        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()

        cy.get('[name="food-item"]').type('k')

        cy.get('.autocomplete-items div').each((foodItem)=>{
            //const item = foodItem.text()
            if(foodItem.text().includes('Kidney beans')){
                // cy.log(foodItem.text())
                cy.wrap(foodItem).click()
                cy.get('#submit-button').click()
                cy.url().should('include', 'Kidney')
            }
            //cy.url().should('include', 'beans')
            //if(foodItem.text() === 'K'
        })
    })
})