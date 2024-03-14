export const pimPagesElements = {
    //PIM tab elements
    pimMenuButton : ':nth-child(2) > .oxd-main-menu-item',
    pimEmployeeNameInput : ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input',
    pimemployeenameOption : '.oxd-autocomplete-option',
    pimEmployeeIDInput : ':nth-child(2) > .oxd-input',
    pimSupervisorNameInput : ':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input',
    pimsupervisornameOption : '.oxd-autocomplete-dropdown > :nth-child(1)',
    
    pimemployeestatusDropdown : ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    pimSelectOption:'.oxd-select-dropdown > :nth-child(1)', //select option
    pimFreelanceOption : '.oxd-select-dropdown > :nth-child(2)', //freelance
    pimFTContractOption: '.oxd-select-dropdown > :nth-child(3)', //full time contract
    pimFTPermanentOption: '.oxd-select-dropdown > :nth-child(4)', //full time permanent
    pimFTProbation:'.oxd-select-dropdown > :nth-child(5)', //full time probation
    pimPTContractOption:'.oxd-select-dropdown > :nth-child(6)', //part time contract
    pimPTInternshipOption: '.oxd-select-dropdown > :nth-child(7)', //part time internship
   
    pimIncludeDropdown : ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text', 
    pimPastEmployeesOnlyOption : '.oxd-select-dropdown > :nth-child(3)', //Past Employees Only
    pimCurrentPastEmployeesOption : '.oxd-select-dropdown > :nth-child(2)', //current and past employees

    pimjontitleDropdown : ':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    pimjontitleOption : '.oxd-select-dropdown > :nth-child(2)', //Account assistant
    
    pimSubUnitDropdown : ':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    pimSelectOption:'.oxd-select-dropdown > :nth-child(1)', //select option
    pimOrangehrmOption : '.--indent-1', //OrangeHRM
    pimAdministrationOption:'.oxd-select-dropdown > :nth-child(3)', //Administration
    pimEngineeringOption:'.oxd-select-dropdown > :nth-child(4)', //Engineering
    pimDevOption:'.oxd-select-dropdown > :nth-child(5)', //Development
    pimQAOption:'.oxd-select-dropdown > :nth-child(6)', //Quality Assurance
    pimTechOpsOption : '.oxd-select-dropdown > :nth-child(7)', //TechOps
    pimSalesMarketingOption : '.oxd-select-dropdown > :nth-child(8)', //Sales & Marketing
    pimSalesOption:'.oxd-select-dropdown > :nth-child(9)', //Sales
    pimMarketingOption:'oxd-select-dropdown > :nth-child(10)', //Marketing
    pimClientServiceOption:'.oxd-select-dropdown > :nth-child(11)', //Client Services
    pimTechnicalSupportOption:'.oxd-select-dropdown > :nth-child(12)', //Technical Support
    pimFinanceOption:'.oxd-select-dropdown > :nth-child(13)', //Finance
    pimHROption:'.oxd-select-dropdown > :nth-child(14)', //Human Resources

    pimSearchButton : '.oxd-form-actions > .oxd-button--secondary',
    pimreseachButton : '.oxd-button--ghost',
    //PIM - Add new user elements
    pimadduserButton : '.orangehrm-header-container > .oxd-button',
    pimfirstnameInput : '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input',
    pimmiddlenameInput : ':nth-child(2) > :nth-child(2) > .oxd-input',
    pimlastnameInput : ':nth-child(3) > :nth-child(2) > .oxd-input',
    pimEmployeeIDInput: '.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input',
    pimsaveaddButton :'.oxd-button--secondary',
    //PIM - Edit user elements
    pimEditUserButton : ':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)',
    pimOtherIDInput : ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    pimedituserSaveButton : ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button',
    //PIM - Delete user elements
    pimdeleteuserButton : ':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)',
    pimdeleteuserconfirmButton : '.oxd-button--label-danger',
    //PIM - Add attachments in a edit user elements
    pimAttachmentsEditUser:'.orangehrm-action-header > .oxd-button',
    pimBrowseButton: '.oxd-file-button',
    pimSaveAttachButton:'.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary'
};