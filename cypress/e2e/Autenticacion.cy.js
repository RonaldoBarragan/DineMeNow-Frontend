describe('Autenticacion y Gestion de cuentas', () => {

    // Opcional: Ejecutar algo antes de cada prueba
    beforeEach(() => {
        // Visita la página inicial o de login antes de cada 'it'
        cy.visit('http://localhost:5173'); 
    });

    it('Registro exitoso de cliente', () => {
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


        cy.screenshot('Evidencia Registro exitoso de cliente');
    });

    it('Registro con correo ya registrado', () => {
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


        cy.screenshot('Evidencia Registro con correo ya registrado');
    });

    it('Registro con campos obligatorios vacios', () => {
        cy.get('.buttonRegistrarUS').click();

        cy.get('[name="nombre"]').type('Test');
        cy.get('.col-md-8 > .text-start > [name="numero"]').type('1432567451');
        cy.get('[name="calle"]').type('Carrera');
        cy.get('.col-md-4 > .text-start > [name="numero"]').type('30');
        cy.get('[name="ciudad"]').type('Bogotá');
        cy.get('[name="pais"]').type('Colombia');
        cy.get('[name="correo"]').type('juancardenas083@gmail.com');
        cy.get('[name="telefono"]').type('3145678901');
        cy.get('[name="password"]').type('123456');
        cy.get('.buttonNaranjaDegrade').click();


        cy.screenshot('Evidencia Registro con campos obligatorios vacios');
    });

    it('Inicio de sesion con credenciales invalidas', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas@gmail.com');
        cy.get('#formBasicPassword').type('123');
        cy.get('.buttonNaranjaDegrade').click();


        cy.screenshot('Evidencia Inicio de sesion con credenciales invalidas');
    });

    it('Inicio de sesion con contraseña incorrecta', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123');
        cy.get('.buttonNaranjaDegrade').click();


        cy.screenshot('Evidencia Inicio de sesion con contraseña incorrecta');
    });

    it('Inicio de sesion con usuario inexistente', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();


        cy.screenshot('Evidencia Inicio de sesion con usuario inexistente');
    });

    it('Inicio de sesion exitoso', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();
        cy.url().should('include', '/cliente/inicio');


        cy.screenshot('Evidencia Inicio de sesion exitoso');
    });

    /*it('Iniciar sesion (Administrador Plataforma)', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('admin@dinemenow.com');
        cy.get('#formBasicPassword').type('admin123');
        cy.get('.buttonNaranjaDegrade').click();
        cy.url().should('include', '/adminp/panel');


        //cy.screenshot('Evidencia Iniciar sesion (Administrador Plataforma)');
    });*/

    it('Cierre de sesion (Logout)', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();

        cy.url().should('include', '/cliente/inicio');
        cy.get('.buttonBlancoFGrisNBorder').click();
        cy.get('.buttonCerrarSesion').focus();
        cy.screenshot('Evidencia Cierre de sesion (Logout)');
        cy.get('.buttonCerrarSesion').click();
        cy.url().should('include', '/');
    });

    it.skip('Recuperar contraseña', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('.linkFormRecuperar').click();


        //cy.screenshot('Evidencia Recuperar contraseña');
    });

    it('Validar formato de correo electronico', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083mail.com');
        cy.get('#formBasicPassword').type('123');
        cy.get('.buttonNaranjaDegrade').click();


        cy.screenshot('Evidencia Validar formato de correo electronico');
    });

    it.skip('Validar longitud minima de contraseña', () => {


        //cy.screenshot('Evidencia Validar longitud minima de contraseña');
    });
});