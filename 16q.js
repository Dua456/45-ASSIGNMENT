"use strict";
//QUESTION NO 16:
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite
// to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you
// found a bigger dinner table.
//SOLUTION:
// Name array:
let guestArray = ["Alishba", "Ahmed", "Hamza"];
//can not make dinner:
let canNotAttend = "Alishba";
//Invite new guest:
let newGuest = "Shahid";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
guestArray.map((items) => console.log(`Dear ${items}. I found a bigger dinner table so I am invited more peoples.`));
// Add one new guest to the beginning of your array.
let guestbegnning = "Aleena";
guestArray.unshift(guestbegnning);
console.log(guestArray);
// Add one new guest to the middle of your array.
let middleguest = "Fatima";
let middleindex = guestArray.length / 3;
guestArray.splice(middleindex, 0, middleguest);
console.log(guestArray);
// Use append() to add one new guest to the end of your list. 
guestArray.push("zesshan");
console.log(guestArray);
//Print a new set of invitation messages, one for each person in your list.
guestArray.map((items) => console.log(`Dear ${items}, you are invited in the more people list on dinner`));
