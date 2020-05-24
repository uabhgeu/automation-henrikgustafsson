/// <reference types="cypress" />

// Elements

const titleOfClientsPage = 'Testers Hotel'
const logoutButton = 'button.btn'
const createClientButton = 'a.btn:nth-child(2)'
const goBackButton = 'a.btn:nth-child(1)'

// Actions/Functions

function checkTitleOfClientsPage(cy){
    cy.title().should('eq', titleOfClientsPage)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function performGoBack(cy){
    cy.get(goBackButton).click()
    cy.contains('Tester Hotel Overview')
}

function createClient(cy){
    cy.get(createClientButton).click()
    cy.contains('New Client')
}


// Exports

module.exports = {
    checkTitleOfClientsPage,
    performLogout,
    performGoBack,
    createClient,
}