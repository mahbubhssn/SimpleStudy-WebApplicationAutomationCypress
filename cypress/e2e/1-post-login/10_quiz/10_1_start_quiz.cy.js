const baseUrl = Cypress.env("baseUrl");

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught Exception:', err.message);
    return false;
});

describe("Test the functionality of starting a quiz.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('quiz feature should be functional', () => {

            cy.login()

            cy.get('p').contains('Quiz')
                .click()
                .wait(1000)

            cy.get(':nth-child(2) > .main-row > .right > .right-button > .primary-button')
                .click()
                .wait(1000)

            cy.get('.inner > :nth-child(1) > .primary-button')
                .click()
                .wait(1000)

            cy.get('.check > .wrap > .check-answer-btn')
                .should('be.disabled')

            cy.get('#option_a')
                .click()
                .wait(1000)

            cy.get('#option_a')
                .should('be.visible')
                .should('not.be.disabled')

            cy.get('.check > .wrap > .check-answer-btn')
                .should('be.visible')
                .should('not.be.disabled')

        });
    });