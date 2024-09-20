

///<reference types = "cypress"/>

describe('read write file from cypress method',()=> {
    it("write a file",()=> {
        cy.writeFile('./cypress/fixtures/writeJson.json', 
        {
            firstName: "test", 
            lastName: "test"
        })
        cy.writeFile('./cypress/fixtures/testData.txt', 'this is test file created from the cypress WriteFile function')
    })

    it.only("read a file",() => {
        cy.readFile('./cypress/fixtures/testData.txt').should('contains', 'this is test file')
        cy.readFile('./cypress/fixtures/writeJson.json').should('have.property' , "firstName")
    })

})