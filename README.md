# Funny Swedish Quiz
This Funny Swedish Quiz application is about learing some fun facts about Sweden. In this Quiz users will take on simple questions about swedish facts. When finished the user will get a score. 

This site will target both adults and children. 

![Mockup image](https://github.com/Maxwidlundstark/funny-quiz/blob/main/docs/Ami.responsivedesign.PNG)
[Live Webpage](https://maxwidlundstark.github.io/funny-quiz/)

## Table of Content

1. [Features](#Features)
   1. [Existing Features](#existing-features)
   2. [Features Left to Implement](#features-left-to-implement)
2. [Testing](#testing)
   1. [validator testing](#validator-testing)
   2. [Bugs](#bugs)
   3. [Fixed Bugs](#fixed-bugs)
3. [Deployment](#deployment)
4. [Credits](#credits)
   1. [Content](#content)
   

## Features

### Existing Features

- __Header__
  - The header's purpose is to explain to the users what the Quiz is about

 ![Header image](https://github.com/Maxwidlundstark/funny-quiz/blob/main/docs/Home%20Header%20webpage.PNG)

- __Question__
  - This section of the page introduce the user to the question they are about to answer.
 
![Question image](https://github.com/Maxwidlundstark/funny-quiz/blob/main/docs/Question%20section.PNG)

- __Answers__
  - This section gives the users a choice of 4 different answers where one is correct.
  - By giving the users a preselection of answers it will be a better learning experience. 
 
![Answer image](https://github.com/Maxwidlundstark/funny-quiz/blob/main/docs/Answers%20.PNG)

- __Correct answer__
  - The correct answer functions purpose is to give the user an understanding of how the Quiz is going. 
  - When the user answer correct it will turn green. 

![Correct answer image](https://github.com/Maxwidlundstark/funny-quiz/blob/main/docs/correct%20answer.PNG)

- __Incorrect answer__
  - The incorrect answer function purpose is to give the user an understanding of how the Quiz is going. 
  - When the user answer incorrect it will turn red and the correct answer will turn green to indicate that the answer was wrong.

![Incorrect answer image](https://github.com/Maxwidlundstark/funny-quiz/blob/main/docs/incorrect%20answer.PNG)

- __Next Question button__
  - The next question button appears when the user clicks on an answer, this will guide the users to move on in the quiz.
  - When an answer is selected it appears automatically.

![Next question image](https://github.com/Maxwidlundstark/funny-quiz/blob/main/docs/next-question.PNG)

- __Results & Play again__
  - When all questions is answered the site will give the users a total score of their results.
  - A Play Again button will show under the score that will help users to restart the Quiz. 

![Result & play again image](https://github.com/Maxwidlundstark/funny-quiz/blob/main/docs/result%20page.PNG)

### Features Left To Implement
- More questions and different levels of difficulty.
- Showcase images with the questions.

## Testing
- The page is tested on the following browsers:
  - Google Chrome 
  - Safari 
  - Microsoft Edge

- I confirmed that the game results are always correct.

- The site is fully responsive for all standard screen sizes. I confirmed this by using Devtools.

- I confirmed that all functions and appearances is working and is easy to understand in: 
  - Questions
  - Answers selection
  - Next Question button
  - Result 
  - Play Again button

![Lighthouse image](https://github.com/Maxwidlundstark/funny-quiz/blob/main/docs/lighthouse.PNG)

### Validator Testing
- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/#textarea)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)

### Bugs
- When i tested the quiz on mobile the color when selecting a answer didn't change to green or red instead it got stuck with the color set for the Hover selector. 

### Fixed Bugs
- Adding Media query in css so that the hover selector only applies on screens with 768px and more. 

## Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - Click on Pages in the left hand side
  - From the source section drop-down menu, select the Main Branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment

The live link can be found here (https://maxwidlundstark.github.io/funny-quiz/)

## Credits

#### Content
- How to use the forEach Method was taken from [W3Schools](https://www.w3schools.com/jsref/jsref_foreach.asp)
- The code for showing quiz score was inspired from [W3Schools](https://www.w3schools.com/graphics/game_score.asp)
- Code to display and hide answers was inspired from [Sitepoint](https://www.sitepoint.com/community/t/how-to-hide-answers-in-my-js-quiz/372748)
- Code for showing final results was inspired from[Shecodes](https://www.shecodes.io/athena?tag=quiz#questions)
- Function to check the selected answer was taken from[Shecodes](https://www.shecodes.io/athena?tag=quiz#questions)
