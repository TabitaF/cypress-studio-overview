import { usernameInput, passwordInput, loginButton, adminmenuButton, adminusernameInput, userroleDropdown, roleDropdownOption, employeeNameInput, employeeNameOption, statusDropdown, statusDropdownOption, saveButton, adduserButton, adduserroleDropdown, adduserroleDropdownOption, adduseremployeeNameInput, adduseremployeeNameOption, adduserstatusDropdown, adduserstatusDropdownOption, adduserusernameInput, adduserpasswordInput, adduserconfirmpasswordInput, addusersaveButton, edituserButton, editemployeenameInput, editemployeenameOption, editempoloyeenameInput, editsaveButton, deleteuserButton, deleteuserconfirmButton, deleteusercancelButton} from "./Elements.js";

describe('Admin tab - TC', function(){
    beforeEach(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(usernameInput).type('Admin');
      cy.get(passwordInput).type('admin123');
      cy.get(loginButton).click();
      cy.get(adminmenuButton).click();
    })

         it('Admin tab filters', function() {
            cy.get(adminusernameInput).type('Test01');
            cy.wait(2000);
            cy.get(userroleDropdown).click();
            cy.get(roleDropdownOption).click();
            cy.get(employeeNameInput).type('te');
            cy.wait(2000);
            cy.contains('Wendolyn Mr. Teena Robel Fisher').click();
            cy.get(statusDropdown).click();
            cy.get(statusDropdownOption).click();
            cy.get(saveButton).click();
            cy.contains('Dashboard').should('be.visible');
        })

         it('Admin - Add new user', function() {
            cy.get(adduserButton).click();
            cy.get(adduserroleDropdown).click();
            cy.get(adduserroleDropdownOption).click();
            cy.get(adduseremployeeNameInput).click();
            cy.get(adduseremployeeNameInput).type('te');
            cy.wait(2000);
            cy.contains('Wendolyn Mr. Teena Robel Fisher').click();
            cy.get(adduserstatusDropdown).click().get(adduserstatusDropdownOption).click();
            cy.get(adduserusernameInput).type('Test01');
            cy.get(adduserpasswordInput).type('admin123');
            cy.get(adduserconfirmpasswordInput).type('admin123');
            cy.get(addusersaveButton).click();
            cy.wait(2000);
            cy.contains('Successfully Saved').should('be.visible');
        })

         it('Admin - Edit user', function() {
            cy.get(edituserButton).click();
            cy.get(editemployeenameInput).click();
            cy.get(editemployeenameInput).clear('Ti').type('Timothy Lewis Amiano');
            cy.wait(2000);
            cy.contains('Timothy Lewis Amiano').click();
            cy.get(editsaveButton).click();
            cy.contains('Successfully Update').should('be.visible');
        })
        
         it('Admin - Delete user', function() {
            cy.get(deleteuserButton).click();
            cy.get(deleteuserconfirmButton).click();
            cy.contains('Successfully Deleted').should('be.visible');
        })
            
    afterEach(function() {
        if (this.currentTest.state === 'failed') {
            cy.wait(2000); 
            cy.screenshot();
            }   
        })
    });