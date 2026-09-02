describe('Gestion de Perfil', () => {

    // Opcional: Ejecutar algo antes de cada prueba
    beforeEach(() => {
        // Visita la página inicial o de login antes de cada 'it'
        cy.visit('http://localhost:5173');
    });

    it('Editar perfil (cliente)', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();

        cy.url().should('include', '/cliente/inicio');
        cy.get('.buttonBlancoFGrisNBorder').click();
        cy.get(':nth-child(2) > .nav-item').click();
        cy.get('.btn-editar-perfil').click();
        cy.get('#modal-perfil').should('exist').and('be.visible').and('contain', 'Edita tu perfil');

        //cy.screenshot('Evidencia Editar perfil (cliente)');
    });

    it.skip('Editar Perfil (Personal Administrativo)', () => {


        //cy.screenshot('Evidencia Editar Perfil (Personal Administrativo)');
    });

    it('Consultar Perfil (Cliente)', () => {
        cy.get('.header-buttons > .buttonNaranjaDegrade').click();

        cy.get('#formBasicEmail').type('juancardenas083@gmail.com');
        cy.get('#formBasicPassword').type('123456');
        cy.get('.buttonNaranjaDegrade').click();

        cy.url().should('include', '/cliente/inicio');
        cy.get('.buttonBlancoFGrisNBorder').click();
        cy.get(':nth-child(2) > .nav-item').click();

        cy.url().should('include', '/cliente/perfil');
        cy.get(':nth-child(2) > .gestioncliente-dato').should('exist').and('contain', 'Test Cliente');

        //cy.screenshot('Evidencia Consultar Perfil (Cliente)');
    });

    it.skip('Consultar Perfil (Personal Administrativo)', () => {


        //cy.screenshot('Evidencia Consultar Perfil (Personal Administrativo)');
    });

    it('Cambiar Contraseña', () => {
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

        //cy.screenshot('Evidencia Cambiar Contraseña');
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
        //cy.screenshot('Evidencia Actualizar Foto de Perfil');
    });

    it.skip('Validacion de Campos Obligatorios', () => {


        //cy.screenshot('Evidencia Validacion de Campos Obligatorios');
    });

    it.skip('Visualizar Historial de Actividad', () => {


        //cy.screenshot('Evidencia Visualizar Historial de Actividad');
    });
});