const baseUrl = Cypress.env("baseUrl");

describe("Test the functionality of print preview within the notes section.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should able to preview print within the notes section.', () => {

            cy.login()

            cy.get('[href="https://simplestudy.cloud/account/notes"]')
                .click()
                .wait(1000)

            //Access the print preview option. (preview option is not available. file gets auto download)

        });
    });