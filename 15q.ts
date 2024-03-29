//Question no : 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set 
//of invitation You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the 
//guest wo can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let GuestArray : string [] = ["Ali","Ahmed","Hamza"];
GuestArray.map((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));

let CanNotAttend : string = "Ali";
console.log(`${CanNotAttend} can not make it, forndinner.`);

let NewGuest : string = "Alishba";
GuestArray [GuestArray.indexOf(CanNotAttend)] = NewGuest;
console.log(GuestArray);

GuestArray.map((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));
