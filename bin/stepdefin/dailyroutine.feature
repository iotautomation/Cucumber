Feature: Atitude Matters

In order to understand Atitude
As a ITworking guy
I want to know whom he is wishing

@tester
Scenario Outline: I am a kingman

Given I work in Latenights
When I meet watchmen
Then I Greeted him

Given  I work in Mornings
When I meet NewspaperBoy
Then I skipGreeting him 

Given we work in "<weekday>"
When we meet "<guy"> 
Then I skipGreeting him

Examples:
 |weekday   | guy       |
 |tenpm     | watchmen  |
 |ninepm    | cabdriver |
