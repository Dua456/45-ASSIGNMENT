//Question no : 18

//Store the location in a array:
let placestovisit: string[] = ["America","Japan","China","Pakistan","Gilgit"];

//Print the array in its Orignal Order:
console.log("Orignal Order:", placestovisit);

// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [...placestovisit].sort());

//Show that your array is still in its original order by printing it.
console.log("Orighnal Order after sorting:" ,placestovisit);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", [...placestovisit].sort().reverse());

// Show that your array is still in its original order:
console.log("Orignal order after reverce soorting:",placestovisit);

// Reverse the order of your list. 
placestovisit.reverse();
console.log("reverced order:",placestovisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order:
placestovisit.reverse();
console.log("Back to orginal order:",placestovisit);

//Sort your array so it’s stored in alphabetical order:
placestovisit.sort();
console.log("Sort in alphabeticsl order:",placestovisit);

//Sort to change your array so it’s stored in reverse alphabetical order:
placestovisit.sort((a,b) => b.localeCompare(a));
console.log("Sorted in reverce alphabetical order:",placestovisit);


