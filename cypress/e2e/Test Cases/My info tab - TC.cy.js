import {
    usernameInput, passwordInput, loginButton, myinfomenuButton, myinfofirstnameInput, myinfomiddlenameInput,
    myinfolastnameInput, myinfoemployeeIDInput, myinfootherIDInput, myinfofemaleOption, myinfosaveButton, contdetailsButton,
    contdetailsstreet1Input, contdetailsstreet2Input, contdetailscityInput, contdetailhomeInput, contadetailemailInput, contdetailsaveButton,
    emercontButton, addemergencyButton, emergencynameInput, emergencyrelationshipInput, emergencyhomeInput, emergencymobileInput, emergencywotelephoneInput,
    emergencysaveButton, dependentsButton, adddependentButton, dependentnameInput, dependentrelationshipInput, dependentrelationshipOption, dependentdobInput,
    dependentdobOption, dependentsaveButton, inmigrationButton, addinmigrationButton, documentvisaOption, numberInput, issueDateInput, dateOption, expiryDateInput,
    expiryDateOption, eligeblestatusInput, editinmiButton, editinminumberInput, editinmicommentInput, editinmisaveButton, deleteinmiButton,
    deleteinmiconfirmButton, jobJoinedDate, jobTitle, jobSpecification, jobmenuButton, jobCategory, subUnit, jobLocation, employeeStatus, inmiSaveButton, qualificationsButton,
    WorkExperencieTo, addWorkExperience, WorkExperienceCompany, WorkExperienceFrom, WorkExperienceJobTitle, WorkExperencieSaveButton, addEducationButton, educationInstitute,
    educationMajor, educationYear, educationGPA, educationLevel, educationStartDate, educationEndDate, educationSaveButton, educationLevelOption, addSkillsButton, skillDropdown,
    skillYoExperience, skillComment, skillSaveButton, skillDropdownOption, addLicenseButton, licenseTypeDropdown, licenseNumber, licenseIssuedDate, licenseExpiryDate, licenseSaveButton,
    licenseTypeOption
} from './Elements - TC.js';

