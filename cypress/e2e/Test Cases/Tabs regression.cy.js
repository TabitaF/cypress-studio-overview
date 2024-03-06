it('Tabs regression', function() {
  cy.visit('https://opensource-demo.orangehrmlive.com/');
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
  cy.get('.oxd-button').click();
  cy.get(':nth-child(1) > .oxd-main-menu-item').click();
  cy.get(':nth-child(2) > .oxd-main-menu-item').click();  
  cy.get(':nth-child(3) > .oxd-main-menu-item').click();
  cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(5) > .oxd-main-menu-item').click();
  cy.get(':nth-child(6) > .oxd-main-menu-item').click();
  cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(9) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(10) > .oxd-main-menu-item').click();
  cy.get('.oxd-button--ghost').click();
  cy.get(':nth-child(11) > .oxd-main-menu-item > .oxd-text').click();
  cy.get(':nth-child(12) > .oxd-main-menu-item > .oxd-text').click();
});