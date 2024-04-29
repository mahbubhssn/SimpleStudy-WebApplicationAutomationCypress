const baseUrl = Cypress.env("baseUrl");

describe("Test the functionality of accessing revision questions from notes.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should able to access revision questions from notes.', () => {

            cy.login()

            cy.get('[href="https://simplestudy.cloud/account/notes"]')
                .click()
                .wait(1000)

            //Locate the revision questions associated with the note. (not found)



        });
    });