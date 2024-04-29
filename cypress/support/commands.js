Cypress.Commands.add('selectExam', () => {
    cy.get('div.in-box.checkmark[data-id="GB"]').click();
    cy.get('button.check-answer-btn').click();
    cy.contains('.right h3', 'A-Level').click();
    cy.get('button.check-answer-btn').click();
});

Cypress.Commands.add('selectSubject', (subjectName) => {
    cy.contains('.in-box h3', subjectName).click();
    cy.get('button.check-answer-btn').should('be.visible').click();
});

Cypress.Commands.add('fillSignUpForm', (name, email, password) => {
    cy.get('#fname').type(name);
    cy.get('#email').type(email);
    cy.get('#password1').type(password);
    //cy.get('.check-answer-btn').click();
});

Cypress.Commands.add('navigateToLoginPage', () => {
    cy.visit(`${Cypress.env('baseUrl')}/login`);
    cy.get('.content_area h2').first().should('have.text', 'Sign In');
});

Cypress.Commands.add('enterLoginDetails', (email, password) => {
    cy.get('[name="email"]').clear().type(email).should('have.value', email);
    cy.get('[name="password"]').clear().type(password).should('have.value', password);
});

Cypress.Commands.add('signUpInfo', () => {
    cy.get('.wrapper > :nth-child(4) > [href="https://simplestudy.cloud/signup"]')
        .should('be.visible')
        .click();

    cy.get('h1')
        .should('be.visible')
        .contains('Where are you studying?');

    cy.get(':nth-child(1) > .in-box')
        .should('be.visible')
        .click();

    cy.get('.check-answer-btn')
        .should('be.visible')
        .click();

    cy.get(':nth-child(3) > .in-box')
        .should('be.visible')
        .click();

    cy.get('.check-answer-btn')
        .should('be.visible')
        .click();

    cy.get('.checkboxes-tab1 > :nth-child(5) > .in-box')
        .should('be.visible')
        .click();

    cy.get('.check-answer-btn')
        .should('be.visible')
        .click();
});

Cypress.Commands.add('login', () => {
    cy.get(':nth-child(4) > .getPremium-login')
        .should('be.visible')
        .click()

    cy.get('#email')
        .should('be.visible')
        .type("mahbubhossainamin@gmail.com")

    cy.get('#pwd')
        .should('be.visible')
        .type("Abcd$1234")

    cy.get('button')
        .should('be.visible')
        .click()

    cy.get('#quiz-streaks-popup > .popup-cont > .close').then($element => {
        if ($element.is(':visible')) {
            cy.get('#quiz-streaks-popup > .popup-cont > .close')
                .click();
        } else {
            cy.log('Quiz popup is not visible');
        }
    })

    cy.wait(4000)
});

Cypress.Commands.add('cancelSubscription', () => {

    cy.visit("https://simplestudy.cloud/account/settings");

    cy.wait(1000)

    cy.get('.buttons > .primary-button-transparent')
        .click()

    cy.get('.best-plan > .card-head > div')
        .click()

    cy.get('.white')
        .click()

    cy.get('.white')
        .click()

    cy.get('.white')
        .click()

    cy.get('.white')
        .click()

    cy.get('.swal-button')
        .click()

});