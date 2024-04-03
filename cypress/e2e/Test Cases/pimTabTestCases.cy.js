import { containShouldBeVisible, loginPageDefault, startPage, createID} from '../common/utilities.js';
import { addNewUserButton, differentPassword, saveButton } from '../common/utilitiesAdmin.js';
import { sameID, pimAddEmployeeInputFields, pimAttachmentsEditUser, pimDeleteUserButton, pimDropdownFields, pimEditInputFields, pimEditSaveButton, pimEditUserButton, pimInputFields, pimMenuButton, pimSaveAttachButton, pimSearchButton, pimSubUnitDropdown, loginSwitch, loginSwitchUsernameField, detailsDifferentPassword } from '../common/utilitiesPIM.js';

describe('PIM tab - TC', function () {
    beforeEach(() => {
        startPage();
        loginPageDefault();
        pimMenuButton();
    })

    it.skip('PIM - Filters', function () {
        pimInputFields('Orange Test', '0001', 'Peter Mac Anderson');
        pimDropdownFields();
        pimSubUnitDropdown();
        pimSearchButton();
    })

    it.skip('PIM - Add new user', function () {
        addNewUserButton();
        pimAddEmployeeInputFields('John', 'Doe', 'Test');
        saveButton();
        containShouldBeVisible('Successfully Saved');
    })

    it.skip('PIM - Edit user', function () {
        pimEditUserButton();
        pimEditInputFields();
        pimEditSaveButton();
        containShouldBeVisible('Successfully Updated');
    })

    it.skip('PIM - Deleted user', function () {
        pimDeleteUserButton();
        containShouldBeVisible('Successfully Deleted');
    })

    it.skip('PIM - Add attachments in a edit user', function () {
        pimEditUserButton();
        pimAttachmentsEditUser();
        pimSaveAttachButton();
        containShouldBeVisible('Successfully Saved');
    })

//Bad paths
    it('PIM - ID repeted', function () {
        const id = createID();

        addNewUserButton();
        pimAddEmployeeInputFields('John', 'Doe', 'Test');
        sameID(id);
        saveButton();
        containShouldBeVisible('Successfully Saved');
        pimMenuButton();
        addNewUserButton();
        pimAddEmployeeInputFields('John', 'Doe', 'Test');
        sameID(id);
        saveButton();
        containShouldBeVisible('Employee Id already exists');
    })

    it('PIM - Cretae login details switch - Empty fields', function () {
        addNewUserButton();
        loginSwitch();
        loginSwitchUsernameField();
        detailsDifferentPassword();
        containShouldBeVisible('Passwords do not match');
    })

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.wait(2000);
            cy.screenshot();
        }
    })
});
