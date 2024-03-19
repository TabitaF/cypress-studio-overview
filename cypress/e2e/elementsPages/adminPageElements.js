export const adminPageElements = {
    //admin
    adminMenuButton : ':nth-child(1) > .oxd-main-menu-item',
    usernameInput : ':nth-child(2) > .oxd-input',
    userRoleDropdown : ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    selectOption: '.oxd-select-dropdown > :nth-child(1)', //--select--
    adminOption : '.oxd-select-dropdown > :nth-child(2)', //Admin
    essOption:'.oxd-select-dropdown > :nth-child(3)', //ESS
    employeeNameInput : '.oxd-autocomplete-text-input > input',
    employeeNameOption : '.oxd-autocomplete-option',
    statusDropdown : ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    selectStatusOption : '.oxd-select-dropdown > :nth-child(1)', //--select--
    enableStatusdOption : '.oxd-select-dropdown > :nth-child(2)', //Enabled
    disabledStatusOption : '.oxd-select-dropdown > :nth-child(3)', //Disabled
    searchButton : '.oxd-form-actions > .oxd-button--secondary',
    //add user
    addNewUserButton : '.orangehrm-header-container > .oxd-button',
    addUserRoleDropdown : ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    optionSelect:'.oxd-select-dropdown > :nth-child(1)', //--select--
    optionAdmin:'.oxd-select-dropdown > :nth-child(2)', //Admin
    optionESS:'.oxd-select-dropdown > :nth-child(3)', //ESS
    adduseremployeeNameInput : '.oxd-autocomplete-text-input > input',
    adduseremployeeNameOption : '.oxd-autocomplete-option',
    adduserstatusDropdown : ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    statusSelectOption:'.oxd-select-dropdown > :nth-child(1)', //--select--
    statusEnabledOption    :'.oxd-select-dropdown > :nth-child(2)', //Enabled
    statusDisabledOption   :'..oxd-select-dropdown > :nth-child(3)', //Disabled   
    adduserusernameInput : ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input',
    adduserpasswordInput : '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input',
    adduserconfirmpasswordInput : ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    addusersaveButton : '.oxd-button--secondary',
    //edit user
    edituserButton : ':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)',
    editemployeenameInput : '.oxd-autocomplete-text-input > input',
    editemployeenameOption : '.oxd-autocomplete-option',
    editusernameInput : ':nth-child(2) > .oxd-input',
    //delete user
    deleteuserButton : ':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)',
    deleteuserconfirmButton : '.oxd-button--label-danger',
    deleteusercancelButton :'.oxd-button--text'
};