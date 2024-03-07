import {usernameInput, passwordInput, loginButton, pimmenuButton, pimemployeenameInput, pimemployeeIDInput, pimsupervisornameInput, pimemployeestatusDropdown, pimemployeestatusOption, pimincludeDropdown, pimincludeOption, pimjontitleDropdown, 
    pimjontitleOption, pimsubunitDropdown, pimsubunitOption, pimsaveButton, pimreseachButton, pimemployeenameOption, pimadduserButton, pimfirstnameInput, pimlastnameInput, pimmiddlenameInput, pimsaveaddButton,  pimedituserButton, pimOtherIDInput, 
    pimedituserSaveButton, pimdeleteuserButton, pimdeleteuserconfirmButton} from './Elements - TC.js';

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
            cy.get(pimemployeenameInput).clear('Or').type('Orange Test');
            cy.wait(2000);
            cy.get(pimemployeenameOption).click();
            cy.get(pimemployeeIDInput).type('0001');
            cy.wait(2000);
            cy.get(pimsupervisornameInput).clear().type('Peter Mac Anderson').wait(2000);
            cy.contains('Peter Mac Anderson').click();
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

        it('PIM - Edit user', function() {
            cy.get(pimedituserButton).click();
            cy.get(pimOtherIDInput).clear().type('9999');
            cy.get(pimedituserSaveButton).click();
            cy.contains('Successfully Updated').should('be.visible');
        })

        it('PIM - Delete user', function() {
            cy.get(pimdeleteuserButton).click();
            cy.get(pimdeleteuserconfirmButton).click();
            cy.contains('Successfully Deleted').should('be.visible');
        })

    afterEach(function() {
        if (this.currentTest.state === 'failed') {
            cy.wait(2000); 
            cy.screenshot();
        }   
    })
});
