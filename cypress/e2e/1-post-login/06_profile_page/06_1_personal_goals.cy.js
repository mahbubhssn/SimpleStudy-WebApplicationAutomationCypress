const baseUrl = Cypress.env("baseUrl");

describe("Test the functionality of setting and achieving personal goals.",
    function () {

        beforeEach(() => {
            cy.visit(baseUrl);
        });

        it('should achieve 100% completion of personal goals', () => {

            cy.login()

            cy.get('a#capsuleMessageLink')
                .should('be.visible')
                .click()
                .wait(1000)

            cy.get('a#profile_percentage_bar')
                .should('be.visible')
                .click()

            cy.get('#favourite_subject_selection')
                .select('Mathematics');

            cy.get('#hardest_subject_selection')
                .select('Mathematics');

            cy.get('#studygoal_selection')
                .select('Improve my grades')

            cy.get('#third_level_selection')
                .select('Yes, University')

            cy.get('#exam_year_selection')
                .select('Transition - 4th Year')

            cy.get('#parent_email')
                .clear()
                .type('abcd@gmail.com')

            cy.get('.alert-mesg')
                .should('have.text','Profile details updated successfully.')

            cy.get('#personal_goal_percentage')
                .should('have.text','100')

        });
    });