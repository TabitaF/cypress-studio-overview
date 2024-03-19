import { timePageElements } from "../elementsPages/timePageElements";
import { containShouldBeVisible } from "./utilities";

/**
 * 
 * This function is used for clicking on the time menu button
 */
export function timeMenuButton() {
    cy.get(timePageElements.timeMenuButton).click();
}

/**
 * This function is used to click the action view button
 */
export function actionViewButton() {
    cy.get(timePageElements.actionViewButton).click();
}

/**
 * This function is used to click the edit button
 */
export function editRecord() {
    cy.get(timePageElements.editButton).click();
}

/**
 * This function is used to input the project and activity in the inputs
 * @param {string} text - The text to input in the project input 
 */
export function fillInputs(text = 'te') {
    cy.get(timePageElements.projectInput).clear().type(text);
    cy.wait(2000);
    cy.get(timePageElements.projectOption1).click();
    cy.get(timePageElements.activityDropdown).click();
    cy.get(timePageElements.bugFixesOption).click();
}

/**
 * This function is used to input the hours in the inputs
 */
export function fillHoursInput({ mon = '', tue = '', wed = '', thu = '', fri = '', sat = '', sun = '' }) {
    if (mon) {
        cy.get(timePageElements.monInput).clear().type(mon);
    }

    if (tue) {
        cy.get(timePageElements.tueInput).clear().type(tue);
    }

    if (wed) {
        cy.get(timePageElements.wedInput).clear().type(wed);
    }

    if (thu) {
        cy.get(timePageElements.thuInput).clear().type(thu);
    }

    if (fri) {
        cy.get(timePageElements.friInput).clear().type(fri);
    }

    if (sat) {
        cy.get(timePageElements.satInput).clear().type(sat);
    }

    if (sun) {
        cy.get(timePageElements.sunInput).clear().type(sun);
    }
}

/**
 * This function is used to select an employee name
 * @param {string} employee - The employee to select 
 */
export function selectEmployee(employee = '') {
    cy.get(timePageElements.employeeName).clear().type(employee);
    cy.wait(2000);
    cy.get(timePageElements.employeeNameOption).click();
}

/**
 * This function is used to click the view button
 */
export function viewButton() {
    cy.get(timePageElements.viewButton).click();
}

/**
 * This function is used to create a timesheet if there is no timesheet created
 */
export function createTimesheet() {
    cy.document().then(doc => {//Validate if it find matches with the model
        const element = doc.querySelector(timePageElements.noTimesheetAlert);
        if (element && element.offsetParent !== null) {
            cy.log('El elemento está visible');
            cy.get(timePageElements.createTimesheet).click();
            containShouldBeVisible('Timesheet Successfully Created');
        } else {
            cy.log('El elemento no está visible');
            cy.get(timePageElements.timeMenuButton).click();
        }
    })
}

export function conditionTimesheet() {
    cy.wait(2000);
    cy.get(timePageElements.submitButton).click({ force: true });
    cy.get(timePageElements.submitButton).click({ force: true });
    cy.get(timePageElements.commentBox).type('Test Approved');
    cy.get(timePageElements.approveButton).click();
    cy.contains('Reset').click();
    cy.get(timePageElements.commentBox).type('Test Rejected');
    cy.get(timePageElements.rejectButton).click();
}