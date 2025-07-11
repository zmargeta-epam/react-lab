describe('Application', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('submits search query', () => {
    cy.visit('/')
    cy.get('form').find('input[type=search]').type('some_query')
    cy.get('form').find('input[type=submit]').click()
    // todo: finish testing actual functionality
  })
})
