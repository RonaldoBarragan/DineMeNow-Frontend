describe('Gestion de Menu y Platillos', () => {
    beforeEach(() => {
        // Visita la página inicial o de login antes de cada 'it'
        cy.visit('http://localhost:5173');
    });

    it('Visualizar el menu del restaurante', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('cliente@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/cliente/inicio');

        cy.get('#root img.card-img-top').click();
        cy.screenshot('Evidencia Visualizar el menu del restaurante');
    });

    it.skip('Visualizar la informacion detallada de un platillo', () => {
        //cy.screenshot('Evidencia Visualizar la informacion detallada de un platillo');
    });

    it.skip('Filtrar platillos por categoria', () => {
        //cy.screenshot('Evidencia Flitar platillos por categoria');
    });

    it('Registrar un nuevo platillo', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/restaurante/vista');

        cy.get('#root button[data-rr-ui-event-key="Menu"]').click();
        cy.get('#root div.show button.buttonNaranjaDegrade').click();
        cy.get('[name="nomPlato"]').type('Test Plato 2');
        cy.get('[name="categoria"]').select('Bebidas');
        cy.get('[name="descripcion"]').type('Testeo de plato');
        cy.get('[name="precio"]').type('1000');
        cy.get('button[type="submit"]').click();
        cy.screenshot('Evidencia Registrar un nuevo platillo');
    });

    it('Editar un platillo existente', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/restaurante/vista');
        
        cy.get('#root button[data-rr-ui-event-key="Menu"]').click();
        
        cy.get('#root tr:nth-child(2) path[d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"]').click();
        cy.get('[name="categoria"]').select('Postres');
        cy.get('[name="descripcion"]').type(' editado');
        cy.get('button[type="submit"]').click();
        cy.screenshot('Evidencia Editar un platillo existente');
    });

    it('Eliminar un platillo', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/restaurante/vista');
        
        cy.get('#root button[data-rr-ui-event-key="Menu"]').click();
        
        cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-danger-custom').click();
        cy.screenshot('Evidencia Eliminar un platillo');
    });

    it('Registrar un platillo con campos obligatorios vacios', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/restaurante/vista');

        cy.get('#root button[data-rr-ui-event-key="Menu"]').click();
        cy.get('#root div.show button.buttonNaranjaDegrade').click();
        cy.get('[name="categoria"]').select('Bebidas');
        cy.get('[name="precio"]').type('1000');
        cy.get('button[type="submit"]').click();

        cy.wait(500);
        cy.get('.modal').should('be.visible');
        cy.screenshot('Evidencia Registrar un platillo con campos obligatorios vacios');
    });

    it('Registrar un platillo con precio invalido', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('12345678');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/restaurante/vista');

        cy.get('#root button[data-rr-ui-event-key="Menu"]').click();
        cy.get('#root div.show button.buttonNaranjaDegrade').click();
        cy.get('[name="nomPlato"]').type('Test Plato 2');
        cy.get('[name="categoria"]').select('Bebidas');
        cy.get('[name="descripcion"]').type('Testeo de plato');
        cy.get('[name="precio"]').type('-1000');
        cy.get('button[type="submit"]').click();

        cy.wait(500);
        cy.get('.modal').should('be.visible');
        cy.screenshot('Evidencia Registrar un platillo con precio invalido');
    });

    it.skip('Visualizar disponibilidad de un platillo', () => {
        //cy.screenshot('Evidencia Visualizar disponibilidad de un platillo');
    });
})