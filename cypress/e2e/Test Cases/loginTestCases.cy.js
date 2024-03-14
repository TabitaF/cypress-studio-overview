import { containShouldBeVisible, loginPageDefault, startPage } from '../common/utilities.js';

describe('Login - TC', function () {
    beforeEach(() => {
        startPage();
    })

    it.only('Login - successful', function () {
        loginPageDefault();
    });

    it('Login - unsuccessful username', function () {
        loginPageDefault('Administrator', 'admin123');
        containShouldBeVisible('Invalid credentials');
    })

    it('Login - unsuccessful password', function () {
        loginPageDefault('Admin', 'admin123456789');
        containShouldBeVisible('Invalid credentials');
    })

    it('Login - empty fields', function () {
        loginPageDefault('', '');
        containShouldBeVisible('Required');
    })
    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot();
        };
    })
});