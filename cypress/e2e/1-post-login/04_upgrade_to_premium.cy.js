const baseUrl = Cypress.env("baseUrl");

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught Exception:', err.message);
    return false;
});

describe("Test the upgrade process to premium using Stripe payment.",
    function () {

        beforeEach(() => {

                cy.visit(baseUrl)
        });

        it('should upgrade to premium using Stripe payment', () => {

            cy.login()

            cy.get('.go-premium-card > .primaryButton')
                .click()

            cy.get('.best-value > .pan > .btns > .plan_pay_button')
                .click()
                .wait(6000)

            cy.origin(
                'https://checkout.stripe.com/',
                {},
                () => {
                    Cypress.on(
                        'uncaught:exception',
                        (err) =>
                            !err.message.includes('ResizeObserver loop') &&
                            !err.message.includes('Error in protected function')
                    )

                    cy.get("#cardNumber")
                        .type("4242424242424242")

                    cy.get("#cardCvc")
                        .type("123")

                    cy.get("#cardExpiry")
                        .type(
                            "12" + (new Date().getFullYear() + 10).toString().substr(-2)
                        )
                    cy.get("#billingName")
                        .type("Mahbub Hossain")

                    cy.wait(1000)

                    cy.get('[type="submit"]')
                        .click()
                        .wait(20000)
                }
            )

            cy.get('button')
                .should('be.visible')
                .click()

            if(Cypress.browser.name != 'firefox'){
                cy.get('#email')
                    .should('be.visible')
                    .type("mahbubhossainamin@gmail.com")

                cy.get('#pwd')
                    .should('be.visible')
                    .type("Abcd$1234")

                cy.get('button')
                    .should('be.visible')
                    .click()
            }

            cy.get('#premium-capsule')
                .should('be.visible')
                .contains("Premium")

            cy.wait(4000)
        });

        afterEach(() => {
            cy.cancelSubscription();
        });
    });