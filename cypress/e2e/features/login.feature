Feature: Login Functionality

  Scenario: Successful Login with Valid Credentials
    Given I open the login page
    When I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page