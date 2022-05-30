# Teddy Memory Game
This is a Memory Game that has been inspired from my daughters stuffed animals. It is a simple but yet challenging memory game with eight pairs of cards.

The game targets to be a fun and challenging way to learn concentrate and remembering things for children. But it also a nice way for adults to relax.

## User Experience (UX)
### Wireframes
The wireframes was made before the project started to guide the design. Some changes are made.

![Wireframe 1](assets/readme-images/index.jpg) ![Wireframe 2](assets/readme-images/alert.jpg)

## Features
### Existing Features
### Future Features

## Technologies Used
- [HTML](https://html.spec.whatwg.org/) - is setting the structure and the content of the website.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - providing the style for the pages.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - is making the site interactive. The engine for the game.
- [Gitpod](https://www.gitpod.io/#get-started) - used to develop and deploy the site.
- [GitHub](https://github.com/)  - is used to host the site.
- [Balsamiq](https://balsamiq.com/wireframes/) - was used to make the wireframes.

## Testing

## Bugs
Card animation will only work first time it is clicked. The bug was fixed by adding a remove class of the flipped cards in the function that check for pairs.

If you clicked more than two cards before they flipped back, it resulted in a error. The bug was fixed by adding a lock to the board while the timeout was running.

You can click on a card that is already facing up wich will get the count for matches to count wrong. It will also turn an already matched card to the wrong side.

The alert shown when finishing the game is not showing the time used correctly. Instead of the time it shows "[object HTMLSpanElement]".
## Deployment
### To deploy the project
This site is deployed using GitHub pages. This is the steps for deploying a site.
1. When in the repository navigate to the Settings tab.
2. Then navigate to the Pages link on the left side.
3. Navigate to Source and select master/main branch and then click Save.
4. When page is refreshed and the site is published successfully, a green box will show that it's finished.

![Image of deployment stages](assets/readme-images/github-deploy.jpg)

Here is the link to the repository: [https://github.com/spangen87/memory-game](https://github.com/spangen87/memory-game)

### Forking the repository on GitHub
A copy of the repository can be made. This copy can be viewed and changed on an other account without affecting the original repository.

The steps for doing this:
1. Make sure you are logged in on GitHub and then find the repository.
2. On the top right there is a button called Fork.
3. Press the Fork button to make a copy to your account.

![Image showing how to fork](assets/readme-images/github-fork.jpg)

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
## Credits

## Acknowledgements