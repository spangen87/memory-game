# Teddy Memory Game
This is a Memory Game that has been inspired from my daughters stuffed animals. It is a simple but yet challenging memory game with eight pairs of cards.

The game targets to be a fun and challenging way to learn to concentrate and remembering things for children. But it is also a nice way for adults to relax.

Welcome to [Teddy Memory Game](https://spangen87.github.io/memory-game/).

![Image of the application on multiple screens](assets/readme-images/responsive.jpg)

## Contents
- [User Experience (UX)](#user-experience-ux)
    - [Wireframes](#wireframes)
    - [Site Structure](#site-structure)
    - [Design Choices](#design-choices)
        - [Typography](#typography)
        - [Colors](#colors)
- [Features](#features)
    - [Existing Features](#existing-features)
        - [Navigation Menu](#navigation-menu)
        - [Rules Pop-up](#rules-pop-up)
        - [Game Area](#game-area)
        - [Winning Message](#winning-message)            
    - [Future Features](#future-features)
- [Tecnologies Used](#technologies-used)
- [Testing](#testing)
    - [Browser Testing](#browser-testing)
    - [Responsiveness Test](#responsiveness-test)
    - [Accessibility Testing](#accessibility-testing)
    - [Validator Testing](#validator-testing)
    - [Logic Testing](#logic-testing)
- [Bugs](#bugs)
    -[Solved](#solved)
    -[Left to Solve](#left-to-solve)
- [Deployment](#deployment)
    - [To Deploy The Project](#to-deploy-the-project)
    - [Forking The Repository On GitHub](#forking-the-repository-on-github)
    - [How To Clone The Project](#how-to-clone-the-project)   
- [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
- [Acknowledgements](#acknowledgements)          


## User Experience (UX)
### User Stories
- As a user I want to get to the game istself quickly without to many clicks.
- As a user I want to be able to undertstand how the game works in an easy way.
- As a user I want to see the result of the game in a clear way.
- As a user I want to be able to restart the game easily without to many cklicks.
- As a user I want a clear design without too much clutter.
- As a user I want colors that are matching and is easy to read.
- As a user I want to se how I am doing while playing.

[Back to top](#contents)
### Wireframes
The wireframes were made before the project started to guide the design. Some changes are made to the final version of the game.

![Wireframe 1](assets/readme-images/index.jpg) ![Wireframe 2](assets/readme-images/alert.jpg)

[Back to top](#contents)
### Site Structure
The Teddy Memory Game is a one page applictaion. All buttons and actions are avilable from the screen without the need to scroll. The start menu is a div that will be hidden when the game starts, and the game will be hidden when you enter the menu. The structure keeps the game in focus, and other elements are planned to be minimalistic.

[Back to top](#contents)
### Design Choices
#### Typography
For the logo of the game, I choosed Courgette. I wanted a classy but yet playful look so I thought Courgette was a good font for that purpose. 

For the rest of the text I choosed Varela Round. It is easy to read, stylish and still a little bit playful.

[Back to top](#contents)
#### Colors
I choosed colors with my daughters favourite color in mind, pink. [Colormind](http://colormind.io/) was used to pick a palette that I used through the application.

![Color Palette](assets/readme-images/colors.png)

For the text on the buttons a had to use a darker color for readability. I used a darker color of brown (#5C483D).

[Back to top](#contents)
## Features
### Existing Features
#### Navigation Menu
- A start page with a logo for the game at the top.
- In the middle there is a picture with small cards that are in the game.
- At the bottom there is two buttons. The first for reading the rules, and the second to start the game.

![Start page](assets/readme-images/menu.jpg)

[Back to top](#contents)
#### Rules Pop-up
- A modal that appears as a pop-up when clicking on the rules-button.
- Explains how the game works.
- A button to close the modal and return back to the menu.

![Rules modal](assets/readme-images/rules.jpg)

[Back to top](#contents)
#### Game Area
- The game area where all the cards are.
- Below the cards there is a count for attempts, and how many seconds that have passed.
- Two buttons at the bottom, the first for going back to the menu, and the second for starting an new game.

![Game Area](assets/readme-images/game-area.jpg)

[Back to top](#contents)
#### Winning Message
- When game is finished a modal pops up showing how many seconds it took, and how many attempts that was needed.
- In the box there is two buttons, one to reset the game and try again, and one that gets you back to the menu.

![Winning Message](assets/readme-images/congrats.jpg)

[Back to top](#contents)
### Future Features
- A feature that could be added is that you can chose a nickname and that the score can be saved. That could add a competitive element to the game if you can compare scores with other users.
- Adding more levels of difficulty.
- Adding sound effects to the card flipping animation that can make it come more to life.

[Back to top](#contents)
## Technologies Used
- [HTML](https://html.spec.whatwg.org/) - is setting the structure and the content of the website.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - providing the style for the pages.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - is making the site interactive. The engine for the game.
- [Gitpod](https://www.gitpod.io/#get-started) - used to develop and deploy the site.
- [GitHub](https://github.com/)  - is used to host the site.
- [Balsamiq](https://balsamiq.com/wireframes/) - was used to make the wireframes.

[Back to top](#contents)
## Testing
### Browser Testing
- Google Chrome was used during development and there is no known issues in that browser. Although Chrome on iPhone is a little slow on the first animations.
- Mozilla Firefox is tested through the development process and there is no known issues.
- Microsoft Edge is tested in different resolutions with no known issues.
- Safari is only tested on mobile devices and there is no known issues in that browser.

[Back to top](#contents)
### Responsiveness Test
Tests for mobile devices was made at [Googles Mobile Friendly Test](https://search.google.com/test/mobile-friendly).

![Test result](assets/readme-images/google-mobile-friendly.jpg)

Manual testing has also been done through the development. That has been done on mobile devices and in [Google Chrome DevTools](https://developers.google.com/web/tools).
Screens from 2560px down to 375px has been tested.

[Back to top](#contents)
### Accessibility Testing
Accessibility was tested using [Lighthouse](https://developers.google.com/web/tools/lighthouse).
- Performance shows how the page perform in terms of loading speed.
- Accessibility shows how accessible the page is for all users.
- Best Practices shows that the site uses industry standard practices.
- SEO shows Search Engine Optimization.

Results for [Teddy Memory Game](https://spangen87.github.io/memory-game/) page:

Mobile:

![Lighthouse Mobile](assets/readme-images/lighthouse-mobile.jpg)

Computer:

![Lighthouse Computer](assets/readme-images/lighthouse-computer.jpg)

At first, Lighthouse warned that there was not enough contrast between text and background. So i changed a color so that it passed.

[Back to top](#contents)
### Validator Testing
The site is tested with [W3C HTML Validator](https://validator.w3.org/) for the HTML and for the CSS with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
For the JavaScript [JSHint](https://jshint.com/) was used.

Here are the results for CSS and HTML:

![W3C HTML Result](assets/readme-images/html-check.jpg)

![W3C HTML Result](assets/readme-images/css-check.jpg)

The validation through JSHint showed no errors. There was some warnings for older browsers.
At first it showed some warnings for missing semicolons and a variable that i forgot that was unused. But that is now solved.

[Back to top](#contents)
### Logic Testing
There was a lot of testing done for the logic of the game. Most was made manually by myself, and by friends and family that would try the game and find things that was not working as it supposed to do.

Testing was also done by [Google Chrome DevTools](https://developers.google.com/web/tools). It was of big help when trying to find issues, especially in the JavaScript.

[Back to top](#contents)
## Bugs
### Solved
- Card animation will only work first time it is clicked. The bug was fixed by adding a remove class of the flipped cards in the function that check for pairs.

- If you clicked more than two cards before they flipped back, it resulted in an error. The bug was fixed by adding a lock to the board while the timeout was running.

- You could click on a card that is already facing up which will get the count for matches to count wrong. It was also turning an already matched card to the wrong side. The issue was solved by adding a "clicklock" on all cards that was not showing the back preventing this from happening. 

- The alert shown when finishing the game was not showing the time used correctly. Instead of the time it showed "[object HTMLSpanElement]". The issue was fixed by adding an element property in the JS that was forgotten.

[Back to top](#contents)
### Left to Solve
- There are no known bugs at the moment.

[Back to top](#contents)
## Deployment
### To deploy the project
This site is deployed using GitHub pages. This is the steps for deploying a site.
1. When in the repository navigate to the Settings tab.
2. Then navigate to the Pages link on the left side.
3. Navigate to Source and select master/main branch and then click Save.
4. When page is refreshed and the site is published successfully, a green box will show that it's finished.

![Image of deployment stages](assets/readme-images/github-deploy.jpg)

Here is the link to the repository: [https://github.com/spangen87/memory-game](https://github.com/spangen87/memory-game)

[Back to top](#contents)
### Forking the repository on GitHub
A copy of the repository can be made. This copy can be viewed and changed on another account without affecting the original repository.

The steps for doing this:
1. Make sure you are logged in on GitHub and then find the repository.
2. On the top right there is a button called Fork.
3. Press the Fork button to make a copy to your account.

![Image showing how to fork](assets/readme-images/github-fork.jpg)

[Back to top](#contents)
### How to clone the project
This is how you make a clone of the repository:

1. Click on the code tab under the repository name.
2. Then click on "Code" button to the right above the files listed.
3. Click on the clipboard icon to copy the URL.

![Imge that shows where to find the URL for cloning](assets/readme-images/github-clone.jpg)

4. Open Git Bash in the IDE of your choice.
5. Change the working directory to where you want your cloned directory.
6. Type `git clone` and then paste the URL that you copied.
7. Press enter and clone has been finished.

[Back to top](#contents)
## Credits
### Content
- The font is picked from [Google Fonts](https://fonts.google.com/).
- Solution for randomizing the cards and setting up the array of cards [Fakorede Damilola](https://dev.to/fakorededamilola/create-a-memory-game-with-js-1l9j).

[Back to top](#contents)
### Media
- All photos are taken by me, the [author](https://github.com/spangen87).
- Photos were compressed using [TinyPNG](https://tinypng.com/).
- Photos are edited in [Adobe Photoshop](https://www.adobe.com/se/products/photoshop.html).

[Back to top](#contents)
## Acknowledgements
This game was made as Portfolio Project 2 for the Full Stack Software Developer education at [Code Institute](https://codeinstitute.net/).
I want to thank my mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) for the support and for pushing me to do better and aim higher.
A credit to my four year old daughter Bianca who choosed which teddy bears that should be in the cards, and for helping me with the photography.
I would also like to thank my colleagus Daniel and Järker at [Best Las](https://bestlas.se/) for giving me the opportunity and time neccessary to be able to do this education.
And lastly I would like to give a big thanks to [Ludde Hedlund](https://github.com/eddul-h) for helping me find bugs and for helping me figure out the solutions to them.

I hope this game can bring some joy to the children and adults who will take the time to play it.

Rikard Spångmyr, 2022

[Back to top](#contents)