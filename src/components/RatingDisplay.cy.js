import RatingDisplay from './RatingDisplay.vue'

describe('<RatingDisplay />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(RatingDisplay)
  })
})