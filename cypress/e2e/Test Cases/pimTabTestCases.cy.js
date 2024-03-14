import { containShouldBeVisible, loginPageDefault, startPage } from '../common/utilities.js';
import { addNewUserButton, saveButton } from '../common/utilitiesAdmin.js';
import { pimAddEmployeeInputFields, pimAttachmentsEditUser, pimDeleteUserButton, pimDropdownFields, pimEditInputFields, pimEditSaveButton, pimEditUserButton, pimInputFields, pimMenuButton, pimSaveAttachButton, pimSearchButton, pimSubUnitDropdown } from '../common/utilitiesPIM.js';

describe('PIM tab - TC', function () {
    beforeEach(() => {
        startPage();
        loginPageDefault();
        pimMenuButton();
    })

    it('PIM - Filters', function () {
        pimInputFields('Orange Test', '0001', 'Peter Mac Anderson');
        pimDropdownFields();
        pimSubUnitDropdown();
        pimSearchButton();
    })

    it('PIM - Add new user', function () {
        addNewUserButton();
        pimAddEmployeeInputFields('John', 'Doe', 'Test');
        saveButton();
        containShouldBeVisible('Successfully Saved');
    })

    it('PIM - Edit user', function () {
        pimEditUserButton();
        pimEditInputFields();
        pimEditSaveButton();
        containShouldBeVisible('Successfully Updated');
    })

    it('PIM - Deleted user', function () {
        pimDeleteUserButton();
        containShouldBeVisible('Successfully Deleted');
    })

    it('PIM - Add attachments in a edit user', function () {
        pimEditUserButton();
        pimAttachmentsEditUser();
        pimSaveAttachButton();
        containShouldBeVisible('Successfully Saved');
    })

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.wait(2000);
            cy.screenshot();
        }
    })
});
