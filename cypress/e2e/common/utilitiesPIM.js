import { pimPagesElements } from "../elementsPages/pimPageElements";
import { containShouldBeVisible } from "./utilities";
import { addNewUserButton, saveButton } from "./utilitiesAdmin";

const imageTest = 'cypress/fixtures/imageTest.png'

const numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;
const numeroAleatorio2 = Math.floor(Math.random() * 2) + 1;
const numeroAleatorio3 = Math.floor(Math.random() * 13) + 1;

/**
 * This function is used to click the PIM menu button
 */
export function pimMenuButton() {
    cy.get(pimPagesElements.pimMenuButton).click();
}

/**
 * This function is used to input the employee name, employee ID and supervisor name in the inputs
 * @param {string} pimEmployeeName - The employee name to input
 * @param {number} pimemployeeID -  The employee ID to input
 * @param {string} pimsupervisorname - The supervisor name to input
 */
export function pimInputFields(pimEmployeeName = 'Orange Test', pimemployeeID = '123', pimsupervisorname = 'Peter Mac Anderson') {
    cy.get(pimPagesElements.pimEmployeeNameInput).type(pimEmployeeName).wait(2000);
    cy.contains('Orange Test').click();
    cy.get(pimPagesElements.pimEmployeeIDInput).type(pimemployeeID);
    cy.get(pimPagesElements.pimSupervisorNameInput).type(pimsupervisorname).wait(2000);
    cy.contains('Peter Mac Anderson').click();
}

/**
 * This function is used to select a random option from the employment status and the incluide dropdowns
 * @param {number} numeroAleatorio1 - The number of the option to select
 * @param {number} numeroAleatorio2 - The number of the option to select
 * 1 - Freelance
 * 2 - Full time contract
 * 3 - Full time permanent
 * 4 - Full time probation
 * 5 - Part time contract
 * 6 - Part time internship
 * 
 * 1 - Past Employees Only
 * 2 - Current and Past Employees
 */
export function pimDropdownFields() {
    cy.get(pimPagesElements.pimemployeestatusDropdown).click();

    if (numeroAleatorio1 === 1) {
        cy.get(pimPagesElements.pimFreelanceOption).click();
    } else if (numeroAleatorio1 === 2) {
        cy.get(pimPagesElements.pimFTContractOption).click();
    } else if (numeroAleatorio1 === 3) {
        cy.get(pimPagesElements.pimFTPermanentOption).click();
    } else if (numeroAleatorio1 === 4) {
        cy.get(pimPagesElements.pimFTProbation).click();
    } else if (numeroAleatorio1 === 5) {
        cy.get(pimPagesElements.pimPTContractOption).click();
    } else if (numeroAleatorio1 === 6) {
        cy.get(pimPagesElements.pimPTInternshipOption).click();
    }

    cy.get(pimPagesElements.pimIncludeDropdown).click();

    if (numeroAleatorio2 === 1) {
        cy.get(pimPagesElements.pimCurrentPastEmployeesOption).click();
    } else if (numeroAleatorio2 === 2) {
        cy.get(pimPagesElements.pimPastEmployeesOnlyOption).click();
    }
}

/**
 * This function is used to select a random option from the sub unit dropdown
 * @param {number} numeroAleatorio3 - The number of the option to select
 * 1 - OrangeHRM
 * 2 - Administration
 * 3 - Engineering
 * 4 - Development
 * 5 - Quality Assurance
 * 6 - TechOps
 * 7 - Sales & Marketing
 * 8 - Sales
 * 9 - Marketing
 * 10 - Client Services
 * 11 - Technical Support
 * 12 - Finance
 * 13 - Human Resources
 */
