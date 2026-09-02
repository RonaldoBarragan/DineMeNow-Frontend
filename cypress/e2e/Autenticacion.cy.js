describe('Autenticacion y Gestion de cuentas', () => {

    // Opcional: Ejecutar algo antes de cada prueba
    beforeEach(() => {
        // Visita la página inicial o de login antes de cada 'it'
        cy.visit('http://localhost:5173'); 
    });

    it('Registro de usuario (cliente)', () => {
        cy.get('.buttonRegistrarUS').click();

        cy.get('[name="nombre"]').type('Test');
        cy.get('[name="apellido"]').type('Cliente');
        cy.get('.col-md-8 > .text-start > [name="numero"]').type('1432567451');
        cy.get('[name="calle"]').type('Carrera');
        cy.get('.col-md-4 > .text-start > [name="numero"]').type('30');
        cy.get('[name="ciudad"]').type('Bogotá');
        cy.get('[name="codigoPostal"]').type('110111');
        cy.get('[name="pais"]').type('Colombia');
        cy.get('[name="correo"]').type('juancardenas083@gmail.com');
        cy.get('[name="telefono"]').type('3145678901');
        cy.get('[name="password"]').type('123456');
        cy.get('[name="passwordConfirm"]').type('123456');
        cy.get('.buttonNaranjaDegrade').click();

        // Redirigido a la vista de activación
        cy.url().should('include', '/verificartoken');
        cy.get('#formRecuperacionToken').type('142114');
        cy.get('form > .btn').click();


        //cy.screenshot('Evidencia Registro de usuario (cliente)');
    });

    it('Iniciar sesion (cliente)', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();
        cy.url().should('include', '/cliente/inicio');


        //cy.screenshot('Evidencia Iniciar sesion (cliente)');
    });

    it('Iniciar sesion (Administrador Plataforma)', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('admin@dinemenow.com');
        cy.get('#formBasicPassword').type('admin123');
        cy.get('.buttonNaranjaDegrade').click();
        cy.url().should('include', '/adminp/panel');


        //cy.screenshot('Evidencia Iniciar sesion (Administrador Plataforma)');
    });

    it('Cierre de sesion (Logout)', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();

        cy.url().should('include', '/cliente/inicio');
        cy.get('.buttonBlancoFGrisNBorder').click();
        cy.get('.buttonCerrarSesion').focus();
        //cy.screenshot('Evidencia Cierre de sesion (Logout)');
        cy.get('.buttonCerrarSesion').click();
        cy.url().should('include', '/');
    });

    it.skip('Recuperar contraseña', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('.linkFormRecuperar').click();


        //cy.screenshot('Evidencia Recuperar contraseña');
    });

    it.skip('Eliminar cuenta (cliente)', () => {


        //cy.screenshot('Evidencia Eliminar cuenta (cliente)');
    });

    it.skip('Eliminar cuenta (restaurante)', () => {


        //cy.screenshot('Evidencia Eliminar cuenta (restaurante)');
    });
});