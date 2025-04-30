describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  }),
  it('Failed the test', () => {
    expect(true).to.equal(false)
  })
})

