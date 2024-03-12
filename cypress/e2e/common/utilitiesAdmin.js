import { adminPageElements } from "../elementsPages/adminPageElements";

const numeroAleatorio0 = Math.floor(Math.random() * 2) + 1;

/**
 * This function is used to select the user role and status from the dropdowns
 */
export function adminFiltersDropdowns() {
    cy.get(adminPageElements.userRoleDropdown).click();

    if (numeroAleatorio0 === 1) {
        cy.get(adminPageElements.adminOption).click();
    } else if (numeroAleatorio0 === 2) {
        cy.get(adminPageElements.essOption).click();
    }

    cy.get(adminPageElements.statusDropdown).click();
    cy.get(adminPageElements.enableStatusdOption).click();

}

/**
 * This function is used to input the username and employee name in the inputs
 * @param {string} usernameInput - The username to input
 * @param {string} employeeNameInput - The employee name to input
 */
export function adminFiltersInputs(usernameInput = 'Test01') {
    cy.get(adminPageElements.usernameInput).type(usernameInput);
    cy.get(adminPageElements.employeeNameInput).type('Orange Test');
    cy.wait(2000);
    cy.contains('Orange Test').click();
}

/**
 * This function is used to click the search button
 */
export function adminSearchButton() {
    cy.get(adminPageElements.searchButton).click();
}

/**
 * 
 * @param {string} usernameInput - The username to input
 */
// export function containRecord(text, usernameInput = 'Test01') {
//     cy.get(adminPageElements.adminMenuButton).click();
//     cy.get(adminPageElements.usernameInput).clear(text).type(usernameInput);
//     adminSearchButton();
//     cy.get('.resultado').then(($resultados) => {

//         if ($resultados.length > 0) {
//             // Hay resultados
//             cy.contains('Record Found'); // Muestra el mensaje "record found"
//         } else {
//             // No hay resultados
//             cy.contains('No Records Found'); // Muestra el mensaje "no records found"
//         }
//     })
// }

/**
 * This funcion is used to click the admin menu button
 */
export function adminMenuButton() {
    cy.get(adminPageElements.adminMenuButton).click();
}

/**
 * This function is used to make click in the add a new user button
 */
export function addNewUserButton() {
    cy.get(adminPageElements.addNewUserButton).click();
}

/**
 * This function is used to select a option from the user role dropdown in the Add new user screen
 * @param {number} numeroAleatorio - The number of the option to select
 * 1 - Admin
 * 2 - ESS
 */
export function selectUserRole(numeroAleatorio) {
    cy.get(adminPageElements.addUserRoleDropdown).click();

    if (numeroAleatorio === 1) {
        cy.get(adminPageElements.optionAdmin).click();
    } else if (numeroAleatorio === 2) {
        cy.get(adminPageElements.optionESS).click();
    }
}

/**
 * This function is used to input the employee name and username in the Add new user screen
 * @param {string} employeeName - The employee name to input
 * @param {string} username - The username to input
 */
export function inputFields(employeeName = 'Orange Test', username = 'Test01', password = 'admin123', confirmPassword = 'admin123') {
    cy.get(adminPageElements.adduseremployeeNameInput).type(employeeName);
    cy.wait(2000);
    cy.contains('Orange Test').click();
    cy.get(adminPageElements.adduserusernameInput).type(username);
    cy.get(adminPageElements.adduserpasswordInput).type(password);
    cy.get(adminPageElements.adduserconfirmpasswordInput).type(confirmPassword);
}

/**
 * This function is to select the Enabled status option from the dropdown in the Add new user screen
 */
export function selectStatus() {
    cy.get(adminPageElements.adduserstatusDropdown).click();
    cy.get(adminPageElements.statusEnabledOption).click();
}

/**
 * This function is to click the save button in the Add new user screen
 */
export function saveButton() {
    cy.get(adminPageElements.addusersaveButton).click();
}

/**
 * This function is to click the edit user button
 */
export function editUserButton() {
    cy.get(adminPageElements.edituserButton).click();
}

/**
 * This function is to edit the username in the Edit user screen
 */
export function editUsername(text, username = 'Test02') {
    cy.get(adminPageElements.editusernameInput).clear(text).type(username);
}

/**
 * This function is to click the delete user button
 */
export function deleteUserButton() {
    cy.get(adminPageElements.deleteuserButton).click();
    cy.get(adminPageElements.deleteuserconfirmButton).click();
}

