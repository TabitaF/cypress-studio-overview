export const adminElements = {
    //admin
    adminmenuButton : ':nth-child(1) > .oxd-main-menu-item',
    adminusernameInput : ':nth-child(2) > .oxd-input',
    userroleDropdown : ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    roleDropdownOption : '.oxd-select-dropdown > :nth-child(2)',
    employeeNameInput : '.oxd-autocomplete-text-input > input',
    employeeNameOption : '.oxd-autocomplete-option',
    statusDropdown : ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    statusDropdownOption : '.oxd-select-dropdown > :nth-child(2)',
    saveButton : '.oxd-form-actions > .oxd-button--secondary',
    //add user
    adduserButton : '.orangehrm-header-container > .oxd-button',
    adduserroleDropdown : ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    adduserroleDropdownOption : '.oxd-select-dropdown > :nth-child(2)',
    adduseremployeeNameInput : '.oxd-autocomplete-text-input > input',
    adduseremployeeNameOption : '.oxd-autocomplete-option',
    adduserstatusDropdown : ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    adduserstatusDropdownOption : '.oxd-select-dropdown > :nth-child(2)',
    adduserusernameInput : ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input',
    adduserpasswordInput : '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input',
    adduserconfirmpasswordInput : ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    addusersaveButton : '.oxd-button--secondary',
    //edit user
    edituserButton : ':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)',
    editemployeenameInput : '.oxd-autocomplete-text-input > input',
    editemployeenameOption : '.oxd-autocomplete-option',
    editusernameInput : ':nth-child(2) > .oxd-input',
    editsaveButton : '.oxd-button--secondary',
    //delete user
    deleteuserButton : ':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)',
    deleteuserconfirmButton : '.oxd-button--label-danger',
    deleteusercancelButton :'.oxd-button--text'
};

export const pimElements = {
    //PIM tab elements
    pimmenuButton : ':nth-child(2) > .oxd-main-menu-item',
    pimemployeenameInput : ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input',
    pimemployeenameOption : '.oxd-autocomplete-option',
    pimemployeeIDInput : ':nth-child(2) > .oxd-input',
    pimsupervisornameInput : ':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input',
    pimsupervisornameOption : '.oxd-autocomplete-dropdown > :nth-child(1)',
    pimemployeestatusDropdown : ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    pimemployeestatusOption : '.oxd-select-dropdown > :nth-child(2)', //freelance
    pimincludeDropdown : ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    pimincludeOption : '.oxd-select-dropdown > :nth-child(2) > span', //current and past employees
    pimjontitleDropdown : ':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    pimjontitleOption : '.oxd-select-dropdown > :nth-child(2)', //Account assistant
    pimsubunitDropdown : ':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    pimsubunitOption : '.--indent-1', //OrangeHRM
    pimsaveButton : '.oxd-form-actions > .oxd-button--secondary',
    pimreseachButton : '.oxd-button--ghost',
    //PIM - Add new user elements
    pimadduserButton : '.orangehrm-header-container > .oxd-button',
    pimfirstnameInput : '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input',
    pimmiddlenameInput : ':nth-child(2) > :nth-child(2) > .oxd-input',
    pimlastnameInput : ':nth-child(3) > :nth-child(2) > .oxd-input',
    pimsaveaddButton :'.oxd-button--secondary',
    //PIM - Edit user elements
    pimedituserButton : ':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)',
    pimOtherIDInput : ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    pimedituserSaveButton : ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button',
    //PIM - Delete user elements
    pimdeleteuserButton : ':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)',
    pimdeleteuserconfirmButton : '.oxd-button--label-danger'
};

export const myinfoElements = {
    //My info - Contact details  elements
    contdetailsButton : ':nth-child(2) > .orangehrm-tabs-item',
    contdetailsstreet1Input : ':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    contdetailsstreet2Input : ':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    contdetailscityInput : ':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
    contdetailhomeInput : ':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    contadetailemailInput : ':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    contdetailsaveButton : '.oxd-form-actions > .oxd-button',
    //My info - Emergency contacts elements
    emercontButton :':nth-child(3) > .orangehrm-tabs-item',
    addemergencyButton : ':nth-child(1) > .orangehrm-action-header > .oxd-button',
    emergencynameInput : ':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    emergencyrelationshipInput : ':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    emergencyhomeInput : ':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    emergencymobileInput : ':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    emergencywotelephoneInput : ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
    emergencysaveButton : '.oxd-button--secondary',
    //My info - Dependents elements
    dependentsButton : ':nth-child(4) > .orangehrm-tabs-item',
    adddependentButton : ':nth-child(1) > .orangehrm-action-header > .oxd-button',
    dependentnameInput : ':nth-child(2) > .oxd-input',
    dependentrelationshipInput : '.oxd-select-text',
    dependentrelationshipOption : '.oxd-select-dropdown > :nth-child(2)',
    dependentdobInput : '.oxd-date-input > .oxd-input',
    dependentdobOption : ':nth-child(22) > .oxd-calendar-date',
    dependentsaveButton : '.oxd-button--secondary',
    //My info - Inmigration elements
    inmigrationButton : ':nth-child(5) > .orangehrm-tabs-item',
    addinmigrationButton : ':nth-child(1) > .orangehrm-action-header > .oxd-button',
    documentvisaOption : ':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input',
    numberInput : ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    issueDateInput : ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    dateOption : ':nth-child(29) > .oxd-calendar-date',
    expiryDateInput : ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    expiryDateOption : ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input-calendar > .oxd-calendar-wrapper > .oxd-calendar-dates-grid > :nth-child(30) > .oxd-calendar-date',
    eligeblestatusInput : ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input',
    inmiSaveButton :'.oxd-button--secondary',
    //My info - Edit inmigration record elements
    editinmiButton : ':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)',
    editinminumberInput : ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    editinmicommentInput :'.oxd-textarea',
    editinmisaveButton :'.oxd-button--secondary',
    //My info - Delete inmigration record elements
    deleteinmiButton : ':nth-child(7) > .oxd-table-cell-actions > :nth-child(1)',
    deleteinmiconfirmButton : ':nth-child(7) > .oxd-table-cell-actions > :nth-child(1)',
    //My info - Job elements
    jobmenuButton :' :nth-child(6) > .orangehrm-tabs-item',
    jobJoinedDate :'.oxd-date-input > .oxd-input',
    jobSpecification : '.input-container',
    jobCategory : ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    subUnit : ':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    jobLocation : ':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
    employeeStatus : ':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    jobTitle : ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    //My info tab - Quailifications elements
    qualificationsButton : ':nth-child(9) > .orangehrm-tabs-item',
    //My info - Qualifications/Work experience elements
    addWorkExperience :':nth-child(2) > :nth-child(1) > .orangehrm-action-header > .oxd-button',
    WorkExperienceCompany : ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    WorkExperienceJobTitle : ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    WorkExperienceFrom : ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    WorkExperencieDateOption : ':nth-child(28) > .oxd-calendar-date',
    WorkExperencieTo :':nth-child(2) > .'
};

