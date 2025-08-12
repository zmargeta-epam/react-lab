describe('React Lab', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https:/api.mock.org/movies?sortBy=popularity&sortOrder=desc', {
      fixture: 'get_discover_movie.json',
    }).as('discover')
    cy.intercept(
      'GET',
      'https:/api.mock.org/movies?filter=Action&sortBy=release_date&sortOrder=desc',
      {
        fixture: 'get_discover_movie_sorted.json',
      }
    ).as('discover')
    cy.intercept('GET', 'https:/api.mock.org/movies?search=Pulp+Fiction&searchBy=title', {
      fixture: 'get_search_movie.json',
    }).as('search')
  })

  it('renders movies', () => {
    // arrange
    cy.visit('/')

    // assert
    cy.get('section[role=tabpanel] > article')
      .should('have.length', 4)
      .then(($articles) =>
        Cypress.$.map($articles, (article) => article.getAttribute('aria-label'))
      )
      .should('include.members', [
        'War of the Worlds',
        'Night Carnage',
        'How to Train Your Dragon',
        'Demon Slayer: Kimetsu no Yaiba Infinity Castle',
      ])
  })

  it('renders movies by genre and sort criteria', () => {
    // arrange
    cy.visit('/')

    // act
    cy.get('menu[aria-label=genres] > li:nth-child(2)').click()
    cy.get('select[aria-label=sort-criteria]').select('Release Date')

    // assert
    cy.url().should('include', '/?genre=1&sort_by=1')
    cy.get('section[role=tabpanel] > article')
      .should('have.length', 4)
      .then(($articles) =>
        Cypress.$.map($articles, (article) => article.getAttribute('aria-label'))
      )
      .should('include.members', [
        'Demon Slayer: Kimetsu no Yaiba Infinity Castle',
        'How to Train Your Dragon',
        'Night Carnage',
        'War of the Worlds',
      ])
  })

  it('searches for a movie', () => {
    // arrange
    cy.visit('/')

    // act
    cy.get('#search-term').type('Pulp Fiction')
    cy.get('#movie-search > button').click()

    // assert
    cy.url().should('include', '/?q=Pulp+Fiction')
    cy.get('article')
      .should('have.length', 3)
      .then(($articles) =>
        Cypress.$.map($articles, (article) => article.getAttribute('aria-label'))
      )
      .should('include.members', [
        'Pulp Fiction',
        'Pulp Fiction: The Golden Age of Storytelling',
        'Pulp Fiction: The Facts',
      ])
  })
})
