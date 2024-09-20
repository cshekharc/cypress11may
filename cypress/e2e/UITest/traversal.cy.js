///<reference types="cypress"/>

describe("different traversal methods",()=>{
    beforeEach(()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#data-table').invoke('removeAttr', 'target').click()
    })
    it(".closet() ",()=>{
        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
    })

    it('.children() ',()=>{
        cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')
    })

    it('.filter() ',()=>{
        cy.get('.btn-group-toggle button').filter('.active').should('contain', 'Button-1')
    })

    it('.parent()',()=>{
        cy.get('.traversal-mark').parent().should('include.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat consequa')
    })

    it.only('first and last',()=>{
        cy.get('.traversal-table tbody tr td').first().should('contain', 'Andy')
        cy.get('.traversal-table tbody tr td').last().should('contain', 'Scott')
    })
})