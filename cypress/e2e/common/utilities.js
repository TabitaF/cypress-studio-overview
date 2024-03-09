import { loginElements } from "../pages/loginPageElements";

const URL_PAGE = 'https://opensource-demo.orangehrmlive.com/'
/**
 * This function is used to start and clear the page
 */
export function startPage() {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(URL_PAGE);
}

/**
 * This function is used to login to the page
 * @param {string} user - The user to login
 * @param {string} password - The password to login 
 */
export function loginPageDefault(user='Admin', password='admin123') {
    if (user) {
        cy.get(loginElements.usernameInput).type(user);
    }

    if (password) {
        cy.get(loginElements.passwordInput).type(password);
    }

    cy.get(loginElements.loginButton).click();
}