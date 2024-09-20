

///<reference types = "cypress"/>

describe('shadow dom handling methods',() =>{
    it(' ways to handle shadow dom',() =>{
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        // .shadow method
        // cy.get('#shadow_host')
        //     .shadow()
        //     .find('[placeholder="Name"]')
        //     .type('velocity')

        // cy.get('[placeholder="Name"]',{includeShadowDom:true}).type('testName')
        cy.get('[placeholder="Name"]').type('testName')
    })
})

//[placeholder="Name"]