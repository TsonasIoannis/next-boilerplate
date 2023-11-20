import MainMenu from "./MainMenu"

// Cypress Component Test
describe('<MainMenu />', () => {
  it('should render and display expected content', () => {
    // Mount the React component for the About page
    cy.mount(<MainMenu />)

    // Validate that a link with the expected URL is present
    // *Following* the link is better suited to an E2E test
    cy.get('a[href="/docker"]').should('be.visible')
    cy.get('a[href="/ui"]').should('be.visible')
  })
})
