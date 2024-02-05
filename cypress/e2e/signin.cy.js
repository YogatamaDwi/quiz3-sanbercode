describe('Login with 3 Test Cases', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Login with Valid Data', () => {
        // Read JSON file valid account
        cy.readFile('cypress/fixtures/existingAccount.json').then((account) => {
            cy.signin(account.emailAddress, account.password)
            cy.get('li.greet.welcome').find('span.logged-in').should('exist').and('contain.text', 'Welcome, Miyako Magic Jar')
            cy.log('success bro')
        })
    })

    it('[Negative] Sign In with Email blank', () => {
        cy.readFile('cypress/fixtures/withoutEmail.json').then((account) => {
            cy.signin(account.emailAddress, account.password)
            cy.get('#email-error').should('be.visible')
            cy.log('This is a required field.')
        })
    })

    it('[Negative] Sign up with Password blank', () => {
        cy.readFile('cypress/fixtures/withoutPassword.json').then((account) => {
          cy.signin(account.emailAddress, account.password)
          cy.get('#pass-error').should('be.visible')
          cy.log('This is a required field.')
        })
    })
})