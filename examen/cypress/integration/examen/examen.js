import examenPO from "../../support/pageObject/examen/examenPO";

/// <reference types ='Cypress' />
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Exámen', () => {
    const master = new examenPO()

    master.visitPage()

    it('pruebaUno', () => {
    
    // 2.- Aqui va el codigo 

    master.flowLogin("standard_user","secret_sauce")
    master.flowProducts("Jose","Escutia",54989)
        
        

    })
})
