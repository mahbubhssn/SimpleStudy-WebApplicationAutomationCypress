const baseUrl = Cypress.env("baseUrl");

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught Exception:', err.message);
    return false;
});

describe("Test the functionality of accessing the marking scheme for a timed question.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should able to access the marking scheme for a timed question.', () => {

            cy.login()

            cy.get('.subjects-list > .subject')
                .first()
                .click()

            cy.get('[data-attr="timed-questions"]')
                .should('be.visible')
                .click()

            cy.get('.markingScheme > button').eq(0)
                .click()

            cy.get('.inner > img').should('be.visible')

        });
    });