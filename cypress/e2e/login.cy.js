describe('Sign In with n Test Cases', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('[Positive] Sign in with valid Email and Password', () => {
    cy.readFile('cypress/fixtures/existingAccount.json').then((account) => {
        cy.login(account.emailAddress, account.password)
        cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
      })
  })

  it('[Negative] Sign in with invalid Email and valid Password', () => {
    cy.readFile('cypress/fixtures/invalidEmail.json').then((account) => {
        cy.login(account.emailAddress, account.password)
        cy.get('#email-error').should('be.visible')
        cy.log('Please enter a valid email address (Ex: johndoe@domain.com).')
      })
  })

  it('[Negative] Sign in with valid Email and blank Password', () => {
    cy.readFile('cypress/fixtures/blankPassword.json').then((account) => {
        cy.login(account.emailAddress, account.password)
        cy.get('#pass-error').should('be.visible')
        cy.log('This is a required field.')
      })
  })

  it('[Negative] Sign in with valid Email and invalid Password', () => {
    cy.readFile('cypress/fixtures/invalidPassword.json').then((account) => {
        cy.login(account.emailAddress, account.password)
        cy.get('.message-error').should('be.visible')
        cy.log('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      })
  })

  it('[Negative] Sign in with blank Email and Password', () => {
    cy.readFile('cypress/fixtures/blankSignin.json').then((account) => {
        cy.login(account.emailAddress, account.password)
        cy.get('#email-error').should('be.visible')
        cy.get('#pass-error').should('be.visible')
        cy.log('This is a required field.')
      })
  })
})