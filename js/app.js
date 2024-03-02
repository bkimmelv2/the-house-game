// PLAN:
// Create a grid using for loop. Make each element an empty div with an id of (id="grid-" + i) and append to the main grid div.
// Add event listeners to the grid ids that I want something to happen in (clue, nonclue, joke, scary popup)
// Place a password textbox and submit button in front of all other elements. (must only accept a certain word)
// Add my main image and use absolute positioning to ensure the grid stays over the image.

// SIDE TASKS:
// Figure out how to make a how-to modal that pops up as the page loads. You then click the play button to make the modal disappear.
// Figure out how to play an audio file on loop.

const mainGrid = document.getElementById('grid')

for (let i = 1; i <= 16; i++) {
    const gridItem = document.createElement('div')
    gridItem.id = 'grid-' + i
    gridItem.classList.add('grid-item')
    mainGrid.appendChild(gridItem)
}

const button1 = document.getElementById('grid-1')
button1.addEventListener('click', () => {
    alert('you clicked me!')
})