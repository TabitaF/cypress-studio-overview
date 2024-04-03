import { containShouldBeVisible, loginPageDefault, startPage } from "../common/utilities";
import { buzzMenuButton, deletePost, editPost, editPostButton, editPostText, mostCommentedPost, mostLikedPost, newPhotoPost, newTextPost, mostRecentPost, makeLikePost, makeCommentPost, sharedPost } from "../common/utilitiesBuzz";

describe('Buzz tab - Test Cases', function () {
    beforeEach(() => {
        startPage();
        loginPageDefault();
        buzzMenuButton()
    })

    it('Buzz - New text post', function () {
        newTextPost('This is a new text post');
        containShouldBeVisible('Successfully Saved');
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

    it('Buzz - New photo post', function () {
        newPhotoPost();
    })

    it('Buzz - Edit a post with photo', function () {
        newPhotoPost();
        editPost();
        editPostText('This is an edition of a post with photo');
        editPostButton();
        containShouldBeVisible('Successfully Updated');
    })

    it('Buzz - Delete a post with photo', function () {
        newPhotoPost();
        deletePost();
        containShouldBeVisible('Successfully Deleted');
    })

    it('Buzz - Change tabs', function () {
        mostCommentedPost();
        mostLikedPost();
        mostRecentPost();
    })

    it('Buzz - Make like in a post', function () {
        newPhotoPost();
        cy.wait(4000);
        makeLikePost();
    })

    it.only('Buzz - Make comment in a post', function () {
        newPhotoPost();
        cy.wait(4000);
        makeCommentPost('This is a comment');
        containShouldBeVisible('Successfully Saved');
    })

    it('Buzz - Make share in a post', function () {
        newPhotoPost();
        cy.wait(4000);
        sharedPost();
        containShouldBeVisible('Successfully Saved');
    })


    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot();
        }
    })
})