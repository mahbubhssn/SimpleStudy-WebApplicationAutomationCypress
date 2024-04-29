const baseUrl = Cypress.env("baseUrl");

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught Exception:', err.message);
    return false;
});

describe("Test the functionality of opening a quiz from sample answer.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should able to open quiz from sample answer.', () => {

            cy.login()

            cy.visit("https://simplestudy.cloud/account/samples?type=essays")
                .wait(2000)

            cy.get('.btn > .primary-button').should('be.visible').click()

            cy.get('.btns > [href="https://simplestudy.cloud/account/quiz"]').click()

            cy.get(':nth-child(2) > .main-row > .right > .right-button > .primary-button')
                .click()
                .wait(1000)

            cy.get('.inner > :nth-child(1) > .primary-button')
                .click()
                .wait(1000)

            cy.get('.check > .wrap > .check-answer-btn')
                .should('be.disabled')

            cy.get('#option_a')
                .click()
                .wait(1000)

            cy.get('#option_a')
                .should('be.visible')
                .should('not.be.disabled')

            cy.get('.check > .wrap > .check-answer-btn')
                .should('be.visible')
                .should('not.be.disabled')

        });
    });