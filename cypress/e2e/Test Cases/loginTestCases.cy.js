import { loginPageDefault, startPage } from '../common/utilities.js';

describe('Login - TC', function () {
    beforeEach(() => {
        startPage();
    })

    it('Login - successful', function () {
        loginPageDefault();
    });

    it('Login - unsuccessful username', function () {
        loginPageDefault('Administrator', 'admin123');
        cy.contains('Invalid credentials').should('be.visible');
    })

    it('Login - unsuccessful password', function () {
        loginPageDefault('Admin', 'admin123456789');
        cy.contains('Invalid credentials').should('be.visible');
    })

    it('Login - empty fields', function () {
        loginPageDefault('', '');
        cy.contains('Required').should('be.visible');
    })
    afterEach(function () {
        cy.wait(2000);
        if (this.currentTest.state === 'failed') {
            cy.screenshot();
        };
    })
});