export function pimSubUnitDropdown() {
    cy.get(pimPagesElements.pimSubUnitDropdown).click();

    if (numeroAleatorio3 === 1) {
        cy.get(pimPagesElements.pimOrangehrmOption).click();
    } else if (numeroAleatorio3 === 2) {
        cy.get(pimPagesElements.pimAdministrationOption).click();
    } else if (numeroAleatorio3 === 3) {
        cy.get(pimPagesElements.pimEngineeringOption).click();
    } else if (numeroAleatorio3 === 4) {
        cy.get(pimPagesElements.pimDevOption).click();
    } else if (numeroAleatorio3 === 5) {
        cy.get(pimPagesElements.pimQAOption).click();
    } else if (numeroAleatorio3 === 6) {
        cy.get(pimPagesElements.pimTechOpsOption).click();
    } else if (numeroAleatorio3 === 7) {
        cy.get(pimPagesElements.pimSalesMarketingOption).click();
    } else if (numeroAleatorio3 === 8) {
        cy.get(pimPagesElements.pimSalesOption).click();
    } else if (numeroAleatorio3 === 9) {
        cy.get(pimPagesElements.pimMarketingOption).click();
    } else if (numeroAleatorio3 === 10) {
        cy.get(pimPagesElements.pimClientServiceOption).click();
    } else if (numeroAleatorio3 === 11) {
        cy.get(pimPagesElements.pimTechnicalSupportOption).click();
    } else if (numeroAleatorio3 === 12) {
        cy.get(pimPagesElements.pimFinanceOption).click();
    } else if (numeroAleatorio3 === 13) {
        cy.get(pimPagesElements.pimHROption).click();
    }
}

/**
 * This function is used to click the save button
 */
export function pimSearchButton() {
    cy.get(pimPagesElements.pimSearchButton).click();
}

/**
 * This function is used to click the add new user button
 * @param {string} firstName - The first name to input
 * @param {string} middleName - The middle name to input
 * @param {string} lastName - The last name to input
 * @param {string} employeeID - The employee ID to input
 */
export function pimAddEmployeeInputFields(firstName = 'John', middleName = 'Doe', lastName = 'Test', employeeID) {
    if (firstName) {
        cy.get(pimPagesElements.pimfirstnameInput).type(firstName);
    }

    if (middleName) {
        cy.get(pimPagesElements.pimmiddlenameInput).type(middleName);
    }

    if (lastName) {
        cy.get(pimPagesElements.pimlastnameInput).type(lastName);
    }

    if (!employeeID) {
        employeeID = Math.floor(Math.random() * 1000000).toString();
    }

    cy.get(pimPagesElements.pimEmployeeIDInput).type(employeeID);

}

/**
 * This function is used to click the edit button
 */
export function pimEditUserButton() {
    cy.get(pimPagesElements.pimEditUserButton).click();
}

/**
 * This function is used to input the other ID in the edit user screen
 * @param {string} otherID - The other ID to input
 */
export function pimEditInputFields(otherID) {
    cy.get(pimPagesElements.pimOtherIDInput).clear();

    if (!otherID) {
        otherID = Math.floor(Math.random() * 1000000).toString();
    }

    cy.get(pimPagesElements.pimOtherIDInput).type(otherID);
}

/**
 * This function is used to click the save button in the edit user screen
 */
export function pimEditSaveButton() {
    cy.get(pimPagesElements.pimedituserSaveButton).click();
}

/**
 * This function is used to click the delete button
 */
export function pimDeleteUserButton() {
    cy.get(pimPagesElements.pimdeleteuserButton).click();
    cy.get(pimPagesElements.pimdeleteuserconfirmButton).click();
}

/**
 * This function is used to click the add attachments button and add the expecified image
 */
export function pimAttachmentsEditUser() {
    cy.get(pimPagesElements.pimAttachmentsEditUser).click();
    cy.get(pimPagesElements.pimBrowseButton).click();
    cy.get('input[type=file]').selectFile(imageTest, { force: true });
}

/**
 * This function is used to click the save button in the add attachments section
 */
export function pimSaveAttachButton() {
    cy.get(pimPagesElements.pimSaveAttachButton).click();
}

/**
 * This function is used to click the add new user in PIM screen
 * Note: This function is used to navigate to the PIM users screen, when 
 * using this function you must return to the screen of your test case
 * @returns the name of the user created
 */
export function createPIMUserTest() {
    pimMenuButton();

    const firstName = 'Test01';
    const middleName = 'Test02';
    const lastName = `${Date.now()}`;

    addNewUserButton();
    pimAddEmployeeInputFields(firstName, middleName, lastName);
    saveButton();
    containShouldBeVisible('Successfully Saved');

    return `${firstName} ${middleName} ${lastName}`
}
