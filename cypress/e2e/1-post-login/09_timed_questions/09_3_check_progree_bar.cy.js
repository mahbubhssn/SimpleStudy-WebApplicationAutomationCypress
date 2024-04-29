const baseUrl = Cypress.env("baseUrl");

describe("Test the functionality of the progress bar within the timed questions section.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should function progress bar within the timed questions section.', () => {

            cy.login()

            cy.get('.subjects-list > .subject')
                .first()
                .click()

            cy.get('[data-attr="timed-questions"]')
                .should('be.visible')
                .click()

            //Verify that the progress bar accurately reflects the completion status of timed questions. (How to judge)

        });
    });