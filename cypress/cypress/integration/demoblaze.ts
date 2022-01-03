/// <reference types="cypress" />


describe("login",()=>{
    it('create new acct',()=>{
        //login to ecommerce website.
        cy.visit('https://www.demoblaze.com/')
        cy.log('hi')
        cy.get('#signin2').click();
        cy.wait(4000)
        cy.get('#sign-username').type(random())
        cy.wait(2000)
        cy.get('#sign-password').type(randompassword())
        function random(){
            let random_string='';
            let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            for(let i=0;i<5;i++){
            random_string += characters.charAt(Math.floor(Math.random()* characters.length))
        }
        return random_string;
    }
    function randompassword(){
        var random_string1='';
            var characters='abcdefghijklmnopqrstuvwxyz@#$*1234567890';
            for(var i=0;i<characters.length;i++){
            random_string1 += characters.charAt(Math.floor(Math.random()* characters.length))
        }
        return random_string1;
    }
    // function getRandomInt(min, max) :string{
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1)) + min; 
    // }
    function getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    function randomnumber(){
        // var random = JSON.parse("[" + characters + "]");
        var random='';
            var numbers='1234567890';
            random +=Math.floor(100000000 + Math.random() * 900000000);
            // for(var i=0;i<9;i++){
            //   random+=  Math.floor(Math.random() * 10) + 1 
                // random 
            // random +=numbers.charAt(Math.floor(100000000 + Math.random() * 9000000));
        //  }
        return random;
    }
    function randomyear(){
        var Random='';
            var characters='1234567890';
            for(var i=0;i<9;i++){
            Random +=Math.floor(Math.random() * 4 +1);
         }
        return Random;
    }
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible').click()
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    // cy.get('#itemc').contains('Laptops').click()
    // cy.get('[onclick="byCat("notebook")"]').click()
    // cy.get('button').contains('[onclick="byCat("notebook")"]').click({timeout:40000})
    function alert(message){
        cy.on('window.alert',(str)=>{
            expect(str).to.equal(message)
        })
    }
    cy.get(':nth-child(2) > .nav-link').click()
    cy.wait(2000)
    cy.get('#recipient-email').type(random() +'@gmail.com')
    cy.get('#recipient-name').type(random())
    cy.get('#message-text').type('I got my new nokia lumia 1520 after i received my order the screen have got broken')
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() 
     
    alert('Thanks for the message!')
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('[title="Play Video"]').click()
    cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.get('[class="hrefch"]').contains('Samsung galaxy s6').click()
    cy.get('[onclick="addToCart(1)"]').click()
    alert('product added')
    
    cy.get('#cartur').click()
    cy.get('.table-responsive').should('be.visible')
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type(random())
    cy.get('#country').type('korea')
    cy.get('#city').type('seoul')
    cy.get('#card').type(randomnumber())
    cy.get('#month').type('nov')
    cy.get('#year').type(randomyear())
    cy.wait(6000)

    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    // cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.sweet-alert').should('be.visible')
    cy.get('button').contains('OK').click()
    cy.get('#itemc:nth-child(3)').click()
 })
})
    