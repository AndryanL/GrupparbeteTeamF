import Category from './Category.vue'

describe('<Category />', () => {
  const apiUrl = '**/categories'

  it('renders category list from API', () => {
    const mock = [
      { id: 'c1', name: 'Söta kakor' },
      { id: 'c2', name: 'Veganska' },
    ]

    cy.intercept('GET', apiUrl, {
      statusCode: 200,
      body: mock,
    }).as('getCategories')

    cy.mount(Category)

    cy.wait('@getCategories')

    cy.contains('Kategorier').should('be.visible')
    cy.get('ul > li').should('have.length', mock.length)
    cy.get('ul > li').first().should('contain.text', 'Söta kakor')
    cy.get('img.kladdkaka-icon').should('exist')
  })

  it('shows no categories when API returns empty', () => {
    cy.intercept('GET', apiUrl, {
      statusCode: 200,
      body: [],
    }).as('getCategoriesEmpty')

    cy.mount(Category)
    cy.wait('@getCategoriesEmpty')

    cy.get('ul > li').should('have.length', 0)
  })

  it('handles server error gracefully', () => {
    cy.intercept('GET', apiUrl, {
      statusCode: 500,
      body: { error: 'Server error' },
    }).as('getCategoriesFail')

    cy.mount(Category)
    cy.wait('@getCategoriesFail')

    // No list items should be rendered
    cy.get('ul > li').should('have.length', 0)
  })
})
