describe("Registration",()=>
{
it("Launch the app & new SignUp",()=>
{
    let expname ='testerQA'
    let email ='pmsan@yopmai.com'
    cy.visit('https://automationexercise.com')
        
    cy.title().should('contains','Exercise')
    cy.log('Successfully launched')

    cy.get('.fa.fa-lock').click()
    
    cy.get("input[placeholder='Name']").type(expname)
    cy.get("input[data-qa='signup-email']").type(email)
    cy.get("[data-qa='signup-button']").click()

        // cy.get("#name").then((x)=>{
        //     // BDD style
        //     const actualname =x.text()
        //     expect(actualname).to.equal(expname)
        //     expect(actualname).to.not.equal(expname)
        

        //     // TDD style
        //     assert.equal(actualname,expname)
        //     assert.notEqual(actualname,expname)

        // })
        // cy.get("#email").then((y)=>{
        //     // BDD style
        //     let actualname1 =y.text()

        //     // expect(actualname1).to.equal(email)
        //     // expect(actualname1).to.not.equal(email)
        

        //     // TDD style
        //     assert.equal(actualname1,email)
        //     assert.notEqual(actualname1,email)

        // })
        
    // Radio button check
    cy.get("#id_gender1").check().should('be.checked')
    cy.get("#password").type("Ae@123")

    // selecting the dropdowns 
    cy.get("#days").select("5").should('have.value','5')
    cy.get("#months").select("March")
    cy.get("#years").select("2000").should('have.value','2000')
    cy.get('#newsletter').check().should('be.checked')
    cy.get("#optin").check()
    cy.get("#first_name").type("Post")
    cy.get("#last_name").type("man")
    cy.get("#address1").type("Address one")
    cy.get("#address2").type("Add 2")
    cy.get("#state").type("Telangana")
    cy.get("#city").type("Hyd")
    cy.get("#zipcode").type("25874")
    cy.get("#mobile_number").type("7896541230") 
    cy.get("button[data-qa='create-account']").click()

    // Account Created successfully


   // cy.get("h2[class='title text-center'] b").text()
    

    //Element =cy.get("Account Created successfully")
    
    

        cy.log("Account Created successfully")
        

    cy.get(".btn.btn-primary").should('exist').click()

    cy.get("ul[class='nav navbar-nav'] li a b").then((login)=>{
        
        const text =login.text()

        expect(text).to.equal(expname)
        
    
    

    })

})


})