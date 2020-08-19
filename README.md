# Audio Memeory Game - ECHO

This project repesents my second milestone project for Code Institute  Full Stack Web Developer program. Creating this web aplication was tremendous challenge for me and after completing it I feel that I learn a lot more about javascript and what it takes to be good coder. I decided to make this web app after my first project idea wasn't on point with the requirements for second milestone project. I decided that audio memeory game was a good spin on classical memory card game. It was created in relatively short period durnig which spend 10+ hours daily infront of PC, so it probablyhas some begginers downfalls.
-  **[Live Site](https://wertzhog.github.io/Memory-Game/ )**
## Design
I desided to make design of this game simple and responsive across devices. My main focus was developing javascript funcionality since it was challenge to do something like this for the first time on my own. 

### User stories

* As a user I want this game to be challenging and fun.
* As a user I want to keep score and time on my screen.
* As a user I want to havemore challenging level of game.
* As a user I want to me able to restart game.

### Mockups

    * I used Figma to create mockup [mockup](https://github.com/Wertzhog/Memory-Game/tree/master/assets/mockups)
    * Desing is itentionaly same across devices.

## Features

### Exisiting Features

* **Start screen overlay** - allows users to get information about game and to start game.
                            - I didn't use any CSS frameworks since game has very simple design.

* **Victory/Game Over overlay** - created to give user option to choose more difficult level or stop playing game.

* **restart button** - gives user option to restart game at any point without reloading whole page.

* **score** - display to user current score

* **Timer** -  displays time available to complete game.

* **Stop playing overlay** - presents users with interesting info about echoic memory.

* **Footer** - provides user link to Github repo and my LinkedIn account.


### Features left to implement

* **Increased difficulty** - I will try to add more difficult levels as this will be part of my portfolio of work.

* **Different game mode** - I would like to implement more game modes like: matching words with their definitions

* **Ear training mode** - users need to match two same tone which could be very useful for musician's ear training.




## Technologies Used

* **[HTML/HTML5](https://en.wikipedia.org/wiki/HTML5)** - it is used for basic structure of website.

* **[CSS/CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)** - used for styling of website.

* **[Javascript](https://en.wikipedia.org/wiki/JavaScript)** - used for game functionality.

* **[FontAwsome 4.7.0.](https://fontawesome.com/)** - used for icons in footer and restart button.

* **[Google Fonts](https://fonts.google.com/)** - used for fonts on entire website.

* **[Figma](https://www.figma.com/)** - used for mockup.

* **[VS Code](https://code.visualstudio.com/)** -  used as code editior for this project

* **[GitHub](https://github.com/)** - used for version control, hosting project files and live website via GitHub Pages.

* **[Gimp 2](https://www.gimp.org/)** - resizing and editing photos.


## Testing

* **Automated testing**

    * **[CSS Validator](http://jigsaw.w3.org/css-validator/)** - gave errors related to FontAwsome.

    * **[HTML Validator](https://validator.w3.org/)** - gave no errors.

* **Manual Testing**

    * **Desktop**
        
        * **Google Chome**: everything is working good. Page loads, and all of the page features are working.

        * **Mozilla Firefox**: everything is working good. Page loads, and all of the page features are working.
        

    * **Mobile**

        * **Mozilla Firefox Dev Tools**

            * tested with Firefox Dev tools for all available devices (from Moto G4 to iPad),
            webpage works well. It is responsive as intended, no weird page deformations.

        **Real-world testing:**

        * **Huawei P20Pro** - site loads good. It is responsive as intended. All of the features are working.

        * **Samsung Galaxy S9** - site loads good. It is responsive as intended. All of the features are working.

        * **HTC Desire 630** - site loads good. It is responsive as intended. All of the features are working.

        * **Samsung Galaxy A5** - site loads good. It is responsive as intended. All of the features are working.

        * **Xiaomi mi 9t** - site loads good. It is responsive as intended. All of the features are working.

        * **Bugs - fixed**
            
            - I had issues adding restart button functionality without reloading whole page. Manage to fix it though javascript game functions.

            - My biggest challenge was to implement level up functionality. Took lot of try and error but managed to make it functional in last minute.

            - I had issue with selecting cards after I got match, but maganed to fix it through reseting card selection in matched cards function.

        * During development of this project I learn a lot about javascipt object oriented programing and still feel like I have a lot more to learn. I was super challenging and braintwisting to make it all functional. I am glad I managed to do it. This gives me motivation to keep learning and overcoming new challenges.





    * **Testing User Stories Scenarios**

        * All of the game functionality works fine. All of the buttons, timer and score keeping.

## Deployment

 **[GitHub](https://github.com/)** - is used to host code and files for this project. Project has only one branch(master). Deployed version is most current version of repository.

 * **GitHub pages** was used to deploy this site.
    - Go to repository master branch.
    - Press Settings button on right.
    - Scroll down to Github Pages section.
    - Choose Master branch and link to hosted site should appear on top of the section.

 **How to run this project locally**
- **To clone this project from GitHub:** 
([Source](https://github.com/Edb83/penny-for-your-thoughts/blob/master/README.md#testing))

* Under the repository name, click "Clone or download".
* In the Clone with HTTPs section, copy the clone URL for the repository.
* In your local IDE open Git Bash.
* Change the current working directory to the location where you want the cloned directory to be made.
* Type git clone, and then paste the URL you copied in Step 3.
* Press Enter. Your local clone will be created.


## Credits

### Idea

* I was inspired to create this game looking though other student projects they posted on Slack community chanel, specialy Andy Osborne's awsome **[Dwarf Match](https://andy-osborne.github.io/Dwarf-Match/)**game. Since my first project idea was scraped I decided to create my spin on memory card game.

### Code

* I user couple of tutorials and guides to help me understand javascript logic behind this type of game. Specialy since I had limited time to develop this project.

* I used this guide from **[FreeCodeCamp](https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/)**.

* Also, I use this youtube guide from **[PortEXE](https://www.youtube.com/watch?v=3uuQ3g92oPQ)** to help me develop my more complex game features and refactor my code.

**Media**

* Background image was taken from **[Unsplash](https://unsplash.com/)**.

* Card images I got from **[Game-icons.net](https://game-icons.net/)**.

* Sounds for game I got from **[SoundOfText](https://soundoftext.com/)**.

* Music for game I got from **[zapsplat.com](https://www.zapsplat.com/)**.

**Acknowledgements**

* I want to thank my mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) for his guidance and help.

* Slack community of Code Institute for inspiration.

* My girlfriend and my friends on their support and help with testing.:kissing_heart:


#### This project is for educational purposes and hopefully in near future it will be fully deployed.

**[Live Site](https://wertzhog.github.io/Memory-Game/ )**