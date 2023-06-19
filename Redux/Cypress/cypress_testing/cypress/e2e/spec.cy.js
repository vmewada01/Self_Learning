describe('Checking the counter application', () => {
  it('checking the count value', () => {
    cy.visit('http://localhost:3000/')
    cy.get("h1").should("exist")
    cy.get(".addCounter").should("exist")
    cy.get(".reduceCounter").should("exist")
  })
 
  it("Should Increment the Counter",()=> {
    cy.visit("http://localhost:3000/")
    cy.get("h1").should("have.text", "The Count is :  0")

    cy.get(".addCounter").click();

    cy.get("h1").should("have.text", "The Count is :  1");
  })
  
  it("Should Increment multiple times", ()=> {
    cy.visit("http://localhost:3000/")
    cy.get("h1").should("have.text", "The Count is :  0");

     cy.get(".addCounter").click();
     cy.get(".addCounter").click();

     cy.get("h1").should("have.text", "The Count is :  2")

  })

})