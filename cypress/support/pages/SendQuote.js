const INPUT_EMAIL = '#email'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRMPASSWORD = '#confirmpassword'    
const BTN_SEND = '#sendemail'
const ALERT_MESSAGE = '.sweet-alert'



Cypress.Commands.add('sendQuote', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('email'))
    cy.get(INPUT_USERNAME).type('MariaSilva')
    cy.get(INPUT_PASSWORD).type(Cypress.env('password'))
    cy.get(INPUT_CONFIRMPASSWORD).type(Cypress.env('confirm password'))
    
})

Cypress.Commands.add('btnsend', () => {
    cy.get(BTN_SEND).click()
   
})

Cypress.Commands.add('validarMensagemDeSucesso', () => {
    cy.get(ALERT_MESSAGE, { timeout: 10000 }) // Espera até 10 segundos pelo elemento
        .should('be.visible') // Verifica se está visível
        .and('contain', 'Sending e-mail success!');
        
        cy.pause()// Valida o texto
});



