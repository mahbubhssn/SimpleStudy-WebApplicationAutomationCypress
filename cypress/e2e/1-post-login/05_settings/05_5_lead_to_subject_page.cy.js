const baseUrl = Cypress.env("baseUrl");
const settingsUrl = Cypress.env("settingsUrl");

describe("Test the functionality of links to subjects leading to the subjects page.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should lead to subject page from settings', () => {

            cy.login()

            cy.visit(settingsUrl)

            cy.get('#subjectList > li')
                .should('be.visible')
                .children()
                .last()
                .then(($option) => {

                    const subjectName = $option.text();
                    cy.get('#subjectList > li')
                        .should('be.visible')
                        .children()
                        .last()
                        .click()
                        .wait(1000)

                    cy.title().then(title => {
                        expect(title.toLowerCase()).to.include(subjectName.toLowerCase().trim());
                    });
                });
        });
    });