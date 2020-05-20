/// <reference types="cypress" />

// Elements

const titleOfRoomsPage = 'Testers Hotel'
const logoutButton = 'button.btn'
const createRoomButton = 'a.btn:nth-child(2)'
const goBackButton = 'a.btn:nth-child(1)'

//const viewRoomButton = ':nth-child(1) > .btn'

// Actions/Functions

function checkTitleOfRoomsPage(cy){
    cy.title().should('eq', titleOfRoomsPage)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function performGoBack(cy){
    cy.get(goBackButton).click()
    cy.contains('Tester Hotel Overview')
}

function createRoom(cy){
    cy.get(createRoomButton).click()
    cy.contains('New Room')
}

// Exports

module.exports = {
    checkTitleOfRoomsPage,
    performLogout,
    performGoBack,
    createRoom,
}