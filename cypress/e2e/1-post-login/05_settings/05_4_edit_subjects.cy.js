const baseUrl = Cypress.env("baseUrl");
const settingsUrl = Cypress.env("settingsUrl");
const { data } = require("./data");

describe("Test the functionality of editing the user's selected subjects.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should update subjects from settings', () => {

            cy.login()

            cy.visit(settingsUrl)

            cy.get('.button-type2')
                .should('be.visible')
                .click()

            cy.get(':nth-child(4) > .in-box').then(($ele) => {
                if (!$ele.hasClass('selected')) {
                    cy.get(':nth-child(4) > .in-box')
                        .should('be.visible')
                        .click()
                }
            })

            cy.get('[type="submit"]')
                .click()
                .wait(6000)

            cy.get('.h-type-2 > a')
                .should('be.visible')
                .contains(data.subjectName)
        });
    });