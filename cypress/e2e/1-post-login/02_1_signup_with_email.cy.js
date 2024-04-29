/// <reference types="Cypress" />

describe('Test the functionality of signing up with email.', () => {
  const baseUrl = Cypress.env('baseUrl'); 

  it('Check Email Sign up', () => {
      // Visit the base URL
      cy.visit(baseUrl);

      // Navigate to the sign-up page
      cy.get('a.getPremium').click({ multiple: true, force: true });
      cy.selectExam();
      cy.selectSubject('Psychology');

      const timestamp = new Date().getTime();
      const email = `validemail${timestamp}@gmail.com`;

      cy.fillSignUpForm('Arifuz Zaman Antor', email, 'validPass2024');
      
      cy.wait(2000); 
      cy.location('pathname').should('not.contain', '/login');
  });
});