describe('My info tab', function () {
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.wait(2000)
        cy.get(usernameInput).type('Admin');
        cy.get(passwordInput).type('admin123');
        cy.get(loginButton).click();
        cy.wait(2000)
        cy.get(myinfomenuButton).click();
    })

    it('Personal Details', function () {
        cy.get(myinfofirstnameInput).clear().type('John');
        cy.get(myinfomiddlenameInput).clear().type('Doe');
        cy.get(myinfolastnameInput).clear().type('Smith');
        cy.get(myinfoemployeeIDInput).clear().type('12345');
        cy.get(myinfootherIDInput).clear().type('6789');
        cy.get(myinfofemaleOption).click();
        cy.get(myinfosaveButton).click();
        cy.contains('Successfully Updated').should('be.visible');
    })

    // it('Contact details', function() {
    //     cy.get(contdetailsButton).click();
    //     cy.get(contdetailsstreet1Input).clear().type('123 Main St');
    //     cy.get(contdetailsstreet2Input).clear().type('Apt 101');
    //     cy.get(contdetailscityInput).clear().type('Miami');
    //     cy.get(contdetailhomeInput).clear().type('1234567890');
    //     cy.get(contadetailemailInput).clear().type('test@test.com');
    //     cy.get(contdetailsaveButton).click();
    //     cy.wait(2000);
    //     cy.contains('Successfully Updated').should('be.visible');
    // })

    // it('Emergency contact', function() {
    //     cy.get(emercontButton).click();
    //     cy.get(addemergencyButton).click();
    //     cy.get(emergencynameInput).clear().type('Jane Doe');
    //     cy.get(emergencyrelationshipInput).clear().type('Spouse');
    //     cy.get(emergencyhomeInput).clear().type('1234567890');
    //     cy.get(emergencymobileInput).clear().type('1234567890');
    //     cy.get(emergencywotelephoneInput).clear().type('1234567890');
    //     cy.get(emergencysaveButton).click();
    //     cy.wait(2000);
    //     cy.contains('Successfully Saved').should('be.visible');
    // })

    // it('Dependents', function() {
    //     cy.get(dependentsButton).click();
    //     cy.get(adddependentButton).click();
    //     cy.get(dependentnameInput).clear().type('John Doe');
    //     cy.get(dependentrelationshipInput).click();
    //     cy.get(dependentrelationshipOption).click();
    //     cy.get(dependentdobInput).click();
    //     cy.get(dependentdobOption).click();
    //     cy.get(dependentsaveButton).click();
    //     cy.wait(2000);
    //     cy.contains('Successfully Saved').should('be.visible');        
    // })

    // it('Inmigration', function() {
    //     cy.get(inmigrationButton).click();
    //     cy.get(addinmigrationButton).click();
    //     cy.get(documentvisaOption).click();
    //     cy.get(numberInput).clear().type('1234567890');
    //     cy.get(issueDateInput).click();
    //     cy.get(dateOption).click();
    //     cy.get(expiryDateInput).click();
    //     cy.get(expiryDateOption).click();
    //     cy.get(eligeblestatusInput).type('Test');
    //     cy.get(inmiSaveButton).click();
    //     cy.wait(2000);
    //     cy.contains('Successfully Saved').should('be.visible');

    // })

    // it('Edit inmigration', function() {
    //     cy.get(inmigrationButton).click();
    //     cy.get(editinmiButton).click();
    //     cy.get(editinminumberInput).clear().type('0987654321');
    //     cy.get(editinmicommentInput).clear().type('Test');
    //     cy.get(editinmisaveButton).click();
    //     cy.wait(2000);
    //     cy.contains('Successfully Updated').should('be.visible');
    // })

    // // it('Job Details', function() {
    // //     cy.get(jobmenuButton).click();
    // //     cy.get(jobJoinedDate).should('be.disabled');
    // //     cy.get(jobTitle).should('be.disabled');
    // //     cy.get(jobSpecification).should('be.disabled');
    // //     cy.get(jobCategory).should('be.disabled');
    // //     cy.get(subUnit).should('be.disabled');
    // //     cy.get(jobLocation).should('be.disabled');
    // //     cy.get(employeeStatus).should('be.disabled');

    // //})

    // it('Qualifications - Work experencie', function() {
    //     cy.get(qualificationsButton).click();
    //     cy.get(addWorkExperience).click();
    //     cy.get(WorkExperienceCompany).clear().type('Test');
    //     cy.get(WorkExperienceJobTitle).clear().type('Test');
    //     cy.get(WorkExperienceFrom).click().type('2024-28-03');
    //     cy.get(WorkExperencieTo).click().type('2024-31-03');
    //     cy.get(WorkExperencieSaveButton).click();
    //     cy.contains('Successfully Saved').should('be.visible')
    // })

    // it('Qualifications - Education', function() {
    //     cy.get(qualificationsButton).click();
    //     cy.get(addEducationButton).click();
    //     cy.get(educationInstitute).clear().type('test');
    //     cy.get(educationMajor).clear().type('Test');
    //     cy.get(educationLevel).click();
    //     cy.wait(2000);
    //     cy.get(educationLevelOption).click();
    //     cy.get(educationYear).clear().type('2018');
    //     cy.get(educationGPA).clear().type('4.0');
    //     cy.get(educationStartDate).clear().type('2024-29-03');
    //     cy.get(educationEndDate).clear().type('2024-30-03');
    //     cy.get(educationSaveButton).click();
    //     cy.contains('Successfully Saved').should('be.visible')
    // })

    // it('Quealifications - Skills', function() {
    //     cy.get(qualificationsButton).click();
    //     cy.get(addSkillsButton).click();            
    //     cy.get(skillDropdown).click();
    //     cy.wait(2000);
    //     cy.get(skillDropdownOption).click();
    //     cy.get(skillYoExperience).clear().type('5');
    //     cy.get(skillComment).clear().type('Test');
    //     cy.get(skillSaveButton).click();
    //     cy.contains('Successfully Saved').should('be.visible')
    // })

    // it('Qualifications - License', function() {
    //     cy.get(qualificationsButton).click();
    //     cy.get(addLicenseButton).click();
    //     cy.get(licenseTypeDropdown).click();
    //     cy.wait(2000);
    //     cy.get(licenseTypeOption).click();
    //     cy.get(licenseNumber).clear().type('1234567890');  
    //     cy.get(licenseIssuedDate).click().type('2024-07-03');
    //     cy.get(licenseExpiryDate).click().type('2024-31-03');
    //     cy.get(licenseSaveButton).click();
    //     cy.contains('Successfully Saved').should('be.visible')
    // })


    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.wait(2000);
            cy.screenshot();
        }
    })
});