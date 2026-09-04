describe('Administración General', () => {
     // Opcional: Ejecutar algo antes de cada prueba
    beforeEach(() => {
        // Visita la página inicial o de login antes de cada 'it'
        cy.visit('http://localhost:5173'); 
    });

    it('Acceder al panel de administracion', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('admin@dinemenow.com');
        cy.get('#formBasicPassword').type('admin123');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/adminp/panel');
        cy.screenshot('Evidencia Acceder al panel de administracion');
    });

    it('Visualizar el dashboard administrativo', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('admin@dinemenow.com');
        cy.get('#formBasicPassword').type('admin123');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/adminp/panel');
        cy.screenshot('Evidencia Visualizar el dashboard administrativo');
    });

    it('Visualizar el listado de usuarios', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('admin@dinemenow.com');
        cy.get('#formBasicPassword').type('admin123');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/adminp/panel');
        cy.get('#root button[data-rr-ui-event-key="Accs cliente"]').click();
        cy.screenshot('Evidencia Visualizar el listado de usuarios');
    });

    it('Cerrar sesion del administrador', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('admin@dinemenow.com');
        cy.get('#formBasicPassword').type('admin123');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/adminp/panel');
        cy.get('.buttonBlancoFGrisNBorder').click();
        cy.get('#root button.buttonCerrarSesion').focus();
        cy.screenshot('Evidencia Cerrar sesion del administrador');
        cy.get('#root button.buttonCerrarSesion').click();
    });
})