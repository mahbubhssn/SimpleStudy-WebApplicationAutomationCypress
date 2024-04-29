const baseUrl = Cypress.env("baseUrl");

describe("Test the functionality of changing the subject for timed questions.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should able to change subject for timed questions.', () => {

            cy.login()

            cy.get('.subjects-list > .subject')
                .first()
                .click()

            cy.get('[data-attr="timed-questions"]')
                .should('be.visible')
                .click()

            cy.get(':nth-child(1) > .title > .arrow-right')
                .should('be.visible')
                .click()

            cy.get('.list > ul')
                .should('be.visible')
                .children()
                .eq(1)
                .then(($option) => {

                    const secondOptionText = $option.text();
                    cy.get('.list > ul')
                        .should('be.visible')
                        .children()
                        .eq(1).click().wait(1000)

                    cy.get(':nth-child(1) > .title').invoke('text').then(text => {
                        expect(text.trim()).to.equal(secondOptionText.trim())
                    });
                });

        });
    });