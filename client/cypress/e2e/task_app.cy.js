describe('Task app',()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:5173')
  })

  it('frontpage can be opened',()=>{
      cy.contains('Iniciar sesion')
  })

  it('login form ',()=>{
    cy.contains('Iniciar sesion')
})
})

