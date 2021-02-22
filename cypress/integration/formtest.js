describe('Page successfully loaded', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  const btn = () => cy.get('button');
  const nav = () => cy.get('nav');
  const home = () => cy.get(':nth-child(1) > .Nav-Link');
  const help = () => cy.get(':nth-child(2) > .Nav-Link');
  const size = () => cy.get('select');
  const bbq = () => cy.get(':nth-child(6) > input');
  const pep = () => cy.get(':nth-child(10) > input');
  const bacon = () => cy.get(':nth-child(12) > input');
  const text = () => cy.get(':nth-child(18) > label > input');

  describe('Checking the elements of the page', () =>{
    it('Can see the elements and click through them', () => {
      nav().should('exist');
      help().should('exist').click();
      home().should('exist').click();
      btn().should('exist').click();
    })
  })

  describe('Filling out the form', () => {
    it('Can fill out the form for a pepperoni bacon pizza', () => {
      btn().should('exist').click();
      btn().should('be.disabled');
      size()
        .should('have.value', '')
        .select('XLarge')
        .should('have.value', 'XLarge');
      bbq().check();
      pep().check();
      bacon().check();
      text().type('Write a funny joke for my pepperoni bacon pizza');
      btn().click();
    })
    
    describe('click the useless help nav', () => {
      it('can click the help nav', () => {
        help().click();
      })
    })
  })
})