Feature: "Get 200 status for profile endpoint"
 As an api user
 I want to get a successful response from profile GET endpoint
 So that I can view profile

 Scenario: Get profile data
   Given a user has navigated to the profile endpoint
   Then a result for "Jillian Taylor" should be present
   And I create a new profile for "James Bond" with id "007"
   And I should get "James Bond" data in profile list for id "007"
   And I add description as "Bond, James Bond" to the profile using id "007"
   Then I remove the user using id "007"