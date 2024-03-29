//Question no :24

// //Tests for equality and inequality with strings

let name1 : string = "Ayesha"
let name2 : string = "Ayesha Umar"
let name3 : string =  "Mrs. Ayesha Umar"

// //Inequality(false):
if (name1 == name3) {
   console.log("names are equal")
} else {
    console.log("names are not equal")
}
// //Equality(true):
if (name1 !== name2) {
    console.log("names are equal")
}

// // Tests using the lower case function
if (name1 !== name3) {
    console.log("names are equal")
}

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let age_1 : number = 18
let age_2 : number = 24
//Greter than:
if (age_1 == 18){
    console.log("eligible for vote")
}
//less than:
if (age_1 ! = 18){
    console.log("eligible for vote in holder category")
}
//Greator than or eual to:
if (age_2 >= age_1){
    console.log("older")
}
//less than or eual to:
if (age_1 <= age_2){
    console.log("younger")
}
// //Tests using "and" and "or" operators
//And:
if (age_1 == 18 && age_2 == 24 ){
    console.log("person is eligible for vote")
} 
//OR:
if (age_1 == 18 || age_2 != 24 ){
    console.log("person is eligible not for vote")
}

// // Test whether an item is in a array
let country : string [] = ["pakistan","India","China","Japan"];
if (country.indexOf("pakistan")){
console.log("pakistan is in country list")
}

// // Test whether an item is not in a array:
if (!country.indexOf("America")){
    console.log("America is not indexOf in an array")
}

