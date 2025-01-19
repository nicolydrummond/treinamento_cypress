Given ('que estou na página inicial da aplicação de seguro de veículo', () => {
    cy.visit('https://sampleapp.tricentis.com/101/app.php')
})


When ('preencho os campos obrigatorios da aba Enter Vehicle Insurance Data', () => {
    cy.inserirDadosVehicleInsurance() 

})

And ('clico no botão next', () => {     //passa pra segunda aba
    cy.clicarbotao()
})

And ('preencho os campos obrigatorios da aba Enter Insurant Data', () => {
    cy.inserirDadosInsurant()
})

And ('clico no botao next', () => {
    cy.botaonext()
})

And ('preencho os campos obrigatorios da aba Enter Product Data', () => {
    cy.inserirDadosProduct() 
})

And ('clico em next', () => {
    cy.nextbotao()
})

And ('seleciono uma opção na aba Select Price Option', () => {
    cy.selecionarplano()
})

And ('aperto em next', () => {
    cy.btn_nxt_spo()
})

And ('preencher os campos obrigatórios da aba Send Quote', () => {
    cy.sendQuote()
})

And ('clico no botão send', () => {
    cy.btnsend()
})

Then('será validado com sucesso', () => {
    cy.validarMensagemDeSucesso()
})

