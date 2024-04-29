/// <reference types="Cypress" />

describe('Email login', () => {
  it('Test the functionality of logging in with email.', () => {
    // Step 1: Navigate to the login page
    cy.navigateToLoginPage();

    // Step 2: Enter valid email and password details
    cy.enterLoginDetails(Cypress.env('supportEmail'), Cypress.env('supportPassword'));

    // Step 3: Submit the login form
    cy.get('form').submit();

    // Step 4: Verify that the user is successfully logged in and redirected to the appropriate page
    cy.location('pathname').should('not.contain', '/login');
  });
});



