///<reference types="cypress"/>

describe('file upload',() => {
    //positve test
    it("uploading a test file", () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr','target').click()
        cy.get('#myFile').selectFile('C:/Users/Shekar/Desktop/datatxt.txt')
        cy.get('[type="submit"]').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.include('Your file has now been uploaded!')
        })
    })

    // negative test
})