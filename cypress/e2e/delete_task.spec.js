describe('Deleting a task', () => {
    it('should delete a task', () => {
        cy.visit('/');
        cy.get('.new-todo').type('New task{enter}');
        cy.get('.destroy').invoke('show').click();
        //TODO Метод для удаления всех елементов
        // cy.get('.todo-list li').each($el => {
        //     cy.wrap($el).find('.destroy').invoke('show').click();
        // });
        cy.contains('.todo-list', 'New task').should('not.exist');
    });
});
