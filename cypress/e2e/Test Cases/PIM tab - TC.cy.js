import { loginElements, pimElements } from './testElements.js';

describe('PIM tab - TC', function () {
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(loginElements.usernameInput).type('Admin');
        cy.get(loginElements.passwordInput).type('admin123');
        cy.get(loginElements.loginButton).click();
        cy.get(pimElements.pimmenuButton).click();
    })

    it('PIM tab filters', function () {
        cy.get(pimElements.pimemployeenameInput).clear('Or').type('Orange Test').get(pimElements.pimemployeenameOption).click();
        cy.get(pimElements.pimemployeeIDInput).type('0001');
        cy.get(pimElements.pimsupervisornameInput).clear().type('Peter Mac Anderson').wait(2000);
        cy.contains('Peter Mac Anderson').click();
        cy.get(pimElements.pimemployeestatusDropdown).click().get(pimElements.pimemployeestatusOption).click();
        cy.get(pimElements.pimincludeDropdown).click().get(pimElements.pimincludeOption).click();
        cy.get(pimElements.pimjontitleDropdown).click().get(pimElements.pimjontitleOption).click();
        cy.get(pimElements.pimsubunitDropdown).click().get(pimElements.pimsubunitOption).click();
        cy.get(pimElements.pimsaveButton).click();
        cy.contains('No Records Found').should('be.visible');
        cy.get(pimElements.pimreseachButton).click();
        cy.contains('Records Found').should('be.visible');
    })

    it('PIM - Add new user', function () {
        cy.get(pimElements.pimadduserButton).click();
        cy.get(pimElements.pimfirstnameInput).type('Test01');
        cy.get(pimElements.pimlastnameInput).type('Test');
        cy.get(pimElements.pimmiddlenameInput).type('test');
        cy.get(pimElements.pimsaveaddButton).click();
        cy.contains('Successfully Saved').should('be.visible');
    })

    it('PIM - Edit user', function () {
        cy.get(pimElements.pimedituserButton).click();
        cy.get(pimElements.pimOtherIDInput).clear().type('9999');
        cy.get(pimElements.pimedituserSaveButton).click();
        cy.contains('Successfully Updated').should('be.visible');
    })

    it('PIM - Delete user', function () {
        cy.get(pimElements.pimdeleteuserButton).click();
        cy.get(pimElements.pimdeleteuserconfirmButton).click();
        cy.contains('Successfully Deleted').should('be.visible');
    })

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.wait(2000);
            cy.screenshot();
        }
    })
});
