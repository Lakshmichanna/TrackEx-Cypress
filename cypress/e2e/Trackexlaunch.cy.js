
describe(" Test login ", ()=>{

  context('720p resolution', () => {   // beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      //cy.viewport(1280, 720)
    })

it("Login & Submit the Receipt", ()=>{
  let username = 'mng@mt.com'
  let password ='Msr@123'
  let journeydate = '20'
// cy.request({
//     method:'POST',
//     url:'https://app.trackex.com', 
//     failOnStatusCode: false
//   })
// cy.visit('https://app.trackex.com');
cy.viewport(1280, 720)
cy.visit('https://qacorporate.trackex.com:8082/trackexb2e-v4/login', { failOnStatusCode: false });



// username& next btn
cy.get('#loginEmailTrackExB2E').type(username);
cy.get('.col-md-12 > .btn').click();

// password & Login btn
cy.get('#LoginPasswordTrackExB2E').type(password)
cy.get('.btn.btn-brand.btn-elevate.btn-block').click()
//cy.wait(5000)
if(cy.get('#swal2-title').should('have.text', 'User Already Logged In')){
  // Code to execute if the element exists
  cy.log('Override pop up displayed!');
  cy.get('.swal2-confirm').click()
}else {
    cy.log('Override pop up not displayed')
}
//Homepage 

//cy.get('#REQUESTS').should('exists')
cy.get('#REQUESTS').click()
// My request - Force click of hidden element 
cy.contains('My Receipts').click({force:true});
cy.contains(' Manually Add ').click()
//expense type selection
cy.get("input[role='combobox']").type('Breakfast').type("{enter}")
cy.wait(1000)
cy.get('#labelForDescription').type('Outing')
//click date picker
cy.get('#kt_datepicker_1').click({force:true})
cy.wait(2000)
//select the date
cy.get('.ngb-dp-today > .btn-light').click()
// Click the country & select the country 
cy.wait(2000)
cy.get('#labelForCountryCurrency > .ng-select-container > .ng-value-container > .ng-input > input').type('India').type("{enter}")
// Enter the cost 
cy.get('#labelForCost').type('800')
cy.get('#labelForPaymentMode').type('Card').type("{enter")
cy.get('#kt_typeahead_vendor').type('Vendor Morning')
cy.get('#addExpense_notify_btn').click()
cy.wait(3000)
//logout
cy.get('.kt-header__topbar-user').click()
cy.get('.btn.btn-label-brand.btn-sm.btn-bold').click()


})




  })

