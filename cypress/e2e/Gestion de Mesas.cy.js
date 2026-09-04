describe('Gestión de Mesas', () => {
    // Opcional: Ejecutar algo antes de cada prueba
    beforeEach(() => {
        // Visita la página inicial o de login antes de cada 'it'
        cy.visit('http://localhost:5173');
    });

    it('Visualizar mesas disponibles', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();

        cy.url().should('include', '/restaurante/vista');
        cy.get('.per > .mb-4 > :nth-child(3)').click();
        cy.screenshot('Evidencia Visualizar mesas disponibles');
    });

    it('Registrar una nueva mesa', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        
        cy.url().should('include', '/restaurante/vista');
        cy.get('.per > .mb-4 > :nth-child(3)').click();
        cy.get('#root div.show button.buttonNaranjaDegrade').click();
        cy.get('input[placeholder="Ej: 1"]').type('2');
        cy.get('input[placeholder="Ej: 4"]').type('6');
        cy.screenshot('Evidencia Registrar una nueva mesa');
        cy.get('button.border-0').click();
        cy.wait(500);
        cy.get('.modal').should('not.exist');
    });

    it('Editar informacion de una mesa', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        
        cy.url().should('include', '/restaurante/vista');
        cy.get('.per > .mb-4 > :nth-child(3)').click();
        cy.get('.align-middle > :nth-child(2) > .d-flex > :nth-child(1)').click();
        cy.wait(500);
        cy.get('.modal').should('be.visible');
        cy.screenshot('Evidencia Editar informacion de una mesa');
    });

    it('Eliminar una mesa', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        
        cy.url().should('include', '/restaurante/vista');
        cy.get('.per > .mb-4 > :nth-child(3)').click();
        cy.get('.align-middle > :nth-child(2) > .d-flex > :nth-child(2)').click();
        cy.screenshot('Evidencia Eliminar una mesa');
        cy.wait(500);
        cy.get('.align-middle > :nth-child(2) > .d-flex > :nth-child(2)').should('not.exist');
    });

    it('Registrar una mesa con campos obligatorios vacios', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        
        cy.url().should('include', '/restaurante/vista');
        cy.get('.per > .mb-4 > :nth-child(3)').click();
        cy.get('#root div.show button.buttonNaranjaDegrade').click();
        cy.get('button.border-0').click();
        cy.screenshot('Evidencia Registrar una mesa con campos obligatorios vacios');
        cy.wait(500);
    });

    it('Registrar una mesa con capacidad invalida', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        
        cy.url().should('include', '/restaurante/vista');
        cy.get('.per > .mb-4 > :nth-child(3)').click();
        cy.get('#root div.show button.buttonNaranjaDegrade').click();
        cy.get('input[placeholder="Ej: 1"]').type('2');
        cy.get('input[placeholder="Ej: 4"]').type('-6');
        cy.get('button.border-0').click();
        cy.wait(500);
        cy.get('.modal').should('exist');
        cy.screenshot('Evidencia Registrar una mesa con capacidad invalida');
    });

    it('Cambiar el estado de disponibilidad de una mesa', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        
        cy.url().should('include', '/restaurante/vista');
        cy.get('.per > .mb-4 > :nth-child(3)').click();
        cy.get('#root td.d-flex button:nth-child(1) svg').eq(0).click();
        cy.get('select.form-select').select('false');
        cy.wait(500);
        cy.get('.modal').should('exist');
        cy.screenshot('Evidencia Cambiar el estado de disponibilidad de una mesa');
        cy.get('.modal-footer > .buttonNaranjaDegrade').click();
        cy.wait(500);
        cy.get('.modal').should('not.exist');
    });

    it('Consultar la capacidad de una mesa', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        
        cy.url().should('include', '/restaurante/vista');
        cy.get('.per > .mb-4 > :nth-child(3)').click();
        cy.screenshot('Evidencia Consultar la capacidad de una mesa');
    });
})