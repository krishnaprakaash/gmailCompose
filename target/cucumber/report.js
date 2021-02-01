$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test/resources/features/compose.feature");
formatter.feature({
  "line": 2,
  "name": "Test the Google Compose feature",
  "description": "",
  "id": "test-the-google-compose-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Send mail",
  "description": "",
  "id": "test-the-google-compose-feature;send-mail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SendMail"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User logs in successfully into the mail \u003cDataBinding\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User sends mail with the given data",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "test-the-google-compose-feature;send-mail;",
  "rows": [
    {
      "cells": [
        "DataBinding"
      ],
      "line": 14,
      "id": "test-the-google-compose-feature;send-mail;;1"
    },
    {
      "cells": [
        "TC014"
      ],
      "line": 15,
      "id": "test-the-google-compose-feature;send-mail;;2"
    },
    {
      "cells": [
        "TC015"
      ],
      "line": 16,
      "id": "test-the-google-compose-feature;send-mail;;3"
    },
    {
      "cells": [
        "TC016"
      ],
      "line": 17,
      "id": "test-the-google-compose-feature;send-mail;;4"
    },
    {
      "cells": [
        "TC017"
      ],
      "line": 18,
      "id": "test-the-google-compose-feature;send-mail;;5"
    },
    {
      "cells": [
        "TC021"
      ],
      "line": 19,
      "id": "test-the-google-compose-feature;send-mail;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 356279800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 18465446900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Send mail",
  "description": "",
  "id": "test-the-google-compose-feature;send-mail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SendMail"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User logs in successfully into the mail TC014",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User sends mail with the given data",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "014",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 55476575700,
  "status": "passed"
});
formatter.match({
  "location": "Compose.ComposeMail()"
});
formatter.result({
  "duration": 28895681700,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 4160990800,
  "status": "passed"
});
formatter.after({
  "duration": 1426124200,
  "status": "passed"
});
formatter.before({
  "duration": 86339400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 16197941600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Send mail",
  "description": "",
  "id": "test-the-google-compose-feature;send-mail;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SendMail"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User logs in successfully into the mail TC015",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User sends mail with the given data",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "015",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 49792295400,
  "status": "passed"
});
formatter.match({
  "location": "Compose.ComposeMail()"
});
formatter.result({
  "duration": 30578550700,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 3990291200,
  "status": "passed"
});
formatter.after({
  "duration": 1696031600,
  "status": "passed"
});
formatter.before({
  "duration": 80121400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 15021505600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Send mail",
  "description": "",
  "id": "test-the-google-compose-feature;send-mail;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SendMail"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User logs in successfully into the mail TC016",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User sends mail with the given data",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "016",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 50183261400,
  "status": "passed"
});
formatter.match({
  "location": "Compose.ComposeMail()"
});
formatter.result({
  "duration": 29891495900,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 4140800300,
  "status": "passed"
});
formatter.after({
  "duration": 1576112500,
  "status": "passed"
});
formatter.before({
  "duration": 83519000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 10626622000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Send mail",
  "description": "",
  "id": "test-the-google-compose-feature;send-mail;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SendMail"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User logs in successfully into the mail TC017",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User sends mail with the given data",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "017",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 17834668500,
  "error_message": "java.lang.Exception: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027Next\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027MDB20LT299\u0027, ip: \u002710.240.101.69\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\KRISHN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56675}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2fbddc3ba6324791c45fac5ea2a752e5\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Next\u0027]}\r\n\tat supportClasses.ReporterFunction2.error(ReporterFunction2.java:88)\r\n\tat stepDefinitions.CommonStepDefs.gmailLogin(CommonStepDefs.java:74)\r\n\tat ✽.Given User logs in successfully into the mail TC017(test/resources/features/compose.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Compose.ComposeMail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1152774600,
  "status": "passed"
});
formatter.before({
  "duration": 81522200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 15012081300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Send mail",
  "description": "",
  "id": "test-the-google-compose-feature;send-mail;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SendMail"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User logs in successfully into the mail TC021",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User sends mail with the given data",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "021",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 48196267800,
  "status": "passed"
});
formatter.match({
  "location": "Compose.ComposeMail()"
});
formatter.result({
  "duration": 29917724300,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 4350690500,
  "status": "passed"
});
formatter.after({
  "duration": 1571132100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail \u003cDataBinding\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;",
  "rows": [
    {
      "cells": [
        "DataBinding"
      ],
      "line": 28,
      "id": "test-the-google-compose-feature;field-level-validation;;1"
    },
    {
      "cells": [
        "TC001"
      ],
      "line": 29,
      "id": "test-the-google-compose-feature;field-level-validation;;2"
    },
    {
      "cells": [
        "TC002"
      ],
      "line": 30,
      "id": "test-the-google-compose-feature;field-level-validation;;3"
    },
    {
      "cells": [
        "TC004"
      ],
      "line": 31,
      "id": "test-the-google-compose-feature;field-level-validation;;4"
    },
    {
      "cells": [
        "TC005"
      ],
      "line": 32,
      "id": "test-the-google-compose-feature;field-level-validation;;5"
    },
    {
      "cells": [
        "TC006"
      ],
      "line": 33,
      "id": "test-the-google-compose-feature;field-level-validation;;6"
    },
    {
      "cells": [
        "TC007"
      ],
      "line": 34,
      "id": "test-the-google-compose-feature;field-level-validation;;7"
    },
    {
      "cells": [
        "TC008"
      ],
      "line": 35,
      "id": "test-the-google-compose-feature;field-level-validation;;8"
    },
    {
      "cells": [
        "TC009"
      ],
      "line": 36,
      "id": "test-the-google-compose-feature;field-level-validation;;9"
    },
    {
      "cells": [
        "TC010"
      ],
      "line": 37,
      "id": "test-the-google-compose-feature;field-level-validation;;10"
    },
    {
      "cells": [
        "TC011"
      ],
      "line": 38,
      "id": "test-the-google-compose-feature;field-level-validation;;11"
    },
    {
      "cells": [
        "TC012"
      ],
      "line": 39,
      "id": "test-the-google-compose-feature;field-level-validation;;12"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 96537500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 17441363800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail TC001",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "001",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 48634038700,
  "status": "passed"
});
formatter.match({
  "location": "Compose.FieldValidation()"
});
formatter.result({
  "duration": 2219158500,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 4163673400,
  "status": "passed"
});
formatter.after({
  "duration": 1746692400,
  "status": "passed"
});
formatter.before({
  "duration": 88789400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 11083158400,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail TC002",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "002",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 17863595600,
  "error_message": "java.lang.Exception: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027Next\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027MDB20LT299\u0027, ip: \u002710.240.101.69\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\KRISHN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57057}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6f52d6590ec9e0f786e2cd3691e149ab\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Next\u0027]}\r\n\tat supportClasses.ReporterFunction2.error(ReporterFunction2.java:88)\r\n\tat stepDefinitions.CommonStepDefs.gmailLogin(CommonStepDefs.java:74)\r\n\tat ✽.Given User logs in successfully into the mail TC002(test/resources/features/compose.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Compose.FieldValidation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1155592700,
  "status": "passed"
});
formatter.before({
  "duration": 91041600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 17671497500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail TC004",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "004",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 50740429800,
  "status": "passed"
});
formatter.match({
  "location": "Compose.FieldValidation()"
});
formatter.result({
  "duration": 6426289700,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 2167716500,
  "status": "passed"
});
formatter.after({
  "duration": 1649454900,
  "status": "passed"
});
formatter.before({
  "duration": 67692900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 15004440700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail TC005",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "005",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 50366305700,
  "status": "passed"
});
formatter.match({
  "location": "Compose.FieldValidation()"
});
formatter.result({
  "duration": 5239150000,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 1837396800,
  "status": "passed"
});
formatter.after({
  "duration": 1881980600,
  "status": "passed"
});
formatter.before({
  "duration": 69015000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 19775981800,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail TC006",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "006",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 51239414300,
  "status": "passed"
});
formatter.match({
  "location": "Compose.FieldValidation()"
});
formatter.result({
  "duration": 2922277100,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 1818329700,
  "status": "passed"
});
formatter.after({
  "duration": 1598496600,
  "status": "passed"
});
formatter.before({
  "duration": 50480500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 15355132900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail TC007",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "007",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 38042534700,
  "status": "passed"
});
formatter.match({
  "location": "Compose.FieldValidation()"
});
formatter.result({
  "duration": 2574682400,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 4360696000,
  "status": "passed"
});
formatter.after({
  "duration": 1587196800,
  "status": "passed"
});
formatter.before({
  "duration": 53804000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 17425533300,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail TC008",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "008",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 52897326600,
  "status": "passed"
});
formatter.match({
  "location": "Compose.FieldValidation()"
});
formatter.result({
  "duration": 18716574300,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 4157308300,
  "status": "passed"
});
formatter.after({
  "duration": 1828116400,
  "status": "passed"
});
formatter.before({
  "duration": 41481400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 16617928900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail TC009",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "009",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 52885556700,
  "status": "passed"
});
formatter.match({
  "location": "Compose.FieldValidation()"
});
formatter.result({
  "duration": 19589735900,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 5512109200,
  "status": "passed"
});
formatter.after({
  "duration": 1571763400,
  "status": "passed"
});
formatter.before({
  "duration": 71928600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 15911247300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail TC010",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "010",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 57118877300,
  "status": "passed"
});
formatter.match({
  "location": "Compose.FieldValidation()"
});
formatter.result({
  "duration": 17260960500,
  "error_message": "java.lang.Exception: Exception occured \u003cbr\u003eno such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027Drive link\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027MDB20LT299\u0027, ip: \u002710.240.101.69\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\KRISHN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 595a9b4ed2d76ec653cc8130a85c32f1\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Drive link\u0027]}\r\n\tat supportClasses.ReporterFunction2.error(ReporterFunction2.java:88)\r\n\tat stepDefinitions.Compose.FieldValidation(Compose.java:206)\r\n\tat ✽.When User validates the required field(test/resources/features/compose.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1602955300,
  "status": "passed"
});
formatter.before({
  "duration": 57698100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 16125149100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail TC011",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "011",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 48428143100,
  "status": "passed"
});
formatter.match({
  "location": "Compose.FieldValidation()"
});
formatter.result({
  "duration": 18538512600,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 4118004200,
  "status": "passed"
});
formatter.after({
  "duration": 1551289800,
  "status": "passed"
});
formatter.before({
  "duration": 59922100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 16860933600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Field Level Validation",
  "description": "",
  "id": "test-the-google-compose-feature;field-level-validation;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FieldValidation"
    },
    {
      "line": 1,
      "name": "@composeFunction"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User logs in successfully into the mail TC012",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User validates the required field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "012",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 50938605400,
  "status": "passed"
});
formatter.match({
  "location": "Compose.FieldValidation()"
});
formatter.result({
  "duration": 8092748300,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 4225247700,
  "status": "passed"
});
formatter.after({
  "duration": 1814269100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Drafts Validation",
  "description": "",
  "id": "test-the-google-compose-feature;drafts-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Drafts"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "User logs in successfully into the mail \u003cDataBinding\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "User saves a mail in drafts with the given data",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "test-the-google-compose-feature;drafts-validation;",
  "rows": [
    {
      "cells": [
        "DataBinding"
      ],
      "line": 49,
      "id": "test-the-google-compose-feature;drafts-validation;;1"
    },
    {
      "cells": [
        "TC019"
      ],
      "line": 50,
      "id": "test-the-google-compose-feature;drafts-validation;;2"
    },
    {
      "cells": [
        "TC020"
      ],
      "line": 51,
      "id": "test-the-google-compose-feature;drafts-validation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 81887300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 15450355500,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Drafts Validation",
  "description": "",
  "id": "test-the-google-compose-feature;drafts-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@composeFunction"
    },
    {
      "line": 42,
      "name": "@Drafts"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "User logs in successfully into the mail TC019",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "User saves a mail in drafts with the given data",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "019",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 38648346900,
  "status": "passed"
});
formatter.match({
  "location": "Compose.DraftMail()"
});
formatter.result({
  "duration": 39830245200,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 4579454400,
  "status": "passed"
});
formatter.after({
  "duration": 1736146000,
  "status": "passed"
});
formatter.before({
  "duration": 78284000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches the browser and navigates to GMail with \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 55
    }
  ],
  "location": "CommonStepDefs.browserLaunch(String)"
});
formatter.result({
  "duration": 17422436200,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Drafts Validation",
  "description": "",
  "id": "test-the-google-compose-feature;drafts-validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@composeFunction"
    },
    {
      "line": 42,
      "name": "@Drafts"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "User logs in successfully into the mail TC020",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "User saves a mail in drafts with the given data",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "020",
      "offset": 42
    }
  ],
  "location": "CommonStepDefs.gmailLogin(String)"
});
formatter.result({
  "duration": 53258142500,
  "status": "passed"
});
formatter.match({
  "location": "Compose.DraftMail()"
});
formatter.result({
  "duration": 29942694100,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefs.gmailLogout()"
});
formatter.result({
  "duration": 4272296300,
  "status": "passed"
});
formatter.after({
  "duration": 1674267100,
  "status": "passed"
});
});