# utf-8
# language: pt

Funcionalidade: Aplicação de Seguro de Veiculo

    Cenário:  Preenchendo os formulários de seguro de veículo
        Dado que estou na página inicial da aplicação de seguro de veículo
        Quando preencho os campos obrigatorios da aba Enter Vehicle Insurance Data
        E clico no botão next
        E preencho os campos obrigatorios da aba Enter Insurant Data
        E clico no botao next
        E preencho os campos obrigatorios da aba Enter Product Data
        E clico em next
        E seleciono uma opção na aba Select Price Option 
        E aperto em next 
        E preencher os campos obrigatórios da aba Send Quote
        E clico no botão send
        Então será validado com sucesso 

    
    Cenário: Verificar mensagem de erro em caso de preenchimento incorreto
        Dado que estou na página inicial da aplicação de seguro de veículo
        Quando preencho um campo obrigatório com uma informação incorreta
        Então uma mensagem de erro deve ser exibida





   