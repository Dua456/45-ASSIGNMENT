//Question no : 27
//Alien Colors #3: Turn your if-else chain from Exercise 25,26 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.

let Alien_colour : string = "yellow"

if (Alien_colour == "green"){
    console.log("the player just earned 5 points.")
}else if (Alien_colour == "yellow"){
    console.log("the player just earned 10 points.")
}  else {
    console.log("the player just earned 15 points.")
}