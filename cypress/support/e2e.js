// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/EnterVehicleInsuranceData'
import './pages/EnterInsurantData'
import './pages/EnterProductData'
import './pages/EnterSelectPriceOption'
import './pages/SendQuote'


    Cypress.on('uncaught:exception', (err, runnable) => {
        // Retorne false para evitar que o Cypress falhe o teste
        if (err.message.includes('e is not defined')) {
            return false
        }
    })