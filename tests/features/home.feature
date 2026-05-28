Feature: 'The Internet' - Automation Testing Feature

    Scenario: Verify homepage contents
        Given Launch app
        When Verify page title "The Internet"
        And Verify home page heading
        Then Verify home page navigation hyperlinks

        