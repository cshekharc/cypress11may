///<reference types="cypress"/>

describe("alert handling",()=>{
    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
    })
    it("window : alert -- Js alert",()=>{
        cy.get('.btn.btn-default.btn-lg.dropdown-toggle').eq(0).click()  // .eq(0)
        cy.winAlert()
        // cy.on('window:alert',(str)=>{
        //     expect(str).to.include('I am an alert box!')
        //     // cy.log(str)
        // })
    })

    it("window:confirm -- accepting the alert",()=>{
        cy.get('#button4').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.include('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('include.text', 'OK!')
    })

    it("window:confirm -- cancelling the alert",()=>{
        cy.get('#button4').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.include('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('include.text', 'Cancel!')
    })
})