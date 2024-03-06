import {usernameInput, passwordInput, loginButton, pimmenuButton, pimemployeenameInput, pimemployeeIDInput, pimsupervisornameInput, pimemployeestatusDropdown, pimemployeestatusOption, pimincludeDropdown, pimincludeOption, pimjontitleDropdown, 
    pimjontitleOption, pimsubunitDropdown, pimsubunitOption, pimsaveButton, pimreseachButton, pimsupervisornameOption, pimemployeenameOption, pimadduserButton, pimfirstnameInput, pimlastnameInput, pimmiddlenameInput, pimsaveaddButton} from './Elements - TC.js';

describe('PIM tab - TC', function(){
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(usernameInput).type('Admin');
        cy.get(passwordInput).type('admin123');
        cy.get(loginButton).click();
        cy.get(pimmenuButton).click();
    })
        
        it('PIM tab filters', function() {
            cy.get(pimemployeenameInput).clear('Or');
            cy.get(pimemployeenameInput).type('Orange Test');
            cy.wait(2000);
            cy.get(pimemployeenameOption).click();
            cy.get(pimemployeeIDInput).type('0001');
            cy.wait(2000);
            cy.get(pimsupervisornameInput).type('te');
            cy.wait(2000);
            cy.get(pimsupervisornameOption).click();
            cy.get(pimemployeestatusDropdown).click();
            cy.get(pimemployeestatusOption).click();
            cy.get(pimincludeDropdown).click();
            cy.get(pimincludeOption).click();
            cy.get(pimjontitleDropdown).click();
            cy.get(pimjontitleOption).click();
            cy.get(pimsubunitDropdown).click();
            cy.get(pimsubunitOption).click();
            cy.get(pimsaveButton).click();
            cy.contains('No Records Found').should('be.visible');
            cy.get(pimreseachButton).click();
            cy.contains('Records Found').should('be.visible');
        })

        it('PIM - Add new user', function() {
            cy.get(pimadduserButton).click();
            cy.get(pimfirstnameInput).type('Test01');
            cy.get(pimlastnameInput).type('Test');
            cy.get(pimmiddlenameInput).type('test');
            cy.get(pimsaveaddButton).click();
            cy.contains('Successfully Saved').should('be.visible');
        })

    afterEach(function() {
        if (this.currentTest.state === 'failed') {
            cy.wait(2000); 
            cy.screenshot();
        }   
    })
});
