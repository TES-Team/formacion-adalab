@opportunitiesPosition
Feature: opportunities position

  @opportunitiesPositionHappyPath
  Scenario: show opportunities position
    Given access to "opportunities position"
    When can see introduction image
    Then can see opportunities list
    And can see send us your CV

  @opportunitiesPositionShowMore
  Scenario: show opportunities position
    Given access to "opportunities position"
    When select show more opportunities
    Then can see more opportunities


  @opportunitiesPositionOportunity
  Scenario Outline: Oportunity
    Given access to "opportunities position"
    When select "<title>"
    Then is to "<url>"
    Examples:
      | Programador Junior Cobol - Banca Privada | https://www.bbvaitspain.com/oportunidades/programador-junior-cobol-banca-privada/ |

# | Programador Front para Mobile - Javascript | https://www.bbvaitspain.com/oportunidades/programador-front-para-mobile-javascript/ |

# | Experto en calidad de software y testing | bbvaitspain.com/oportunidades/experto-en-calidad-de-software-testing/ |




#   @globalPositionFilters
#   Scenario: filter
#     Given access to "opportunities position"
#     When select show more
#    Then is to blog page


