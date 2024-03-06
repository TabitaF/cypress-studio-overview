import { usernameInput, passwordInput, loginButton } from './Elements - TC.js';

describe('Login - TC', function(){
    beforeEach(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.wait(2000) 
    })

    it('Login - successful', function() {
        cy.get(usernameInput).type('Admin');
        cy.get(passwordInput).type('admin123');
        cy.get(loginButton).click();
        cy.contains('Dashboard').should('be.visible');
    })

    it('Login - unsuccessful username', function() {
        cy.get(usernameInput).type('administrator');
        cy.get(passwordInput).type('admin123');
        cy.get(loginButton).click();
        cy.contains('Invalid credentials').should('be.visible');
    })

    it('Login - unsuccessful password', function() {
        cy.get(usernameInput).type('Admin');
        cy.get(passwordInput).type('admin1234');
        cy.get(loginButton).click();
        cy.contains('Invalid credentials').should('be.visible');
    })

    afterEach(function() {
        cy.wait(2000); 
        if (this.currentTest.state === 'failed') {
            cy.screenshot();
        };
    })
});