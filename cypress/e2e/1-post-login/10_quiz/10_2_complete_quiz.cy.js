const baseUrl = Cypress.env("baseUrl");

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught Exception:', err.message);
    return false;
});

describe("Test the functionality of completing a quiz.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('quiz completion feature should be functional', () => {

            cy.login()

            cy.get('p').contains('Quiz')
                .click()

            cy.get(':nth-child(2) > .main-row > .right > .right-button > .primary-button')
                .click()

            cy.get('.inner > :nth-child(1) > .primary-button')
                .click()

            cy.get('#option_a').click().wait(1000)
            cy.get('.check > .wrap > .check-answer-btn').click().wait(1000)
            cy.get('.correct > .wrap > .nextQuestionButton').click().wait(1000)

            cy.get('#option_c').click().wait(1000)
            cy.get('.check > .wrap > .check-answer-btn').click().wait(1000)
            cy.get('.correct > .wrap > .nextQuestionButton').click().wait(1000)

            cy.get('#option_b').click({ force: true }).wait(1000)
            cy.get('.check > .wrap > .check-answer-btn').click().wait(1000)
            cy.get('.correct > .wrap > .nextQuestionButton').click().wait(1000)

            cy.get('#option_d').click().wait(1000)
            cy.get('.check > .wrap > .check-answer-btn').click().wait(1000)
            cy.get('.correct > .wrap > .nextQuestionButton').click().wait(1000)

            cy.get('#option_a').click().wait(1000)
            cy.get('.check > .wrap > .check-answer-btn').click().wait(1000)
            cy.get('.correct > .wrap > .nextQuestionButton').click().wait(1000)

            cy.get('#option_d').click().wait(1000)
            cy.get('.check > .wrap > .check-answer-btn').click().wait(1000)
            cy.get('.correct > .wrap > .nextQuestionButton').click().wait(1000)

            cy.get('#option_b').click().wait(1000)
            cy.get('.check > .wrap > .check-answer-btn').click().wait(1000)
            cy.get('.correct > .wrap > .nextQuestionButton').click().wait(1000)

            cy.get('#option_c').click().wait(1000)
            cy.get('.check > .wrap > .check-answer-btn').click().wait(1000)
            cy.get('.correct > .wrap > .nextQuestionButton').click().wait(1000)

            cy.get('#option_d').click().wait(1000)
            cy.get('.check > .wrap > .check-answer-btn').click().wait(1000)
            cy.get('.correct > .wrap > .finishQuizButton').click().wait(1000)

            cy.get('h1').contains('Quiz Complete').should('be.visible')

            cy.get('p').contains('100% questions correct').should('be.visible')

        });
    });