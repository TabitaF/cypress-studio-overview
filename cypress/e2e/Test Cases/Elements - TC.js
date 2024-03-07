export { usernameInput, passwordInput, loginButton, adminmenuButton, adminusernameInput, userroleDropdown, roleDropdownOption, employeeNameInput, employeeNameOption, statusDropdown, statusDropdownOption, saveButton, adduserButton, adduserroleDropdown, adduserroleDropdownOption, 
         adduseremployeeNameInput, adduseremployeeNameOption, adduserstatusDropdown, adduserstatusDropdownOption, adduserusernameInput, adduserpasswordInput, adduserconfirmpasswordInput, addusersaveButton, edituserButton, editemployeenameInput, editemployeenameOption, editusernameInput, 
         editsaveButton, deleteuserButton, deleteuserconfirmButton, deleteusercancelButton, pimmenuButton, pimemployeenameInput, pimemployeeIDInput, pimsupervisornameInput, pimemployeestatusDropdown, pimemployeestatusOption, pimincludeDropdown, pimincludeOption, pimjontitleDropdown, 
         pimjontitleOption, pimsubunitDropdown, pimsubunitOption, pimsaveButton, pimreseachButton, pimemployeenameOption, pimsupervisornameOption, pimadduserButton, pimfirstnameInput, pimmiddlenameInput, pimlastnameInput, pimsaveaddButton, myinfomenuButton, myinfofirstnameInput,myinfomiddlenameInput, 
         myinfolastnameInput, myinfoemployeeIDInput, myinfootherIDInput, myinfofemaleOption, myinfosaveButton, contdetailsButton, contdetailsstreet1Input, contdetailsstreet2Input, contdetailscityInput, contdetailhomeInput, contadetailemailInput, contdetailsaveButton, emercontButton, addemergencyButton, 
         emergencynameInput, emergencyrelationshipInput, emergencyhomeInput, emergencymobileInput, emergencywotelephoneInput, emergencysaveButton, myinfodlicencenumber, dependentsButton, adddependentButton, dependentnameInput, dependentrelationshipInput, dependentrelationshipOption, dependentdobInput, 
         dependentdobOption, dependentsaveButton, inmigrationButton, addinmigrationButton, documentvisaOption, numberInput, issueDateInput, dateOption, expiryDateInput, expiryDateOption, eligeblestatusInput, editinmiButton, editinminumberInput, editinmicommentInput, editinmisaveButton, deleteinmiButton, 
         deleteinmiconfirmButton, jobmenuButton, jobJoinedDate, jobTitle, jobSpecification, jobCategory, subUnit, jobLocation, employeeStatus, inmiSaveButton, qualificationsButton, addWorkExperience, addWorkExperienceCompany, addWorkExperienceJobTitle, addWorkExperienceFrom, addWorkExperencieTo, addWorkExperencieDateOption,
         addWorkExperencieToOption, addWorkExperencieSaveButton};

//Login elements
const usernameInput = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
const passwordInput = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
const loginButton = '.oxd-button';

//Admin tab elements
const adminmenuButton = ':nth-child(1) > .oxd-main-menu-item';
const adminusernameInput = ':nth-child(2) > .oxd-input';
const userroleDropdown = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';
const roleDropdownOption = '.oxd-select-dropdown > :nth-child(2)';
const employeeNameInput = '.oxd-autocomplete-text-input > input';
const employeeNameOption = '.oxd-autocomplete-option';
const statusDropdown = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';
const statusDropdownOption = '.oxd-select-dropdown > :nth-child(2)';
const saveButton = '.oxd-form-actions > .oxd-button--secondary';

//Admin - New user elements
const adduserButton = '.orangehrm-header-container > .oxd-button';
const adduserroleDropdown = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';
const adduserroleDropdownOption = '.oxd-select-dropdown > :nth-child(2)';
const adduseremployeeNameInput = '.oxd-autocomplete-text-input > input';
const adduseremployeeNameOption = '.oxd-autocomplete-option';
const adduserstatusDropdown = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';
const adduserstatusDropdownOption = '.oxd-select-dropdown > :nth-child(2)';
const adduserusernameInput = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input';
const adduserpasswordInput = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input';
const adduserconfirmpasswordInput = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
const addusersaveButton = '.oxd-button--secondary';

//Admin - Edit user elements
const edituserButton = ':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)';
const editemployeenameInput = '.oxd-autocomplete-text-input > input';
const editemployeenameOption = '.oxd-autocomplete-option';
const editusernameInput = ':nth-child(2) > .oxd-input';
const editsaveButton = '.oxd-button--secondary';

//Admin - Delete user elements
const deleteuserButton = ':nth-child(12) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon';
const deleteuserconfirmButton = '.oxd-button--label-danger';
const deleteusercancelButton ='.oxd-button--text';

