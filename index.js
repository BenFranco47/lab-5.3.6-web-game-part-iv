const inventory = newInventory()
move(inventory).to(0, 0)


// This code can be modify so other objects, characters or items can be moved by the user
const character = newImage('assets/green-character/static.gif')

// The (e) KeyboardEvent fires multiple times as long as the user holds down a key
function handleDirectionChange(direction) {
//Loads multiple gifs so my character can seem like it's moving 
    if(direction === null) {
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west') {
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north') {
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east') {
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south') {
        character.src = 'assets/green-character/south.gif'
    }
}


move(character).withArrowKeys(100 ,250 ,handleDirectionChange)


setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)

// Keydown dom event moves the character in the given direction (up, down, right and left)
document.addEventListener('keydown', function(e) {
   
    if(e.repeat) return;


    if(e.key === 'ArrowLeft') {
        direction = 'west'
    }

    if(e.key === 'ArrowUp') {
        direction = 'north'
    }

    if(e.key === 'ArrowRight') {
        direction = 'east'
    }

    if(e.key === 'ArrowDown') {
        direction = 'south'
    }
})

//Keyup dom event stops the character after you press the arrow keys
// Both dom events work together to give the user move control over the movement of the character
document.addEventListener('keyup', function(e){
    direction = null
})


// Call moveCharacter every millisecond
//setInterval(moveCharacter, 1)
move(character).to(100, 250)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)