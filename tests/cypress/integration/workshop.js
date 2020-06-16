/// <reference types="Cypress" />
describe('Given a valid user and products in DB', () => {
  context('When user login', () => {
    it('Then he should be able to purchase a game', () => {
     cy.visit('/user/signin')
     cy.get('input#email').type('cypress_test@gmail.com')
     cy.get('input#password').type('test12345')
     cy.get('button.btn').click()
     cy.visit('/user/profile')
     cy.get('h1').should('contain', 'User Profile') 
    })
  })
})