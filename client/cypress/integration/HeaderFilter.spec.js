describe('My First test', () => {
    it('Visits the kitchen sink', () => {
        cy.visit('http://localhost:3000');

        // Check that search input works correctly
        cy
            .get('#searchFilter')
            .type('fake movie search')
            .should('have.value', 'fake movie search');

        // Check that search by filter controls work correctly
        cy
            .get('.headerSubFilter-button')
            .click({ multiple: true })
            .should('have.class', 'btn--secondary')
    });
});