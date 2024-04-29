describe('Test the ability to select exams and subjects during onboarding', () => {
    const baseUrl = Cypress.env('baseUrl');

    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it('Open the onboarding flow', () => {
        cy.get('a.getPremium').click({ multiple: true, force: true });
    });

    it('Verify that users can select their desired exam', () => {
        cy.get('a.getPremium').click({ multiple: true, force: true });
        cy.selectExam();
    });

    it('Verify that users can select subjects relevant to their chosen exams', () => {
        cy.get('a.getPremium').click({ multiple: true, force: true });
        cy.selectExam();
        cy.selectSubject('Psychology');
    });
});