/// <reference types="cypress" />

// Elements

const titleOfRoomsPage = 'Testers Hotel'
const logoutButton = 'button.btn'
//const viewRoomButton = ':nth-child(1) > .btn'

// Actions/Functions

function checkTitleOfRoomsPage(cy){
    cy.title().should('eq', titleOfRoomsPage)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


// Exports

module.exports = {
    checkTitleOfRoomsPage,
    performLogout,
}