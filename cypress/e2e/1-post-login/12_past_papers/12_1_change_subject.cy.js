const baseUrl = Cypress.env("baseUrl");

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught Exception:', err.message);
    return false;
});

describe("Test the functionality of changing the subject for past papers.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should able to change subject for past papers.', () => {

            cy.login()

            cy.get('#nav-exams > [href=""] > .arrow').click()

            cy.visit('https://simplestudy.cloud/account/papers').wait(2000)

            cy.get('.inside_wrapper')
                .should('be.visible')
                .children()
                .last()
                .then(($option) => {

                    const lastOptionText = $option.text();
                    cy.get('.inside_wrapper')
                        .should('be.visible')
                        .children()
                        .last().click().wait(1000)

                    cy.get('#highlightedSubject').invoke('text').then(text => {
                        expect(text.trim()).to.equal(lastOptionText.trim())
                    });
                });
        });
    });