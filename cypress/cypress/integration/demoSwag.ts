///<reference types="Cypress"/>

describe('Ecommerce site Swag lab',()=>{
    it('Add an item to Cart',()=>{

      cy.visit('http://automationpractice.com/index.php')
      cy.get('#header_logo').should('be.visible')
      cy.get('[title="Women"]').contains('Women').click()
      cy.get('#layered_category_4').should('not.be.checked').check()
      cy.get('#layered_id_attribute_group_1').should('not.be.checked').check()
  })
 })