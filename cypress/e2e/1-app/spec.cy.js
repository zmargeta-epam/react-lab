describe('Application', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('renders counter', () => {
    cy.visit('/')
    cy.get('div.counter').should('include.text', '1')
  })

  it('increments counter', () => {
    cy.visit('/')
    cy.get('div.counter').find('button').contains('+').click()
    cy.get('div.counter').should('include.text', '2')
  })

  it('decrements counter', () => {
    cy.visit('/')
    cy.get('div.counter').find('button').contains('-').click()
    cy.get('div.counter').should('include.text', '0')
  })
})
