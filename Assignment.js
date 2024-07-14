describe('OpenMRS Application Automation', () => {
    it('login and validate features', () => {
        cy.visit('https://demo.openmrs.org/openmrs/login.htm')


        // fill the username and password
        cy.get('#username').type('Admin')
        cy.get('#password').type('Admin123')

        // click the login button
        cy.get('#loginButton').click();

       //select the location

       cy.get('#Inpatient Ward').select('Inpatient Ward');
       

 cy.get('#Inpatient Ward').check().should('be.checked');
        // Assertion : check if it was login successfully
        // cy.url().sho
    });
});