describe('Administracion de Reservas', () => {
    // Opcional: Ejecutar algo antes de cada prueba
    beforeEach(() => {
        // Visita la página inicial o de login antes de cada 'it'
        cy.visit('http://localhost:5173');
    });

    it('Crear una Reserva correctamente', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('cliente@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/cliente/inicio');

        cy.get('#root img.card-img-top').click();
        cy.get('#Fecha_Reserva').type('2026-09-04');
        cy.get('#Hora_Reserva').type('01:00');
        cy.get('div.border small.text-muted').click();
        cy.get('#Solicitudes_Especiales').type('Sin mani');
        cy.get('#Nombre_Cliente').type('Cliente');
        cy.get('#Telefono_Cliente').type('43323433');
        cy.get('button.size-letra-propio').click();
        cy.get('div.modal-footer button.buttonNaranjaDegrade').click();

        cy.screenshot('Evidencia Crear una Reserva correctamente');
    });

    it('Crear una Reserva con campos obligatorios vacios', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('cliente@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/cliente/inicio');

        cy.get('#root img.card-img-top').click();
        cy.get('#Fecha_Reserva').type('2026-09-04');
        cy.get('div.border small.text-muted').click();
        cy.get('#Solicitudes_Especiales').type('Sin mani');
        cy.get('#Telefono_Cliente').type('43323433');

        cy.get('div.modal-footer button.buttonNaranjaDegrade').click();

        cy.screenshot('Evidencia Crear una Reserva con campos obligatorios vacios');
    });

    it('Crear una Reserva para una mesa no disponible', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('cliente@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/cliente/inicio');

        cy.get('#root img.card-img-top').click();
        cy.get('#Fecha_Reserva').type('2026-09-04');
        cy.get('#Hora_Reserva').type('01:00');
        cy.get('#Solicitudes_Especiales').type('Sin mani');
        cy.get('#Nombre_Cliente').type('Cliente');
        cy.get('#Telefono_Cliente').type('43323433');
        cy.get('button.size-letra-propio').click();
        cy.get('div.modal-footer button.buttonNaranjaDegrade').click();

        cy.screenshot('Evidencia Crear una Reserva para una mesa no disponible');
    });

    it('Consultar mis reservas', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('cliente@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/cliente/inicio');
        
        cy.get('#root button.btn-sm svg').click();
        cy.get('#root a[href="/cliente/reservas"] span').click();
        cy.screenshot('Evidencia Consultar mis reservas');
    });

    it.skip('Consultar el detalle de una reserva', () => {
        //cy.screenshot('Evidencia Consultar el detalle de una reserva');
    });

    it.skip('Modificar una reserva', () => {
        //cy.screenshot('Evidencia Modificar una reserva');
    });

    it.skip('Cancelar una reserva', () => {
        //cy.screenshot('Evidencia Cancelar una reserva');
    });

    it.skip('Intentar cancelar una reserva ya cancelada', () => {
        //cy.screenshot('Evidencia Intentar cancelar una reserva ya cancela');
    });

    it('Crear una reserva con una fecha pasada', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('cliente@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/cliente/inicio');

        cy.get('#root img.card-img-top').click();
        cy.get('#Fecha_Reserva').type('2026-08-01');
        cy.get('#Hora_Reserva').type('01:00');
        cy.get('div.border small.text-muted').click();
        cy.get('#Solicitudes_Especiales').type('Sin mani');
        cy.get('#Nombre_Cliente').type('Cliente');
        cy.get('#Telefono_Cliente').type('43323433');
        cy.get('button.size-letra-propio').click();
        cy.get('div.modal-footer button.buttonNaranjaDegrade').click();

        cy.wait(500);
        cy.get('.modal').should('be.visible');
        cy.screenshot('Evidencia Crear una reserva con una fecha pasada');
    });

    it('Crear una reserva con una hora invalida', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('cliente@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/cliente/inicio');

        cy.get('#root img.card-img-top').click();
        cy.get('#Fecha_Reserva').type('2026-09-04');
        cy.get('#Hora_Reserva').type('00:00');
        cy.get('div.border small.text-muted').click();
        cy.get('#Solicitudes_Especiales').type('Sin mani');
        cy.get('#Nombre_Cliente').type('Cliente');
        cy.get('#Telefono_Cliente').type('43323433');
        cy.get('button.size-letra-propio').click();
        cy.get('div.modal-footer button.buttonNaranjaDegrade').click();

        cy.wait(500);
        cy.get('.modal').should('be.visible');
        cy.screenshot('Evidencia Crear una reserva con una hora invalida');
    });

    it.skip('Validar la actualizacion de disponibilidad de mesas despues de una reserva', () => {
        //cy.screenshot('Evidencia Validar la actualizacion de disponibilidad de mesas despues de una reserva');
    });

    it('Consultar el historial de reservas', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('cliente@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/cliente/inicio');
        
        cy.get('#root button.btn-sm svg').click();
        cy.get('#root a[href="/cliente/reservas"] span').click();
        
        cy.get('#root button[data-rr-ui-event-key="Pasadas"] span').click();

        cy.screenshot('Evidencia Consultar el historial de reservas');
    });
})