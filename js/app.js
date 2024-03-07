// PLAN:
// Create a grid using for loop. Make each element an empty div with an id of (id="grid-" + i) and append to the main grid div.
// Add event listeners to the grid ids that I want something to happen in (clue, nonclue, joke, scary popup)
// Place a password textbox and submit button in front of all other elements. (must only accept a certain word)
// Add my main image and use absolute positioning to ensure the grid stays over the image.

// SIDE TASKS:
// Figure out how to make a how-to modal that pops up as the page loads. You then click the play button to make the modal disappear.
// Figure out how to play an audio file on loop.

// GRID CREATOR LOOP //
const mainGrid = document.getElementById('grid')

for (let i = 1; i <= 63; i++) {
    const gridItem = document.createElement('div')
    gridItem.id = 'grid-' + i
    gridItem.classList.add('grid-item')
    mainGrid.appendChild(gridItem)
}
///////////////////////

// Random number generator if I need it later:
// const randomNumber = Math.floor(Math.random() * 63) + 1
// const randomNumber2 = Math.floor(Math.random() * 63) + 1

// Write a function for each different click event (i.e. clue, nonclue, scary picture/sound, etc.)

// FUNCTIONS
const foundClue1 = () => {
    // using alerts as placeholder. Will use dialog later.
    // alert('You found a clue! \n\nI speak without a mouth, heard but never seen. Outside I am hard to find, yet in a room I am serene.')
    document.getElementById("clue1").showModal()
    // OK BUTTON //
    const okButton = document.getElementById('ok-button1')
    okButton.addEventListener('click', () => {
        dlg = document.getElementById('clue1')
        dlg.close('')
    })
}

const foundClue2 = () => {
    // alert('You found a clue! \n\nIn solitude, I am loud, yet in crowds, I am drowned. In your deepest thoughts, I am often found.')
    document.getElementById("clue2").showModal()
    // OK BUTTON //
    const okButton = document.getElementById('ok-button2')
    okButton.addEventListener('click', () => {
        dlg = document.getElementById('clue2')
        dlg.close('')
    })
}

const foundFalseClue1 = () => {
    // alert('You found a book! You dust it off and open it, only to realize it\'s just a dictionary. Strange... the page is saved at the beginning of the S section.')
    document.getElementById("false-clue1").showModal()
    // OK BUTTON //
    const okButton = document.getElementById('ok-button3')
    okButton.addEventListener('click', () => {
        dlg = document.getElementById('false-clue1')
        dlg.close('')
    })
}

// const foundFalseClue2 = () => {
//     alert('')
// }

// const foundPoison = () => {
//     alert('You start to feel dizzy as you realize you\'ve just touched poison! Ouch, poor thing. Try again next time!')
// }

// const foundScare = () => {

// }

// We can then call the chosen function on whatever div space we pick.

// TESTER //
// const findButton = document.getElementById(`grid-34`)
// findButton.addEventListener('click', () => {
//     foundClue1()
// })

// BUTTON EVENT LISTENERS
const clue1Button = document.getElementById('grid-34')
clue1Button.addEventListener('click', () => {
    foundClue1()
})

const clue2Button = document.getElementById('grid-55')
clue2Button.addEventListener('click', () => {
    foundClue2()
})

const falseClue1Button = document.getElementById('grid-20')
falseClue1Button.addEventListener('click', () => {
    foundFalseClue1()
})