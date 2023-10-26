/**
 * DATA TYPES
 * 
 * 0. JavaScript has numerous different data types, a variable can hold any of the data types. Data Types are just types of data that
 * can be used and manipulated in a program.
 * 1. Number is anything that represents a number such as 1, 2, 3 or even negatives -1, -2, -3, as well as decimals
 * 2. String's are a series of characters enclosed in either '', or "".
 * 3. Booleans can only have two values, true, or false.
 * 4. Array's are a complex datatype that can hold other data types enclosed in brackes [], and each item is seperated
 * by commas. Array's are also zero indexed, meaning they start at 0.
 * 5. Objects are another complex data type that is written with curly braces {}, with there properties seperated into
 * key/value pairs seperated by commas.
 * 6. Functions are a block of code designed to perform particular tasks, it is excecuted when it is called with "something"
 * 7. The undefined data type occurs when when a variable is declared without a value.
 * 8. The null value represents the internal absence of any object value, null expresses the lack of identification.
 * 9. NaN is a global property that represents "Not a Number".
 * 10. Infinity is a number that represents positive infinity while -infinity represents negative infinity.
 * 11. Primitive data types are the lowest of all the datatypes and can be tested with the typeof operator, while
 * data types have primitive data types in them which is what makes them complex.
 * 12. When passing BY COPY in JavaScript a copy of the original variable is created, so any changes to the copied
 * variable do not affect the original. While passing BY REFERENCE we pass the reference to the actual parameter,
 * and no copy is created.
 */

// Number // 
    // We declare a variable and assign it a value of a number //
    var myNum = 13; // ==> 13 //

    var myNum = 1.6; // ==> 1.6 //

    var myNum = -9; // ==> -9 //

    console.log(myNum); // What logs? //
    // Because we are using var, the variable myNum will equal -9 since it was re-assigned //

// String //
    // Let's assign some strings to variables //
    const myStr = 'Operation Spark!';

    let myStr = 'Will I print?';

    var newStr = 'Coding is fun!';
    // The variable myStr will put up an error here because we attempted to re-assign it when you //
    // can not re-assign with const keyword //

// Boolean //
    // Remember boolean's can only be two values //
    const oldBool = true; // ==> true //

    const newBool = false; // ==> false //
    // Booleans can only be either true of false. //

// Array //
    // We must always first declare a variable //
    const arr = []; // Here we have just an empty array //

    const myArr = [1, 2, 3]; // A new array, but filled with numbers //

// Objects //
    // Objects are created with {} (code block) //
    const obj = {
        make: 'Bach Mono', // Key/value pairs, separated by commas //
        model: 'Mono R' // No comma on last key/value pair //
    };

// Function //
    // Functions are written with the following syntax // 
    function myFunction() {}; // Function then a unique identifier followed by parenthesis, and finally, a code block

// Undefined //
    // Undefined occurs when a variable that has no value is declared //
    var x;
    console.log(x); // ==> Undefined //

// Null //
    // Null expresses no value or identification //
    const z = null;
    console.log(z); // ==> Null //
// NaN //
    // NaN is global and represents not a number //
    const y = NaN;
    console.log(y); // ==> NaN //
// Infinity //
