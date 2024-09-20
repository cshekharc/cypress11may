///<reference types="cypress"/>

describe('drop down, checkbox and radio buttons',()=>{
    // hooks 
    // before - will execute only once before first it block
    // beforeEach - will execute before every it block in the describe block
    // afterEach - will execute after every it block in the describe block
    // after - will execute after only last it block in the describe block
    // only - will execute only one it block in the describe block
    // skip - will skip that it block in the describe block
    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    })
    it(' select values from drop down',()=>{
        // cy.visit('https://www.webdriveruniversity.com/')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        // https://www.chaijs.com/api/bdd/
        cy.get('#dropdowm-menu-1').select('Python').should('have.value', 'python')

        cy.get('#dropdowm-menu-2').select('maven').should('include.text', 'Maven')

        // cy.get('#dropdowm-menu-3').select(3).should('include.text', 'JQuery')
        cy.get('#dropdowm-menu-3').select(3).should('have.value', 'jquery')
    })

    it('select checkbox',() =>{

        // cy.visit('https://www.webdriveruniversity.com/')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get('[value="option-1"]').click().should('be.checked')

        cy.get('[value="option-3"]').should('be.checked')

        cy.get('[value="option-2"]').check().should('be.checked')

        cy.get('[value="option-3"]').uncheck().should('not.be.checked')
    })

    it('radio buttons',() =>{
        // cy.visit('https://www.webdriveruniversity.com/')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get('[value="yellow"]').check().should('be.checked')

        cy.get('[value="blue"]').should('not.be.checked')

    })
})