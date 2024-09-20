///<reference types="cypress"/>

const url = 'https://jsonplaceholder.typicode.com/'
describe("Sanity for HTTP methods",()=>{
    it('GET method', ()=>{
        cy.request('GET', `${url}posts`).then((getResp)=>{
            expect(getResp.status).to.equal(200)
            cy.log(getResp)
        })

        cy.request({
            method : 'GET',
            url : `${url}posts/10`
        }).then((getResponse)=>{
            expect(getResponse.statusText).equal('OK')
            expect(getResponse.body.title).to.include('optio molestias id quia eum')
            expect(getResponse.body.id).to.equal(10)
        })
    })

    it('post method',() =>{
        cy.request({
            method: 'POST',
            url: `${url}posts`,
            body : {
                userId : 14,
                title : 'This is for testing'
            }
        }).then((postReq)=>{
            expect(postReq.status).to.equal(201)
            expect(postReq.body.userId).to.equal(14)
            expect(postReq.body.title).to.include('This is for testing')
        })
    })

    it('PUT',()=>{
        cy.request({
            method: 'PUT',
            url: `${url}posts/3`,
            body : {
                userId: 15,
                title : 'this is after the PUT method use'
            }
        }).then((putResp)=>{
            expect(putResp.status).to.equal(200)
            expect(putResp.body.title).to.include('this is after the PUT method use')
            expect(putResp.body.userId).to.equal(15)
        })
    })

    it.only('DELETE',() => {
        cy.request({
            method: 'DELETE',
            url: `${url}posts/3`
        }).then((delResp)=>{
            expect(delResp.status).to.equal(200)
            //expect(delResp.body.title).not.have.property('id')
        })
    })
})