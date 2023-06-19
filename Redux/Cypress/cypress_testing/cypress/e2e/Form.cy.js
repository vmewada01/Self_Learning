
describe("Checking Form Data",()=> {

    beforeEach(()=> {
        cy.visit("http://localhost:3000");
    })
    
    it("Should Intercept the GET request", ()=> {
      //  cy.visit("http://localhost:3000");
        cy.intercept("GET", "http://localhost:8080/posts", {value:"Naresh"}).as("getReq");
        cy.wait("@getReq").should((data)=> {
            console.log("Data from cypress", data)
        })
    })
    it("Should intercept the POST  request", ()=> {
      //  cy.visit("http://localhost:3000");
        cy.intercept("GET", "http://localhost:8080/posts", {value:"Safal"}).as("getReq");
     
   
    cy.intercept("POST", "http://localhost:8080/posts",{
      fixture: "Form"
    }).as("postReq");

    cy.wait ("@getReq")
    cy.get(".handlesubmit").click();
    cy.wait("@postReq")
 
    cy.get("h3").should("have.text", "Vishal")
})
 
 })


    