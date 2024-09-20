///<reference types="cypress"/>


describe('iframes',() =>{
    it("validating the iframes text on popup",() =>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', 'target').click()
        
        cy.get('#frame').then((iFrameInfo) => {

            const iframeBody = iFrameInfo.contents().find('body')

            cy.wrap(iframeBody).as('frameLocators')
            cy.get('@frameLocators').find('#button-find-out-more').click()
            cy.get('@frameLocators').find('.modal-body>p').should('include.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods')

        })
    })
})