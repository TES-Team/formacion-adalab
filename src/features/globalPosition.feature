@globalPosition
Feature: Global position

  @globalPositionHappyPath
  Scenario: show global position
    Given access to "global position"
    When can see navigation bar
    Then can see introduction video
    And can see introduction information
    And can see blog information

  @globalPositionMoreInfoBlog
  Scenario: navigate to blog
    Given access to "global position"
    When select show more
    Then is to blog page