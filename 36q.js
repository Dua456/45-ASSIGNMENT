"use strict";
//Question no : 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
// should be printed on the shirt. The function should print a sentence summarizing the size of the 
//shirt and the message printed on it. Call the function.
function Make_Shirt(size, text) {
    console.log(`you order a ${size} shirt that says ${text}`);
}
Make_Shirt('large', '"i love a small shirt"');
Make_Shirt('medium', '"i love a big shirt"');
