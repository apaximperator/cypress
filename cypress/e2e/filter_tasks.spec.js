describe('Checking task filtering', () => {
    it('should display tasks based on the selected filter', () => {
        cy.visit('/');
        cy.get('.new-todo').type('Completed task{enter}');
        cy.get('.new-todo').type('Active task{enter}');
        cy.contains('.todo-list label', 'Completed task').siblings('.toggle').click();

        cy.get('.filters').contains('Completed').click();
        cy.get('.todo-list li').should('have.length', 1);
        cy.contains('.todo-list label', 'Completed task').should('exist');

        cy.get('.filters').contains('Active').click()
        cy.get('.todo-list li').should('have.length', 1);
        cy.contains('.todo-list label', 'Active task').should('exist');

        cy.get('.filters').contains('All').click();
        cy.get('.todo-list li').should('have.length', 2)
    });
});
