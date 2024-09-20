///<reference types="cypress"/>

describe('data genration test',() => {
    it('log created data',() => {
        cy.fixture('testData').then((abc)=>{
            cy.log(abc)
        })
    })
})