import { usernameInput, passwordInput, loginButton,myinfomenuButton, myinfofirstnameInput,myinfomiddlenameInput, 
    myinfolastnameInput, myinfoemployeeIDInput, myinfootherIDInput, myinfofemaleOption, myinfosaveButton, contdetailsButton, 
    contdetailsstreet1Input, contdetailsstreet2Input, contdetailscityInput, contdetailhomeInput, contadetailemailInput, contdetailsaveButton, 
    emercontButton, addemergencyButton, emergencynameInput, emergencyrelationshipInput, emergencyhomeInput, emergencymobileInput, emergencywotelephoneInput, 
    emergencysaveButton,  dependentsButton, adddependentButton, dependentnameInput, dependentrelationshipInput, dependentrelationshipOption, dependentdobInput, 
    dependentdobOption, dependentsaveButton,  inmigrationButton, addinmigrationButton, documentvisaOption, numberInput, issueDateInput, dateOption, expiryDateInput,
    expiryDateOption, eligeblestatusInput} from './Elements - TC.js';

describe('My info tab', function(){
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

    it('Personal Details', function() {
        cy.get(myinfofirstnameInput).clear().type('John');
        cy.get(myinfomiddlenameInput).clear().type('Doe');
        cy.get(myinfolastnameInput).clear().type('Smith');
        cy.get(myinfoemployeeIDInput).clear().type('12345');
        cy.get(myinfootherIDInput).clear().type('6789');
        cy.get(myinfofemaleOption).click();
        cy.get(myinfosaveButton).click();
        cy.wait(2000);
        cy.contains('Successfully Updated').should('be.visible');
    })

    it('Contact details', function() {
        cy.get(contdetailsButton).click();
        cy.get(contdetailsstreet1Input).clear().type('123 Main St');
        cy.get(contdetailsstreet2Input).clear().type('Apt 101');
        cy.get(contdetailscityInput).clear().type('Miami');
        cy.get(contdetailhomeInput).clear().type('1234567890');
        cy.get(contadetailemailInput).clear().type('test@test.com');
        cy.get(contdetailsaveButton).click();
        cy.wait(2000);
        cy.contains('Successfully Updated').should('be.visible');
    })

    it('Emergency contact', function() {
        cy.get(emercontButton).click();
        cy.get(addemergencyButton).click();
        cy.get(emergencynameInput).clear().type('Jane Doe');
        cy.get(emergencyrelationshipInput).clear().type('Spouse');
        cy.get(emergencyhomeInput).clear().type('1234567890');
        cy.get(emergencymobileInput).clear().type('1234567890');
        cy.get(emergencywotelephoneInput).clear().type('1234567890');
        cy.get(emergencysaveButton).click();
        cy.wait(2000);
        cy.contains('Successfully Saved').should('be.visible');
    })

    it('Dependents', function() {
        cy.get(dependentsButton).click();
        cy.get(adddependentButton).click();
        cy.get(dependentnameInput).clear().type('John Doe');
        cy.get(dependentrelationshipInput).click();
        cy.get(dependentrelationshipOption).click();
        cy.get(dependentdobInput).click();
        cy.get(dependentdobOption).click();
        cy.get(dependentsaveButton).click();
        cy.wait(2000);
        cy.contains('Successfully Saved').should('be.visible');        
    })

    it('Inmigration', function() {
        cy.get(inmigrationButton).click();
        cy.get(addinmigrationButton).click();
        cy.get(documentvisaOption).click();
        cy.get(numberInput).clear().type('1234567890');
        cy.get(issueDateInput).click();
        cy.get(dateOption).click();
        cy.get(expiryDateInput).click();
        cy.get(expiryDateOption).click();
        cy.get(eligeblestatusInput).type('Test');
        
    })
    afterEach(function() {
        if (this.currentTest.state === 'failed') {
            cy.wait(2000); 
            cy.screenshot();
        }
    })
});