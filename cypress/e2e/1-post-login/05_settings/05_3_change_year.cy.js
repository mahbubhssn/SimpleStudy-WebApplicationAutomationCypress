const baseUrl = Cypress.env("baseUrl");
const settingsUrl = Cypress.env("settingsUrl");

describe("Test the functionality of changing the user's year setting.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should update year from settings', () => {

            cy.login()

            cy.visit(settingsUrl)

            cy.get('#country_code')
                .should('be.visible')
                .children()
                .first()
                .then(($option) => {

                    const firstOptionText = $option.text();

                    cy.get('#country_code')
                        .should('be.visible')
                        .select(firstOptionText);
                });

            cy.get('#country_code')
                .should('be.visible')
                .children()
                .last()
                .then(($option) => {

                    const lastOptionText = $option.text();
                    cy.get('#country_code')
                        .should('be.visible')
                        .select(lastOptionText);
                });

            cy.get('#exam_selection')
                .should('be.visible')
                .children()
                .last()
                .then(($option) => {

                    const lastOptionText = $option.text();
                    cy.get('#exam_selection')
                        .should('be.visible')
                        .select(lastOptionText);
                });

            cy.get('#exam_year')
                .should('be.visible')
                .children()
                .last()
                .then(($option) => {

                    const lastOptionText = $option.text();
                    cy.get('#exam_year')
                        .should('be.visible')
                        .select(lastOptionText);
                });

            cy.get('.personal-info > .right-buttons > .primary-button')
                .should('be.visible')
                .click()

            cy.get('.alert-mesg')
                .should('be.visible')
                .contains("Profile updated successfully.")
        });
    });