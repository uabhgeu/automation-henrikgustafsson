/// <reference types="cypress" />

// Elements

const titleOfDasboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const viewRoomButton = ':nth-child(1) > .btn'

// Actions/Functions

function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDasboardPage)
}

function viewRooms(cy, contentToConfirm){
    cy.get(viewRoomButton).click()
    cy.contains(contentToConfirm)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

// Exports

module.exports = {
    checkTitleOfDashboardPage,
    performLogout,
    viewRooms,
}