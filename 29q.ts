//Question no : 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that 
//check for certain fruits in your array.
//Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let Favorite_fruits: string [] = ["Apple","orange","Mango"]

if (Favorite_fruits.indexOf("Apple")) {
    console.log("Apple")
}
if (Favorite_fruits.indexOf("Orange")) {
    console.log("orange")
}
if (Favorite_fruits.indexOf("Mango")) {
    console.log("Mango")
}
if (Favorite_fruits.indexOf("cherry")) {
    console.log("You really like bananas")
}

if (Favorite_fruits.indexOf("grape")) {
    console.log("You really like bananas")
}
