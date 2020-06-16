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

     cy.visit('/')
     cy.contains('div', 'Inversion').find('a.cart').click()
     cy.visit('/checkout')
     cy.get('input#name').type('cypress_test')
     cy.get('input#address').type('sesami stree')
     cy.get('input#card-holder').type('cypress_test')
     cy.get('input#card-number').type('4242 4242 4242 4242')
      cy.get('input#card-expiry-month').type('05')
      cy.get('input#card-expiry-year').type('23')
      cy.get('input#card-cvc').type('333')
      cy.get('button.btn').click()

      cy.get('div#success').should('contain', 'Successfully bought')
    })
  })
})