"use strict";
//Question no : 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two 
//peoplefor dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
// your list,print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
//an empty list at the end of your program.
//Guest list:
let guests = ["Aleena", "Fatima", "shahid", "Ahmed", "Hamza"];
//Informed that Only two guest can be invited:
console.log("Do to limited space,only two people can be invited for dinner.");
//Removing guests until only two names remain:
while (guests.length > 2) {
    const removedguest = guests.pop();
    console.log(`sorry, ${removedguest}, you're no longer invited to dinner.`);
}
// New guestlist:
let guestlist = ["Aleena", "Fatima", "shahid"];
//printing invited two people to the remaning:
guestlist.forEach((guest) => {
    console.log(`Dear ${guest}, you're instill invited to dinner.`);
});
//Removing the last two names from the list:
guestlist.pop();
guestlist.pop();
console.log(guestlist);
//Print the final list to confirm it's empty:
console.log("final guest list:", guestlist);
