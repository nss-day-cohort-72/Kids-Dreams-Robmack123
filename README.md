# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > Your answer here: The module that contains the that cod is the Kids.js module. The click event first checks if the item clicked has the attribute data-type="child". If it does, a variable named clickedKid is set to the attribute of data-id. We then declare an empty variable named matchedKid and use a for of loop that checks if the child ID matches the id attribute of what was clicked. This for loop loops through the entire children array until it finds a matched id. Once it finds a matched id, it sets the matchedKid variable to that specific child. Then we have one last if statement that checks if a matchedKid was found. If it was found, we use window.alert to display the message. 
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Your answer here: The reason why findCelebrity() is used in the for loop to find the correct match for each kid and celebrity when the pairing() function is generating the pairing html. 
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > Your answer here: In the addEventListener() function I have a for of loop that iterates celebrity over the celebrities array. in the loop it matches the celebrity id with clickedCelebrity id attribute. After that below the for loop, it takes the matchedCelebrity and renders it in the window using ${matchedCelebrity.sport} which checks the sport property of the matchedCelebrity object. 
4. Can you describe, in detail, the algorithm that is in the `main` module? 
   > Your answer here: The main.js first imports the modules that generate the html for the kids, celebrities and pairings. We then select where we want our generate html to go in the index.HTML. After that we can make the template for the html by writing out the html using template literals ``. In that template we can call the functions that generate HTML we imported earlier in to the places we want. ------This question I might need some help with answering, I'm having a hard time finding the right vocab to use.
