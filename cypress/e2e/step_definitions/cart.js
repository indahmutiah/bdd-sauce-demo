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

Given("I should be redirected to the inventory page", () => {
  cy.url().should("include", "/inventory.html");
});

When("I click the add to cart button for {string}", (product) => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When("I click cart button", () => {
  cy.get('[data-test="shopping-cart-link"]').click();
});

Then("I should redirected to the cart page", () => {
  cy.url().should("include", "/cart.html");
});

Then("I should see {string} in the cart", (product) => {
  cy.get('[data-test="inventory-item-name"]').should("contain", product);
});

Then("The price is {float}", (price) => {
  cy.get('[data-test="inventory-item-price"]').should("contain", price);
});
