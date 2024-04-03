import { buzzPageElements } from "../elementsPages/buzzPageElments";

const imageTest = 'cypress/fixtures/imageTest.png'
const images2 = 'cypress/fixtures/images2.png'

/** 
 * This function clicks on the buzz menu button
 */
export function buzzMenuButton() {
    cy.get(buzzPageElements.buzzMenuButton).click();
}

/** 
 * This function creates a new text post
 * @param {string} text - The text to be posted
 */
export function newTextPost(text) {
    cy.get(buzzPageElements.mindPostBox).type(text);
    cy.get(buzzPageElements.postButton).click();
}

/**
 * This function creates a new photo post
 */
export function newPhotoPost() {
    cy.get(buzzPageElements.sharePhotosButton).click();
    cy.get('input[type=file]').selectFile(images2, { force: true });
    cy.get(buzzPageElements.sharePhotoButton).click();
}

/**
 * This function edit an existing post
 */
export function editPost() {
    cy.get(buzzPageElements.opcionesPost).click();
    cy.get(buzzPageElements.editPost).click();
}

/**
 * This function edits the text of an existing post
 * @param {string} text - The text to be edited
 */
export function editPostText(text) {
    cy.get(buzzPageElements.editPostText).clear().type(text);
}

/**
 * This function clicks the edit post button
 */
export function editPostButton() {
    cy.get(buzzPageElements.editPostButton).click();
}

/**
 * This function deletes an existing post
 */
export function deletePost() {
    cy.get(buzzPageElements.opcionesPost).click();
    cy.get(buzzPageElements.deletPost).click();
    cy.get(buzzPageElements.confirmDeletButton).click();
}

/**
 * This function clicks on the most recent post button
 */
export function mostRecentPost() {
    cy.get(buzzPageElements.mostRecentButton).click();
    cy.wait(2000);
}

/**
 * This function clicks on the most liked post button
 */
export function mostLikedPost() {
    cy.get(buzzPageElements.mostLikedButton).click();
    cy.wait(2000);
}

/**
 * This function clicks on the most commented post button
 */
export function mostCommentedPost() {
    cy.get(buzzPageElements.mostoCommentedButton).click();
    cy.wait(2000);
}

/**
 * This function clicks on the like button of a post
 */
export function makeLikePost() {
    cy.get(buzzPageElements.likeButton).click({ force: true });
}

/**
 * This function clicks on the comment button of a post
 * @param {string} text 
 */
export function makeCommentPost(text) {
    cy.get(buzzPageElements.commentButton).click();
    cy.get(buzzPageElements.commentBox).click();
    cy.get(buzzPageElements.commentBox).type(text).type('{enter}');
}

export function sharedPost() {
    cy.get(buzzPageElements.sharedButton).click();
    cy.get(buzzPageElements.sharePhotoButton).click();
}