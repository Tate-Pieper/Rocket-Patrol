/*
Tate Pieper - 4/23/2021
Rocket Patrol - Modded
12 hours

Point Breakdown:
 10 Points
 - Implement parallax scrolling
 - Create a new title screen (e.g., new artwork, typography, layout)
 - Display time remaining
 - Replace UI border
 20 Points
 - Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points
 - Create new artwork for all of the in-game assets (rocket, spaceships, explosion)
 - Implement a new timing/scoring mechanism that adds time to the clock for successful hits

 Total points: 100
*/


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
  }

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3;