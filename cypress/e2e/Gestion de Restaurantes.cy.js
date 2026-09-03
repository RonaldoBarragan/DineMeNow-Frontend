describe('Gestión de Restaurantes', () => {

    // Opcional: Ejecutar algo antes de cada prueba
    beforeEach(() => {
        // Visita la página inicial o de login antes de cada 'it'
        cy.visit('http://localhost:5173');
    });

    it('Registrar un nuevo Restaurante', () => {

        cy.get('#root button.buttonRegistrarRE').click();
        cy.get('#root [name="nombre"]').type('Test Restaurante');
        cy.get('#root [name="razonSocial"]').type('Empresa');
        cy.get('#root [name="nit"]').type('12345678');
        cy.get('#root [name="propietario"]').type('Carlos');
        cy.get('#root [name="correo"]').type('juancardenas083@gmail.com');
        cy.get('#root [name="telefono"]').type('2323124332');
        cy.get('#root [name="categoria"]').select('Comida Típica');
        cy.get('#root [name="descripcion"]').type('Restaurante de comida');
        cy.get('#root [name="calle"]').type('Carrera 7');
        cy.get('#root [name="numero"]').type('30 40');
        cy.get('#root [name="ciudad"]').type('Bogota');
        cy.get('#root [name="codigoPostal"]').type('11011');
        cy.get('#root [name="pais"]').type('Colombia');
        cy.get('#root [name="capacidad"]').type('5');
        cy.get('#root [name="horarioApertura"]').type('03:00');
        cy.get('#root [name="horarioCierre"]').type('08:00');
        cy.get('#root input[value="Martes"]').check();
        cy.get('#root input[value="Jueves"]').check();
        cy.get('#root input[value="Sábado"]').check();
        cy.get('#root input[value="Parqueadero"]').check();
        cy.get('#root input[value="Acepta tarjetas"]').check();

        cy.on('window:alert', (textoDeLaAlerta) => {
            // Validar el texto exacto
            expect(textoDeLaAlerta).to.equal('¡Registro exitoso! Revisa tu correo.');
        });

        cy.get('#root button.px-4').click();
        cy.screenshot('Evidencia Registrar un nuevo Restaurante');
    });

    it('Cambiar el estado del Restaurante (Activo/Inactivo)', () => {
        //cy.pause();
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('admin@dinemenow.com');
        cy.get('#formBasicPassword').type('admin123');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/adminp/panel');
        cy.get('#root button.btn-success').eq(0).click();

        cy.screenshot('Evidencia Cambiar el estado del Restaurante (Activo/Inactivo)');
    });

    it('Visualizar listado de restaurantes', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('admin@dinemenow.com');
        cy.get('#formBasicPassword').type('admin123');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/adminp/panel');
        cy.get('.tab-principal > :nth-child(2)').should('exist').and('contain', 'Cuentas restaurantes').click();
        cy.get(':nth-child(5) > :nth-child(3)').should('exist');

        cy.screenshot('Evidencia Visualizar listado de restaurantes');
    });

    it('Eliminar un Restaurante', () => {
        cy.get('#root button.btn-sm.buttonNaranjaDegrade').click();
        cy.get('#formBasicEmail').click();
        cy.get('#formBasicEmail').type('admin@dinemenow.com');
        cy.get('#formBasicPassword').type('admin123');
        cy.get('#root button.buttonNaranjaDegrade').click();
        cy.url().should('include', '/adminp/panel');
        cy.get('#root button[data-rr-ui-event-key="Accs restaurant"]').click();
        cy.get(':nth-child(5) > :nth-child(3)').eq(0).click();
        cy.get('.modal-body').should('exist').and('contain', '¿Estás seguro de que deseas eliminar este restaurante?');
        cy.screenshot('Evidencia Eliminar un Restaurante');
        cy.get('.btn-danger').click();
    });
})