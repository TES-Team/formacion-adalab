@lifeAndCulturePosition
Feature: Life and culture position

  @lifeAndCulturePositionHappyPath
  Scenario: show life and culture position
    Given access to "life and culture position"
     When can see hero
     Then can see solutions section
     And can see values section
     And can see principles section
     And can see information video

  @lifeAndCulturePositionKnowMoreSpotify
  Scenario: navigate to spotify
    Given access to "life and culture position"
    And can see advertising
    When select know more
    Then is to spotify
