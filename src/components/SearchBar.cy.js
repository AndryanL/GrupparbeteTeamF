import SearchBar from './SearchBar.vue'

describe('<SearchBar />', () => {
  it('renders input with placeholder', () => {
    cy.mount(SearchBar)
    cy.get('input.search-input').should('exist').and('have.attr', 'placeholder', 'Sök recept...')
  })

  it('updates value when typing and shows clear button', () => {
    cy.mount({
      components: { SearchBar },
      template: `\
        <div>\
          <SearchBar v-model="search" />\
          <p class=\"out\">{{ search }}</p>\
        </div>\
      `,
      data() {
        return { search: '' }
      }
    })

    // type into input and assert value and binding update
    cy.get('input.search-input').type('kokos')
    cy.get('input.search-input').should('have.value', 'kokos')
    cy.get('p.out').should('contain', 'kokos')

    // clear button should appear
    cy.get('button.clear-btn').should('be.visible')

    // clicking clear empties input and updates bound value
    cy.get('button.clear-btn').click()
    cy.get('input.search-input').should('have.value', '')
    cy.get('p.out').should('have.text', '')
  })

  it('debug: dump body html and take screenshot', () => {
    cy.mount(SearchBar)
    // log a short preview of body's HTML so we can inspect what rendered
    cy.get('body').invoke('html').then((html) => {
      // log first 1000 chars to Cypress command log
      cy.log(html.slice(0, 1000))
    })
    // take a screenshot of the mounted component for visual inspection
    cy.screenshot('searchbar-debug')
  })
})
