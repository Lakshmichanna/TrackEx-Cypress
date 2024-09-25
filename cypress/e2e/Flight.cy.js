describe("Flight Booking", ()=> {

    it("Login & Flight booking 003", ()=>{

        let username = 'mng@mt.com'
        let password ='Msr@123'
        let journeydate = '20'

        cy.viewport(1280, 720)
        cy.visit('https://qacorporate.trackex.com:8082/trackexb2e-v4/login', { failOnStatusCode: false });
        cy.title().should('contains','Track')
        cy.log('Successfully launched the Application')
        // username& next btn
        cy.get('#loginEmailTrackExB2E').type(username);
        cy.get('.col-md-12 > .btn').click();

        // password & Login btn
    cy.get('#LoginPasswordTrackExB2E').type(password)
    cy.get('.btn.btn-brand.btn-elevate.btn-block').click()
    cy.wait(5000)
    // checking the override pop up exists or not 
  /*  if(cy.get('#swal2-title').should('have.text', 'User Already Logged In')){
      // Code to execute if the element exists
      cy.log('Override pop up displayed!');
      cy.get('.swal2-confirm').click()
    }else {
        cy.log('Override pop up not displayed')
    }*/
    
   // cy.get('.swal2-confirm').should('exist').click()
        // Book Your Trip 
    cy.get('#BOOK_TRIP > .kt-menu__link-icon > .icon').click()
    // Flight search fields
    cy.get('#DestinationField').click()
    cy.wait(1000)
    cy.get('#OriginField').type('sfo'),{ parseSpecialCharSequences: false }
    cy.get('#ngb-typeahead-0-0').click()
    cy.get('#DestinationField').type('lax')
    cy.get('#ngb-typeahead-1-0').click()
    // double click the element bcz calendar is hidding for one click 
    cy.get("input[placeholder='Departing']").click()
    cy.get("input[placeholder='Departing']").click()
    cy.get("button[title='Next month']").click()
    cy.get('ngb-datepicker .ngb-dp-day') .contains(journeydate).click();
    cy.contains('Search').click()
    // checking the element present condition using if 
    cy.get('.flt-img').then(($el) => {
        if ($el.length) {
        // Element exists, do something
        
        cy.log(' Searching the results.....')
        } else {
        // Element does not exist, do something else
        cy.log('Search is Failed')
        // Taking screenshot by passing additional options like
        cy.screenshot('Search is failed', {
            capture: 'viewport',    // Options: 'viewport', 'fullPage', 'runner'
            clip: { x: 0, y: 0, width: 1000, height: 600 },
            blackout: ['.sensitive-info']  // Black out parts of the screen
          });
          
        }
        });
        // Waiting for the element to be visible
        cy.get('#Flightlists > :nth-child(1) > .kt-portlet > .kt-portlet__body', { timeout: 60000 }).should('be.visible');
        //cy.wait(5000)
       // cy.get('.btn btn-warning text-white px-4 bk_select btn-tall d-md-inline-block ng-star-inserted').click({force:true});
        cy.get(':nth-child(1) > .kt-portlet > .kt-portlet__body > :nth-child(1) > .col-sm-4 > .listing-price > .price-btn > .btn').click({force:true})
        cy.wait(5000)
        //upgrade option selecting if display
        cy.get('.col-sm-12 > .d-block').then((el) =>{
            if(el.length>0){
                cy.get('.col-sm-12 > .d-block').click()
            }
            else{
                cy.log('No upgrade options displayed to select')
            }
        })
        // Review page 
        cy.get('#reason').type('one way search')
        cy.get('.d-flex > .btn').click()
        cy.wait(5000)
        //traveler details page 
        cy.get('.kt-form__actions > .btn-primary').click()
        cy.wait(2000)
        // Review details pop up 
        cy.get('.btn.btn-primary.font-weight-bold').click({force:true})
        // payment page 
        cy.get('#wallets-tab').click()

        if(cy.get('.text-success.mr-3').should('have.text', 'Balance is available')){
            cy.get("div[class='ng-star-inserted'] button[class='btn btn-warning text-white px-4 btn-tall payment-btn']").click()
        }
        else{

            cy.get('#cards-tab').click()
            cy.get('#paymentCardNumberTrackExB2E').type('370000000000002')
            cy.get('#paymentCardNameTrackExB2E').type('NDN Nidhi')
            cy.get('#paymentExpMonthTrackExB2E').type('05')
            cy.get('#paymentExpyearTrackExB2E').type('2027')
            cy.get('#paymentCVVTrackExB2E').type('852')
            cy.get('.cardSection > :nth-child(1) > .col-lg-10 > :nth-child(1) > .mt-5 > .row > .col-5 > .btn').click()
                       
        }

        cy.get('.swal2-popup',{ timeout: 60000 }).should('be.visible').then($button => {
            if ($button.length>0) {
              // Perform actions when the button exists
              cy.log('Booking failed... ');
              cy.screenshot('failure-screenshot');
              cy.get('.swal2-confirm').click(); 
            } else {
              // Actions when the button does not exist
              cy.log('Button does not exist.');
            }
          });
          //logout
cy.get('.kt-header__topbar-user').click()
cy.get('.btn.btn-label-brand.btn-sm.btn-bold').click()

   


    })
})