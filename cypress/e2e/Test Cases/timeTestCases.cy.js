import { containShouldBeVisible, loginPageDefault } from "../common/utilities";
import { timeMenuButton, editRecord, fillInputs, fillHoursInput, selectEmployee, viewButton, createTimesheet, actionViewButton, conditionTimesheet} from "../common/utilitiesTime";
import { startPage } from "../common/utilities";
import { createPIMUserTest} from "../common/utilitiesPIM";

describe('Time tab - TC', function () {
    beforeEach(() => {
        startPage();
        loginPageDefault();
        timeMenuButton()
    })

    it('Time - Edit record', function () {
        actionViewButton();
        editRecord();
        fillInputs('te');
        fillHoursInput({ mon: '06', tue: '03', wed: '07', thu: '01', fri: '04', sat: '10', sun: '12' });
        saveButton();
        containShouldBeVisible('Successfully Saved');
    })

    it('Time - Create Timesheet', function () {
        const fullName = createPIMUserTest();
        timeMenuButton();
        selectEmployee(fullName);
        viewButton();
        createTimesheet();
    })

    it.only('Time - Approve & Reject/Timesheet', function () {
        const fullName = createPIMUserTest();
        timeMenuButton();
        selectEmployee(fullName);
        viewButton();   
        conditionTimesheet();
    })

});