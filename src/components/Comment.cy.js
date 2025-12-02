import Comment from './Comment.vue'

describe('<Comment />', () => {
  const recipeId = 'test-recipe-123'
  const mockComments = [
    {
      id: '1',
      name: 'Anna',
      comment: 'Denna kladdkaka var fantastisk!',
      createdAt: '2025-11-20T10:30:00Z'
    },
    {
      id: '2',
      name: 'Johan',
      comment: 'Väldigt gott recept, rekommenderas!',
      createdAt: '2025-11-21T14:15:00Z'
    }
  ]

  it('displays loading state initially', () => {
    cy.intercept('GET', `**/recipes/${recipeId}/comments`, { delay: 1000 }).as('loadComments')
    cy.mount(Comment, {
      props: {
        recipeId
      }
    })
    cy.contains('Laddar kommentarer…').should('be.visible')
  })

  it('renders comments after loading', () => {
    cy.intercept('GET', `**/recipes/${recipeId}/comments`, {
      statusCode: 200,
      body: mockComments
    }).as('loadComments')

    cy.mount(Comment, {
      props: {
        recipeId
      }
    })

    // Wait for comments to load
    cy.wait('@loadComments')

    // Check that loading message is gone
    cy.contains('Laddar kommentarer…').should('not.exist')

    // Check that comments are rendered
    cy.contains('Anna').should('be.visible')
    cy.contains('Johan').should('be.visible')
    cy.contains('Denna kladdkaka var fantastisk!').should('be.visible')
    cy.contains('Väldigt gott recept, rekommenderas!').should('be.visible')

    // Verify the number of comment cards
    cy.get('.comment-card').should('have.length', 2)
  })

  it('displays error message on failed request', () => {
    cy.intercept('GET', `**/recipes/${recipeId}/comments`, {
      statusCode: 500,
      body: { error: 'Server error' }
    }).as('failedRequest')

    cy.mount(Comment, {
      props: {
        recipeId
      }
    })

    cy.wait('@failedRequest')

    // Check that error message is displayed
    cy.contains('Kunde inte hämta kommentarer').should('be.visible')
  })

  it('displays anonymous name if comment has no name', () => {
    const commentsWithoutNames = [
      {
        id: '1',
        name: null,
        comment: 'Anonym kommentar',
        createdAt: '2025-11-20T10:30:00Z'
      }
    ]

    cy.intercept('GET', `**/recipes/${recipeId}/comments`, {
      statusCode: 200,
      body: commentsWithoutNames
    }).as('loadComments')

    cy.mount(Comment, {
      props: {
        recipeId
      }
    })

    cy.wait('@loadComments')
    cy.contains('Anonym').should('be.visible')
  })

  it('formats dates correctly', () => {
    cy.intercept('GET', `**/recipes/${recipeId}/comments`, {
      statusCode: 200,
      body: mockComments
    }).as('loadComments')

    cy.mount(Comment, {
      props: {
        recipeId
      }
    })

    cy.wait('@loadComments')

    // Check that dates are formatted (Swedish format)
    cy.get('.comment-date').first().should('contain', '20')
    cy.get('.comment-date').first().should('contain', 'nov')
  })
})
