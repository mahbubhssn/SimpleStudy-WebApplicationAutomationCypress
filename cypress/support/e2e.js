
// Import commands.js using ES2015 syntax:
import './commands'
Cypress.on("uncaught:exception", (err) => {
    if (err.message === "An error that should be caught") {
        return false
    }
})