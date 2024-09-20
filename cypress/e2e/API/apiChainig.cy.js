///<reference types="cypress"/>
import {clientName, clientEmail} from "../../fixtures/data.js"

const baseUrl = 'https://simple-books-api.glitch.me'

describe("api chaingin with authentication", () => {
    let token
    it("sanity for oredering book using apis", () => {
        cy.fixture('apiData').then((users) => {
            users.forEach(user => {
            // for(let i = 0; i <= 10; i++){
            //     cy.log(clientName)
            //     cy.log(clientEmail)
                // cy.wait(2000)
                cy.request({
                    method: 'POST',
                    url: `${baseUrl}/api-clients/`,
                    body: {
                        clientName : clientName,
                        clientEmail : clientEmail
                    }
                }).then((postResp) => {
                    token = postResp.body.accessToken
                    // cy.log(token)
                    expect(postResp.status).to.equal(201)
                    cy.request({
                        method: 'POST',
                        url: `${baseUrl}/orders`,
                        headers: {
                            authorization: 'Bearer ' + token
                        },
                        body: {
                            bookId: 5,
                            customerName: "velocity"
                        }
                    }).then((bookResp) => {
                        expect(bookResp.status).to.equal(201)
                        let bookOrderId = bookResp.body.orderId
                        cy.request({
                            method: "GET",
                            url: `${baseUrl}/orders/${bookOrderId}`,
                            headers: {
                                authorization: "Bearer " + token
                            }
                        }).then((orderResp) => {
                            expect(orderResp.status).to.equal(200)
                            expect(orderResp.body.customerName).to.include('velocity')
                        })
                    });
                })
            //}
            })
        })
    })
})