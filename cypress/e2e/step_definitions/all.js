const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

const baseUrl = "https://www.saucedemo.com";

Given("I open the login page", () => {
  cy.visit(baseUrl);
});
Given(
  "I enter username {string} and password {string}",
  (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
  }
);
Given(
  "I enter username {string} and password {string}",
  (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
  }
);
Given("I click the login button", () => {
  cy.get('[data-test="login-button"]').click();
});

Then("I should see an error message {string}", (errorMessage) => {
  cy.get('[data-test="error"]').should("contain", errorMessage);
});
