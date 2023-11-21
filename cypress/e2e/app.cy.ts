describe('Navigation', () => {
    it('should navigate to the docker page', () => {
      // Start from the index page
      cy.visit('/')
   
      // Find a link with an href attribute containing "/docker" and click it
      cy.get('a[href*="/docker"]').click()
   
      // The new url should include "/docker"
      cy.url().should('include', '/docker')
   
      // The new page should contain an h1 with "Understanding Next.JS Docker Images"
      cy.get('h1').contains('Understanding Next.JS Docker Images')
    })

    it('should navigate to the ui page', () => {
      // Start from the index page
      cy.visit('/')
   
      // Find a link with an href attribute containing "/ui" and click it
      cy.get('a[href*="/ui"]').click()
   
      // The new url should include "/ui"
      cy.url().should('include', '/ui')
   
      // The new page should contain an h1 with "Most Popular UI libraries"
      cy.get('h1').contains('Most Popular UI libraries')
    })
  })