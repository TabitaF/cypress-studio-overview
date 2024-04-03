import { startPage, loginPageDefault, containShouldBeVisible } from "../common/utilities.js";
import { adminMenuButton, addNewUserButton, selectUserRole, selectStatus, inputFields, saveButton, editUserButton, editUsername, deleteUserButton, adminFilters, adminFiltersDropdowns, adminFiltersInputs, adminSearchButton, containRecord, editUserEmpty, inputFieldsRepeted, differentPassword, completeFields } from "../common/utilitiesAdmin.js";

describe('Admin tab - TC', function () {
    beforeEach(() => {
        startPage();
        loginPageDefault();
        adminMenuButton()
    })

    it.skip('Admin - Add new user', function () {
        const numeroAleatorio = Math.floor(Math.random() * 2) + 1;

        addNewUserButton();
        selectUserRole(numeroAleatorio);
        selectStatus();
        inputFields();
        saveButton();
        containShouldBeVisible('Successfully Saved');

    })

    it.skip('Admin - Filters', function () {
        adminFiltersInputs();
        adminFiltersDropdowns();
        adminSearchButton();
        containShouldBeVisible('No Record Found');
    })

    it.skip('Admin - Edit user', function () {
        editUserButton();
        editUsername();
        saveButton();
        containShouldBeVisible('Successfully Update');
    })

    it.skip('Admin - Delete user', function () {
        deleteUserButton();
        containShouldBeVisible('Successfully Deleted');
    })

    //Bad paths
    it('Admin - Repeted user', function () {
        const numeroAleatorio = Math.floor(Math.random() * 2) + 1;

        addNewUserButton();
        selectUserRole(numeroAleatorio);
        selectStatus();
        inputFieldsRepeted();
        saveButton();
        containShouldBeVisible('Successfully Saved');
        addNewUserButton();
        selectUserRole(numeroAleatorio);
        selectStatus();
        inputFieldsRepeted();
        saveButton();
        containShouldBeVisible('Already exists');
    })

    it('Admin - Empty fields', function () {
        addNewUserButton();
        saveButton();
        containShouldBeVisible('Required');
    })

    it('Admin - Edit user empty', function () {
        editUserButton();
        editUserEmpty();
        saveButton();
        containShouldBeVisible('Required');
    })

    it('Admin - Diferent password & confimr password', function () {
        const numeroAleatorio = Math.floor(Math.random() * 2) + 1;

        addNewUserButton();
        selectUserRole(numeroAleatorio);
        selectStatus();
        completeFields();
        differentPassword();
        saveButton();
        containShouldBeVisible('Passwords do not match');
    })

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot();
        }
    })
});