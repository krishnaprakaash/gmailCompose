@composeFunction
Feature: Test the Google Compose feature

  Background: 
    Given User launches the browser and navigates to GMail with "chrome"

  @SendMail
  Scenario Outline: Send mail
    Given User logs in successfully into the mail <DataBinding>
    When User sends mail with the given data
    Then User logsout successfully

    Examples: 
      | DataBinding |
      | TC014       |
      | TC015       |
      | TC016       |
      | TC017       |
      | TC021       |

  @FieldValidation
  Scenario Outline: Field Level Validation
    Given User logs in successfully into the mail <DataBinding>
    When User validates the required field
    Then User logsout successfully

    Examples: 
      | DataBinding |
      | TC001       |
      | TC002       |
      | TC004       |
      | TC005       |
      | TC006       |
      | TC007       |
      | TC008       |
      | TC009       |
      | TC010       |
      | TC011       |
      | TC012       |
      
      
  @Drafts
  Scenario Outline: Drafts Validation
    Given User logs in successfully into the mail <DataBinding>
    When User saves a mail in drafts with the given data
    Then User logsout successfully

    Examples: 
      | DataBinding |
      | TC019       |
      | TC020       |      
      
