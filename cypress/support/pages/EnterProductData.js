const SELECT_STARTDATE = '#startdate'
const SELECT_INSURANCE = '#insurancesum'
const SELECT_MERITRATING = '#meritrating'
const SELECT_DAMAGEINSURANCE = '#damageinsurance'
const SELECT_OPTIONALPRODUCTS = 'label.ideal-radiocheck-label'
const SELECT_COURTESYCAR = '#courtesycar'
const BTN_NEXTPRICE = '#nextselectpriceoption'


Cypress.Commands.add('inserirDadosProduct', () => {
    cy.get(SELECT_STARTDATE).type('10/05/2025')
    cy.get(SELECT_INSURANCE).select('3.000.000,00')
    cy.get(SELECT_MERITRATING).select('Super Bonus')
    cy.get(SELECT_DAMAGEINSURANCE).select('Full Coverage')
    cy.get(SELECT_OPTIONALPRODUCTS).contains('Legal').click()
    cy.get(SELECT_COURTESYCAR).select('Yes')
})

Cypress.Commands.add('nextbotao', () => {
    cy.get(BTN_NEXTPRICE).click()
})