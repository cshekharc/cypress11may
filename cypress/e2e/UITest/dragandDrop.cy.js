///<reference types="cypress"/>

describe("drag and drop",() => {
    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr','target').click()
    })
    it('drag and drop element',()=>{
        
        cy.get('#draggable').trigger('mousedown', {which : 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force :true})
        cy.get('#droppable > p > b').should('include.text', 'Dropped')
    })

    it('hover',()=>{
        cy.get('.dropdown.hover .dropdown-content').invoke('show').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.include('Well done you clicked on the link!')
        })
    })

    it.only("double click",()=>{
        //cy.get('.locator').click().click()
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.css', 'background-color', 'rgb(147, 203, 90)') // rgb(147, 203, 90)
    })
})