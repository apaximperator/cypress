describe('Marking a task as done', () => {
    it('should mark a task as done', () => {
        cy.visit('/');
        cy.get('.new-todo').type('New task{enter}');
        cy.contains('.todo-list label', 'New task').siblings('.toggle').click();
        cy.get('.completed').contains('New task').should('exist');
    });
});
