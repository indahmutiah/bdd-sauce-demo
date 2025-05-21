Feature: Cart Functionality

  Scenario: Successful add to cart
    Given I open the login page
    And I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    And I should be redirected to the inventory page
    When I click the add to cart button for "Sauce Labs Backpack"
    And I click cart button
    Then I should redirected to the cart page
    And I should see "Sauce Labs Backpack" in the cart
    And The price is 29.99