import { startPage, loginPageDefault, containShouldBeVisible } from "../common/utilities.js";
import { adminMenuButton, addNewUserButton, selectUserRole, selectStatus, inputFields, saveButton, editUserButton, editUsername, deleteUserButton, adminFilters, adminFiltersDropdowns, adminFiltersInputs, adminSearchButton, containRecord } from "../common/utilitiesAdmin.js";

describe('Admin tab - TC', function () {
    beforeEach(() => {
        startPage();
        loginPageDefault();
        adminMenuButton()
    })

    it('Admin - Add new user', function () {
        const numeroAleatorio = Math.floor(Math.random() * 2) + 1;

        addNewUserButton();
        selectUserRole(numeroAleatorio);
        selectStatus();
        inputFields();
        saveButton();
        containShouldBeVisible('Successfully Saved');

    })

    it('Admin - Filters', function () {
        adminFiltersInputs();
        adminFiltersDropdowns();
        adminSearchButton();
        containShouldBeVisible('No Record Found');
    })

    it('Admin - Edit user', function () {
        editUserButton();
        editUsername();
        saveButton();
        containShouldBeVisible('Successfully Update');
    })

    it('Admin - Delete user', function () {
        deleteUserButton();
        containShouldBeVisible('Successfully Deleted');
    })

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot();
        }
    })
});