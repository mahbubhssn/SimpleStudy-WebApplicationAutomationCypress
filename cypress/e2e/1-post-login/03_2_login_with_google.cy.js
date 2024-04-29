const baseUrl = Cypress.env("baseUrl");

describe("Test the functionality of signing up with Google.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should sign up using Gmail credentials', () => {

            cy.navigateToLoginPage()
            logIntoGoogle("mhssn1003", "Abcd$1234")
        });
    });

function logIntoGoogle(username, password) {
    Cypress.on(
        'uncaught:exception',
        (err) =>
            !err.message.includes('ResizeObserver loop') &&
            !err.message.includes('Error in protected function')
    )

    cy.get('[href="https://simplestudy.cloud/pages/googleAuth"]')
        .should('be.visible')
        .click();

    cy.origin(
        'https://accounts.google.com',
        {
            args: {
                username,
                password,
            },
        },
        ({username, password}) => {
            Cypress.on(
                'uncaught:exception',
                (err) =>
                    !err.message.includes('ResizeObserver loop') &&
                    !err.message.includes('Error in protected function')
            )

            cy.get('input[type="email"]')
                .should('be.visible')
                .type(username, {
                    log: false,
                })

            cy.get('[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 BqKGqe Jskylb TrZEUc lw1w4b"]')
                .should('be.visible')
                .click()
                .wait(6000)

            cy.get('[type="password"]').should('be.visible')
                .type(password, {
                    log: false,
                })

            cy.get('[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 BqKGqe Jskylb TrZEUc lw1w4b"]')
                .should('be.visible')
                .click()
                .wait(6000)

            cy.contains('.VfPpkd-vQzf8d', 'Continue')
                .should('be.visible')
                .click()
                .wait(10000)

        }
    )
}