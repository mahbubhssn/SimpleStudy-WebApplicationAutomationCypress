const baseUrl = Cypress.env("baseUrl");

describe("Test the functionality of opening topics within the sample answers section.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should able to open topic list.', () => {

            cy.login()

            cy.visit("https://simplestudy.cloud/account/samples?type=essays")
                .wait(2000)

            cy.get('#topic_list > .title')
                .click()
                .wait(2000)

            cy.get('#topic_list > .title')
                .click()
                .wait(2000)

            cy.get('#topic_list > .list > ul > :nth-child(1) > a')
                .should('be.visible')
                .should('not.be.disabled')

        });
    });