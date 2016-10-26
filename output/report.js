$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("stepdefin/dailyroutine.feature");
formatter.feature({
  "line": 1,
  "name": "Atitude Matters",
  "description": "\nIn order to understand Atitude\nAs a ITworking guy\nI want to know whom he is wishing",
  "id": "atitude-matters",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "I am a kingman",
  "description": "",
  "id": "atitude-matters;i-am-a-kingman",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I work in Latenights",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I meet watchmen",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Greeted him",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I work in Mornings",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I meet NewspaperBoy",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I skipGreeting him",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "we work in \"\u003cweekday\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "we meet \"\u003cguy\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I skipGreeting him",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "atitude-matters;i-am-a-kingman;",
  "rows": [
    {
      "cells": [
        "weekday",
        "guy"
      ],
      "line": 23,
      "id": "atitude-matters;i-am-a-kingman;;1"
    },
    {
      "cells": [
        "tenpm",
        "watchmen"
      ],
      "line": 24,
      "id": "atitude-matters;i-am-a-kingman;;2"
    },
    {
      "cells": [
        "ninepm",
        "cabdriver"
      ],
      "line": 25,
      "id": "atitude-matters;i-am-a-kingman;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "I am a kingman",
  "description": "",
  "id": "atitude-matters;i-am-a-kingman;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I work in Latenights",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I meet watchmen",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Greeted him",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I work in Mornings",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I meet NewspaperBoy",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I skipGreeting him",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "we work in \"tenpm\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "we meet \"\u003cguy\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I skipGreeting him",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Latenights",
      "offset": 10
    }
  ],
  "location": "AtitudeTest.ln(String)"
});
formatter.result({
  "duration": 170640419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watchmen",
      "offset": 7
    }
  ],
  "location": "AtitudeTest.dImeet(String)"
});
formatter.result({
  "duration": 125608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Greeted",
      "offset": 2
    }
  ],
  "location": "AtitudeTest.gre(String)"
});
formatter.result({
  "duration": 97989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mornings",
      "offset": 10
    }
  ],
  "location": "AtitudeTest.ln(String)"
});
formatter.result({
  "duration": 52769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewspaperBoy",
      "offset": 7
    }
  ],
  "location": "AtitudeTest.dImeet(String)"
});
formatter.result({
  "duration": 80885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skipGreeting",
      "offset": 2
    }
  ],
  "location": "AtitudeTest.gre(String)"
});
formatter.result({
  "duration": 1361820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tenpm",
      "offset": 12
    }
  ],
  "location": "AtitudeTest.we_work_in(String)"
});
formatter.result({
  "duration": 130311,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "skipGreeting",
      "offset": 2
    }
  ],
  "location": "AtitudeTest.gre(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "I am a kingman",
  "description": "",
  "id": "atitude-matters;i-am-a-kingman;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I work in Latenights",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I meet watchmen",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Greeted him",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I work in Mornings",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I meet NewspaperBoy",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I skipGreeting him",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "we work in \"ninepm\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "we meet \"\u003cguy\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I skipGreeting him",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Latenights",
      "offset": 10
    }
  ],
  "location": "AtitudeTest.ln(String)"
});
formatter.result({
  "duration": 326126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watchmen",
      "offset": 7
    }
  ],
  "location": "AtitudeTest.dImeet(String)"
});
formatter.result({
  "duration": 83995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Greeted",
      "offset": 2
    }
  ],
  "location": "AtitudeTest.gre(String)"
});
formatter.result({
  "duration": 540946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mornings",
      "offset": 10
    }
  ],
  "location": "AtitudeTest.ln(String)"
});
formatter.result({
  "duration": 61858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewspaperBoy",
      "offset": 7
    }
  ],
  "location": "AtitudeTest.dImeet(String)"
});
formatter.result({
  "duration": 88575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skipGreeting",
      "offset": 2
    }
  ],
  "location": "AtitudeTest.gre(String)"
});
formatter.result({
  "duration": 81999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ninepm",
      "offset": 12
    }
  ],
  "location": "AtitudeTest.we_work_in(String)"
});
formatter.result({
  "duration": 136549,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "skipGreeting",
      "offset": 2
    }
  ],
  "location": "AtitudeTest.gre(String)"
});
formatter.result({
  "status": "skipped"
});
});