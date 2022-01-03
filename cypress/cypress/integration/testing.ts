///<reference types="Cypress"/>

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {
    cy.log('hello')
    
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
})
})