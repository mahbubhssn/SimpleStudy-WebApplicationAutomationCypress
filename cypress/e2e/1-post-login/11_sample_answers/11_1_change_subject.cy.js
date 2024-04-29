const baseUrl = Cypress.env("baseUrl");

describe("Test the functionality of changing the subject for sample answers.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should able to change subject for sample answers.', () => {

            cy.login()

            cy.visit("https://simplestudy.cloud/account/samples?type=essays")
                .wait(2000)

            cy.get('#nav-sample-answers > [href=""]')
                .trigger('mouseover')

            cy.visit('https://simplestudy.cloud/account/samples?type=experiments')
                .wait(2000)

            cy.get(':nth-child(1) > .title > .arrow-right')
                .should('be.visible')
                .click()

            cy.get('.activated > .list > ul > :nth-child(2) > a')
                .should('be.visible')
                .then(($option) => {

                    const subjectName = $option.text();
                    cy.get('.activated > .list > ul > :nth-child(2) > a')
                        .click()
                        .wait(2000)

                    cy.get('.left-nav-by-topic > :nth-child(1) > .title')
                        .invoke('text')
                        .then((text) => {
                            expect(text.trim()).to.equal(subjectName.trim())
                        });

                });

        });
    });