# The House - a puzzle game

## Description
The House is an escape room themed puzzle game designed to allow the user to search for clues and guess the password to escape!

## Getting Started
### How to Play
The goal of the game is to figure out what the one-word password is in order to escape The House. Around the room are various clues, found by clicking around. Once you are ready to attempt a guess, type in the textbox located on the escape door. If you are correct, you will have successfully escaped!

### Dependencies
* Google Chrome is highly recommended for compatibility.
* The game is designed for computer use, formatting errors may occur if using on a mobile device.
* Compatible with Windows and MacOS.

### Launching
* Click the link below to start playing!
* [The House](https://the-house-game.netlify.app/)

### Help
* If you run into any issues, please refresh the page.
* Note: Modern browsers block audio autoplay. Please use the buttons at the bottom of the webpage to play/pause music to your liking.

## Wireframes
![wireframe](https://imgur.com/a/zopRdst)

## User Stories
* The user is greeted with instructions and clicks OK to play.
* The user clicks around the room to search for clues and other interactive elements.
* The user pieces the clues together to attempt at solving the one-word puzzle.
* The user types their answer into the textbox on the door in order to escape and win.

## Future Features
* After winning the first round, the user will appear in a new room with clues in different places and a different one-word puzzle to solve.
* Improved mobile compatibility.

## Programming Strategies
The layout of the game is similar to that of battleship. There is an invisible 8x8 grid made up entirely of divs. Each div is clickable, but only some will generate an action. I wanted to interact with the user in a more advanced way than I am used to so i opted to learn HTML dialog in place of using browser alerts. I feel that this gives the game a cleaner look and provides the user seemless interaction.

I also learned how to implement audio using HTML/JS which adds to the atmosphere of the game greatly. As the user gets closer to the answer, they can type in the Password textbox (located over the door) to attempt their escape. This was achieved using a simple if statement that converts the user input to all lowercase (toLowerCase()) and then checks for the correct answer, else the user is prompted to try again.

I love puzzles and this game reminds of many puzzle games I have played in the past. I am excited to improve upon the game's design as time goes on and I gain more knowledge.

## Resources

### Technical
* [Creating a grid](https://medium.com/@omogidavis/creating-a-3x3-grid-with-javascript-a-step-by-step-guide-1fd2258c2ef9)

* [Using HTML Dialog](https://www.w3schools.com/tags/tag_dialog.asp)

* [Using HTML Audio](https://www.quackit.com/html/html_music_code.cfm)

### Images and Audio
* [Royalty free music](https://pixabay.com/music/)

* [Royalty free sounds](https://pixabay.com/sound-effects/)

* [Room image](https://pixabay.com/vectors/home-office-office-library-7218315/)

* [Jumpscare image](https://unsplash.com/s/photos/scary-face)