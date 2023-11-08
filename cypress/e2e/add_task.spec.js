describe('Adding a new task', () => {
    it('should add a new task', () => {
        cy.visit('/');
        cy.get('.new-todo').type('New task{enter}');
        cy.contains('.todo-list', 'New task').should('exist');
    });
});
