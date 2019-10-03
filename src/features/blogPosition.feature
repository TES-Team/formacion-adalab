@blogPosition
Feature: Blog position

  @blogPositionHappyPath
  Scenario: show blog position
    Given access to "blog position"
    When can see navigation bar
    Then can see list with four links go to navs-tab
    And can see three links go to news
    And can see blog panel information


  @bloglPositionRecentsNews
  Scenario: navigate to blog
    Given access to "blog position"
    When select news-recientes
    Then can see news-recientes

  @bloglPositionOlderNews
  Scenario: navigate to blog
    Given access to "blog position"
    When select news-antiguas
    Then can see news-antiguas

  @bloglPositionPopularNews
  Scenario: navigate to blog
    Given access to "blog position"
    When select most-popular
    Then can see most-popular


  @blogPositionSelectLangEn
  Scenario: show blog position
    Given access to "blog position"
    When select language "english"
    Then is to lang page En



# @bloglPositionNavsPeople
# Scenario: navigate to blog
#   Given access to "people" in blog section
#   When can see information people
#   Then is to blog page

# @bloglPositionNavsOpenness
# Scenario: navigate to blog
#   Given access to "openness" in blog section
#   When can see information openness
#   Then is to blog page

# @bloglPositionNavsSurfers
# Scenario: navigate to blog
#   Given access to "surfers" in blog section
#   When can see information surfers
#   Then is to blog page

# @bloglPositionNavs
# Scenario: navigate to blog
#   Given access to "ownership" in blog section
#   When can see information ownership
#   Then is to blog page







