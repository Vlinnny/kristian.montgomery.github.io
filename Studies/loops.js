/**
 * LOOPS:
 * 
 * 0. There are many different kinds of loops, but they all essentially do the same thing, repeating an action
 * some number of times.
 * 1. A few basic loops we use are the while, for, and for-in loops; they all loop over something but in
 * different ways, a while loop will execute as long as a specified condition evaluates to true, for loops repeat
 * untill a specified condition evaluates to false. And for-in loops are used to iterate over an objects key-value
 * pairs.Loops can loop any number of times, that be forward counting up to some limit, or backward counting down to 0
 */

// While Loop //     
   // Create two variables to store data //
var y = 0;
var x = 0;

while (y < 3) { // While variable y is less than 3 //
    y++;    // Increment variable y untill it is less than 3 //

    x += y; // On each iteration add x and y together //
}

console.log(x); // This will print the outcome of x ==> 6

    // After the first itertion y = 1, and x = 1 //
    // Second iteration: y = 2, x = 3 //
    // Thirst iteration: y = 3, x = 6 //
// After the third iteration our condition is no longer true, so the loop stops //

// For Loop //
    // Create something to loop over i.e array //
    var myArr = [1, 2, 3, 4, 5];

    // For loops have three parts, where to start, where to end, and the increment/decrement //
    for (var i = 0; i < myArr.length; i++) {
// start at 0 (arrays are zero indexed) //
// as long as i is less than the length of myArr //
// iterate by one each iteration //
        console.log(myArr[i]); // ==> 1 2 3 4 5 //
// print the array //
    }

    // Now lets do it in reverse //
    for (var i = myArr.length - 1; i >= 0; i--) {
// .length - 1 will always get the last element in an array //
// then we say as long as i is greater than or equal to 0 (because arrays start at the 0 index) //
// decrement by one each iteration //
        console.log(myArr[i]); // ==> 5 4 3 2 1 //
        // print the array to the console //
    }

// For-in Loop //
    // Create an object //
    var myObj = {
        a: 1,
        b: 2,
        c: 3
    };

    for (var key in myObj) {
//'key' represent that keys IN whatever object you want to iterate over //
        console.log(myObj[key]); // ==> prints only the values from myObj 1, 2, 3 //

        console.log(key); // == this will peing only the keys in myObj a, b, c //
    }   