///<reference types="cypress"/>

describe("data validation in Data Table", () => {
    it('validate particular user\'s age by first and last name', () => {
      cy.visit('https://www.webdriveruniversity.com/')
      cy.get('#data-table').invoke('removeAttr', 'target').click()
      
      // Loop through each row, checking both first name and last name
      cy.get('#thumbnail-1 tr').each((userDetails) => {
        const firstName = userDetails.find('td:nth-child(1)').text()
        const lastName = userDetails.find('td:nth-child(2)').text()
  
        if (firstName === 'Sarah' && lastName === 'Jackson') { // Sarah
          const age = userDetails.find('td:nth-child(3)').text()
          expect(age).to.equal('56') //56
        }
      });
    });
  });
  
// describe("data validation in Data Table",()=>{
//     it('validate particulat users age',()=>{
//         cy.visit('https://www.webdriveruniversity.com/')
//         cy.get('#data-table').invoke('removeAttr', 'target').click()
//         cy.get('#thumbnail-1 tr td:nth-child(1)').each((firstName, index)=>{
//             const userFname = firstName.text()
//             if(userFname === 'Jemma'){
//                 cy.get('#thumbnail-1 tr td:nth-child(1)').eq(index).next().next().then((age)=>{
//                     const userAge = age.text()
//                     expect(userAge).to.equal('94')
//                 })
//             }   
//         })
//     })

// })

// cy.get("#thumbnail-1 tr td:nth-child(2)").each((lastName, index)=>{
//     const userName = lastName.text()
//     if(userName === 'Doe' ){
//     cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age)=>{
//         const userAge = age.text()
//         expect(userAge).to.equal('20')
//     })
// }