//PIM tab elements
const pimmenuButton = ':nth-child(2) > .oxd-main-menu-item';
const pimemployeenameInput = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input';
const pimemployeenameOption = '.oxd-autocomplete-option';
const pimemployeeIDInput = ':nth-child(2) > .oxd-input';
const pimsupervisornameInput = ':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input';
const pimsupervisornameOption = '.oxd-autocomplete-dropdown > :nth-child(1)';
const pimemployeestatusDropdown = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';
const pimemployeestatusOption = '.oxd-select-dropdown > :nth-child(2)'; //freelance
const pimincludeDropdown = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';
const pimincludeOption = '.oxd-select-dropdown > :nth-child(2) > span'; //current and past employees
const pimjontitleDropdown = ':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';
const pimjontitleOption = '.oxd-select-dropdown > :nth-child(2)'; //Account assistant
const pimsubunitDropdown = ':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';
const pimsubunitOption = '.--indent-1'; //OrangeHRM
const pimsaveButton = '.oxd-form-actions > .oxd-button--secondary';
const pimreseachButton = '.oxd-button--ghost';

//PIM - Add new user elements
const pimadduserButton = '.orangehrm-header-container > .oxd-button';
const pimfirstnameInput = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input';
const pimmiddlenameInput = ':nth-child(2) > :nth-child(2) > .oxd-input';
const pimlastnameInput = ':nth-child(3) > :nth-child(2) > .oxd-input';
const pimsaveaddButton ='.oxd-button--secondary';

//My Info - Personal details elements
const myinfomenuButton = ':nth-child(6) > .oxd-main-menu-item';
const myinfofirstnameInput = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input';
const myinfomiddlenameInput = ':nth-child(2) > :nth-child(2) > .oxd-input';
const myinfolastnameInput = ':nth-child(3) > :nth-child(2) > .oxd-input';
const myinfoemployeeIDInput = ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
const myinfootherIDInput = ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
const myinfodlicencenumber = ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
const myinfofemaleOption = ':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input';
const myinfosaveButton = ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button';

//My info - Contact details  elements
const contdetailsButton = ':nth-child(2) > .orangehrm-tabs-item';
const contdetailsstreet1Input = ':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
const contdetailsstreet2Input = ':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
const contdetailscityInput = ':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
const contdetailhomeInput = ':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
const contadetailemailInput = ':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
const contdetailsaveButton = '.oxd-form-actions > .oxd-button';

//My info - Emergency contacts elements
const emercontButton = ':nth-child(3) > .orangehrm-tabs-item';
const addemergencyButton = ':nth-child(1) > .orangehrm-action-header > .oxd-button';
const emergencynameInput = ':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
const emergencyrelationshipInput = ':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
const emergencyhomeInput = ':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
const emergencymobileInput = ':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
const emergencywotelephoneInput = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
const emergencysaveButton = '.oxd-button--secondary';

//My info - Dependents elements
const dependentsButton = ':nth-child(4) > .orangehrm-tabs-item';
const adddependentButton = ':nth-child(1) > .orangehrm-action-header > .oxd-button';
const dependentnameInput = ':nth-child(2) > .oxd-input';
const dependentrelationshipInput = '.oxd-select-text';
const dependentrelationshipOption = '.oxd-select-dropdown > :nth-child(2)';
const dependentdobInput = '.oxd-date-input > .oxd-input'
const dependentdobOption = ':nth-child(22) > .oxd-calendar-date';
const dependentsaveButton = '.oxd-button--secondary';

//My info - Inmigration elements
const inmigrationButton = ':nth-child(5) > .orangehrm-tabs-item';
const addinmigrationButton = ':nth-child(1) > .orangehrm-action-header > .oxd-button';
const documentvisaOption = ':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input';
const numberInput = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
const issueDateInput = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input';
const dateOption = ':nth-child(29) > .oxd-calendar-date';
const expiryDateInput = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input';
const expiryDateOption = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input-calendar > .oxd-calendar-wrapper > .oxd-calendar-dates-grid > :nth-child(30) > .oxd-calendar-date';
const eligeblestatusInput = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input';
const inmiSaveButton = '.oxd-button--secondary';

//My info - Edit inmigration record elements
const editinmiButton = ':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)';
const editinminumberInput = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
const editinmicommentInput = '.oxd-textarea';
const editinmisaveButton = '.oxd-button--secondary';

//My info - Delete inmigration record elements
const deleteinmiButton =':nth-child(7) > .oxd-table-cell-actions > :nth-child(1)';
const deleteinmiconfirmButton = ':nth-child(7) > .oxd-table-cell-actions > :nth-child(1)';

//My info - Job elements
const jobmenuButton = ':nth-child(6) > .orangehrm-tabs-item';
const jobJoinedDate = '.oxd-date-input > .oxd-input';
const jobSpecification = '.input-container';
const jobCategory = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';
const subUnit = ':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';
const jobLocation = ':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input';
const employeeStatus = ':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';
const jobTitle = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';

//My info tab - Quailifications elements
const qualificationsButton = ':nth-child(9) > .orangehrm-tabs-item';

//My info - Qualifications/Wrok experience elements
const addWorkExperience = ':nth-child(2) > :nth-child(1) > .orangehrm-action-header > .oxd-button';
const addWorkExperienceCompany = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
const addWorkExperienceJobTitle = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
const addWorkExperienceFrom = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input';
const addWorkExperencieDateOption =':nth-child(28) > .oxd-calendar-date';
const addWorkExperencieTo = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input';
const addWorkExperencieToOption = ':nth-child(21) > .oxd-calendar-date';
const addWorkExperencieSaveButton = '.oxd-button--secondary'
