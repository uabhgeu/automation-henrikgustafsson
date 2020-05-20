/// <reference types="cypress" />

import faker from 'faker'
import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as roomsPageFunctions from '../pages/roomsPage'
import * as createRoomFunction from '../pages/createRoomsPage'

describe('Test suite', function(){

    this.beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })

    // Test case
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')
    })

    it('View rooms', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.viewRooms(cy, 'Rooms')
        roomsPageFunctions.performLogout(cy, 'Login')
    })

    it.only('Create room', function(){
        let fakerRoomType = faker.random.arrayElement(["Single","Double","Twin"])
        let fakerRoomNumber = faker.random.number({min:200, max:500})
        let fakerFloorNumber = faker.random.number({min:2, max:5})
        let fakerPrice = faker.random.number({min:500, max:1499})
        let fakerFeature = faker.random.arrayElement(["Balcony", "Ensuite", "Sea View", "Penthouse"])
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.viewRooms(cy, 'Rooms')
        roomsPageFunctions.createRoom(cy)
        createRoomFunction.createRoom(cy, fakerRoomType, fakerRoomNumber, fakerFloorNumber, fakerPrice, fakerFeature)
        createRoomFunction.saveRoom(cy, fakerRoomNumber)
        roomsPageFunctions.performLogout(cy, 'Login')
    })

})