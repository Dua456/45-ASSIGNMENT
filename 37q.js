"use strict";
//Question no :37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
//that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.
function make_Shirt(size = 'large', text = 'I love a small shirt') {
    console.log(`you order a ${size},shirt that says ${text}`);
}
make_Shirt();
make_Shirt('medium');
//Different message:
make_Shirt('small', 'I need a big shirt to wear');
