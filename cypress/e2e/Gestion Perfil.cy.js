describe('Gestion de Perfil', () => {

    // Opcional: Ejecutar algo antes de cada prueba
    beforeEach(() => {
        // Visita la página inicial o de login antes de cada 'it'
        cy.visit('http://localhost:5173');
    });

    it('Visualizar informacion del perfil', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();

        cy.url().should('include', '/cliente/inicio');
        cy.get('.buttonBlancoFGrisNBorder').click();
        cy.get(':nth-child(2) > .nav-item').click();

        cy.url().should('include', '/cliente/perfil');
        cy.get(':nth-child(2) > .gestioncliente-dato').should('exist').and('contain', 'Test Cliente');

        cy.screenshot('Evidencia Visualizar informacion del perfil');
    });

    it('Editar informacion personal correctamente', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();

        cy.url().should('include', '/cliente/inicio');
        cy.get('.buttonBlancoFGrisNBorder').click();
        cy.get(':nth-child(2) > .nav-item').click();
        cy.get('.btn-editar-perfil').click();
        cy.get('#modal-perfil').should('exist').and('be.visible').and('contain', 'Edita tu perfil');

        cy.screenshot('Evidencia Editar informacion personal correctamente');
    });

    it.skip('Actualizar perfil con campos obligatorios vacios', () => {
        //cy.screenshot('Evidencia Actualizar perfil con campos obligatorios vacios');
    });

    it('Cambiar Contraseña correctamente', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();

        cy.url().should('include', '/cliente/inicio');
        cy.get('.buttonBlancoFGrisNBorder').click();
        cy.get(':nth-child(2) > .nav-item').click();

        cy.url().should('include', '/cliente/perfil');
        cy.get('.tab-restaurant > :nth-child(2)').should('exist').and('contain', 'Seguridad').click();

        cy.get('#currentPassword').type('123456');
        cy.get('#newPassword').type('1234567');
        cy.get('#confirmPassword').type('1234567');
        cy.get('.buttonNaranjaDegrade').should('exist').and('contain', 'Actualizar Contraseña').click();

        cy.get('#modal-contraseña').should('exist').and('be.visible').and('contain', 'Contraseña cambiada exitosamente');

        cy.screenshot('Evidencia Cambiar Contraseña correctamente');
    });

    it.skip('Cambiar contraseña con contraseña actual incorrecta', () => {
        //cy.screenshot('Evidencia Cambiar contraseña con contraseña actual incorrecta');
    });

    it('Actualizar Foto de Perfil', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();

        cy.url().should('include', '/cliente/inicio');
        cy.get('.buttonBlancoFGrisNBorder').click();
        cy.get(':nth-child(2) > .nav-item').click();

        cy.url().should('include', '/cliente/perfil');
        cy.get('.camera-icon-badge').should('exist').click();

        cy.get('#modal-foto').should('exist').and('be.visible').and('contain', 'Actualizar Foto de Perfil');
        cy.screenshot('Evidencia Actualizar Foto de Perfil');
    });

    it('Cerrar sesion desde el perfil', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();

        cy.url().should('include', '/cliente/inicio');
        cy.get('.buttonBlancoFGrisNBorder').click();
        cy.get(':nth-child(2) > .nav-item').click();

        cy.url().should('include', '/cliente/perfil');
        cy.get('.flex-grow-1.container > .header-nav > .header-container > .header-brand-group > .menu-hamburguesa > .buttonBlancoFGrisNBorder').should('exist').click();
        cy.get('.flex-grow-1.container > .header-nav > .header-container > .header-brand-group > .menu-hamburguesa > .menu > .menu-session-cta > .buttonCerrarSesion').focus();

        cy.screenshot('Evidencia Cerrar sesion desde el perfil');
    });
});