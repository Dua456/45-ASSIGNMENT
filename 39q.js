"use strict";
//Question no :39
//City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
let C1 = city_country('lahore', 'pakistan');
let C2 = city_country('paris', 'france');
let C3 = city_country('tokyo', 'japan');
console.log(C1);
console.log(C2);
console.log(C3);
