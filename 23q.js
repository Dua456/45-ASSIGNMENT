"use strict";
//Question no :23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
//for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let Car = "subaru";
// 5 true statements
//Test no 01:
console.log("is Car === 'subaru' ? predict true");
console.log(Car === 'subaru');
//Test no 02:
console.log("is Car == 'subaru'? predict true");
console.log(Car == 'subaru');
//Test no 03:
console.log("is Car != 'honda city' ? predict true");
console.log(Car != 'honda city');
//Test no 04:
console.log("is 10 < 40 ? predict true");
console.log(10 < 40);
//Test no 05:
console.log("is Car = 'subaru' && Car.length  == 6 ? predict true");
console.log(Car == 'subaru' && Car.length == 6);
//5 false statements:
//Test no 01:
console.log("is Car == 'SUBARO' ? predict false");
console.log(Car == 'SUBARO');
//Test no 02:
console.log("is Car === 'Auto' ? predict false");
console.log(Car === 'Auto');
//Test no 03:
console.log("is Car === 'Bike' ? predict false");
console.log(Car === 'Bike');
//Test no 04:
console.log("is 10 > 40 ? predict false");
console.log(10 > 40);
//Test no 05:
console.log("is Car = 'subaru' && Car.length  == 10 ? predict false");
console.log(Car == 'subaru' && Car.length == 10);
