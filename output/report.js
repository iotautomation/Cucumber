$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("stepdefin/dailyroutine.feature");
formatter.feature({
  "line": 1,
  "name": "Atitude Matters",
  "description": "\nIn order to understand Atitude\nAs a ITworking guy\nI want to know whom he is wishing",
  "id": "atitude-matters",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "I am a kingman",
  "description": "",
  "id": "atitude-matters;i-am-a-kingman",
  "type": "scenario",
  "keyword": "Scenario",
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
  "duration": 146035572,
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
  "duration": 125479,
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
  "duration": 132751,
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
  "duration": 68984,
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
  "duration": 281444,
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
  "duration": 842355,
  "status": "passed"
});
});