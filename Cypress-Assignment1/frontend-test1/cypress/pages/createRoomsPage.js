/// <reference types="cypress" />

// Elements

const titleOfCreateRoomsPage = 'Testers Hotel'
const logoutButton = 'button.btn'
const saveRoomButton = 'a.btn:nth-child(2)'
const goBackButton = 'a.btn:nth-child(1)'

const roomTypeSelector = ':nth-child(1) > select'
const numberTextfield = 'div.field:nth-child(2) > input:nth-child(2)'
const floorTextfield = 'div.field:nth-child(3) > input:nth-child(2)'
const availableCheckbox = '.checkbox'
const priceTextfield = 'div.field:nth-child(5) > input:nth-child(2)'
const featureSelector = ':nth-child(6) > select'


// Actions/Functions

function checkTitleOfCreateRoomsPage(cy){
    cy.title().should('eq', titleOfCreateRoomsPage)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function performGoBack(cy){
    cy.get(goBackButton).click()
    cy.contains('Rooms')
}

function createRoom(cy, roomType, roomNumber, floor, price, feature){
    cy.get(roomTypeSelector).select(roomType)
    cy.get(numberTextfield).type(roomNumber)
    cy.get(floorTextfield).type(floor)
    cy.get(availableCheckbox).click()
    cy.get(priceTextfield).type(price)
    cy.get(featureSelector).select(feature)
}

function saveRoom(cy, roomNumber, price){
    cy.get(saveRoomButton).click()
    cy.contains(roomNumber)
}

// Exports

module.exports = {
    checkTitleOfCreateRoomsPage,
    performLogout,
    performGoBack,
    createRoom,
    saveRoom,
}