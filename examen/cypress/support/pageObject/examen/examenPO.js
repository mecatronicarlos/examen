
class examenPO {
    visitPage () {
        before (() => {
            cy.visit('https://www.saucedemo.com/')
            cy.title().should('eq','Swag Labs')
        })
    }

    // 1.- Aqui va el código
    
    flowLogin(userName,password){
        cy.get('[data-test="username"]').should('be.visible').type(userName).tab().
        type(password)
        cy.get('[data-test="login-button"]').click()
    }

    flowProducts(firtsName,lastName,postalCode){
        cy.get('#item_4_title_link > .inventory_item_name').should('be.visible').click()
        cy.wait(2000)
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.wait(2000)
        cy.get('.shopping_cart_link').click()
        cy.wait(2000)
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type(firtsName)
        cy.get('[data-test="lastName"]').type(lastName)
        cy.get('[data-test="postalCode"]').type(postalCode)
        cy.get('[data-test="continue"]').click()
        cy.wait(2000)
        cy.scrollTo(0,500)
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.wait(2000)
        cy.scrollTo(500,0)
        cy.xpath("//*[@id='react-burger-menu-btn']").click()
        cy.wait(2000)
        cy.xpath("//*[@id='logout_sidebar_link']").click()


    }

}

    
export default examenPO