import {loginElements} from './test elements.js';


describe('Login - TC', function(){
    beforeEach(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.wait(2000) 
    })

    it('Login - successful', function() {
        cy.get(loginElements.usernameInput).type('Admin');
        cy.get(loginElements.passwordInput).type('admin123');
        cy.get(loginElements.loginButton).click();
    });

    it('Login - unsuccessful username', function() {
        cy.get(loginElements.usernameInput).type('Administrator');
        cy.get(loginElements.passwordInput).type('admin123');
        cy.get(loginElements.loginButton).click();
        cy.contains('Invalid credentials').should('be.visible');
    })

    it('Login - unsuccessful password', function() {
        cy.get(loginElements.usernameInput).type('Admin');
        cy.get(loginElements.passwordInput).type('1234567890');
        cy.get(loginElements.loginButton).click();
        cy.contains('Invalid credentials').should('be.visible');
    })

    afterEach(function() {
        cy.wait(2000); 
        if (this.currentTest.state === 'failed') {
            cy.screenshot();
        };
    })
});