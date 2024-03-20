import { containShouldBeVisible, loginPageDefault, startPage } from "../common/utilities";
import { buzzMenuButton, deletePost, editPost, editPostButton, editPostText, newPhotoPost, newTextPost } from "../common/utilitiesBuzz";

describe ('Buzz tab - Test Cases', function(){
    beforeEach(() => {
        startPage();
        loginPageDefault();
        buzzMenuButton()
    })
    
    it('Buzz - New text post', function () {
        newTextPost('This is a new text post');
        containShouldBeVisible('Successfully Saved');
    })

    it('Buzz - New photo post', function () {
        newPhotoPost();
    })

    it('Buzz - Edit post', function () {
        editPost();
        editPostText('This is an edited post');
        editPostButton();
        containShouldBeVisible('Successfully Updated');
    })

    it('Buzz - Delete post', function () {
        deletePost();
        containShouldBeVisible('Successfully Deleted');
    })


    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot();
        }
    })  
})