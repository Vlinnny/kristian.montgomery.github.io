/**
 * OPERATORS:
 * 
 * 0: There are several different operators in JavaScript; operators are used to assign values, compare values,
 * perform arithmetic operations, and more.
 * 1: Assignment operators are used to assign values to JavaScript variables.
 * 2: Arithmetic operators are used to perform arithmetic between variable or values.
 * 3: Comparison operators are used in logical statements to determine equality or the difference
 * between variables or values.
 * 4: Logical operators are used to determine the logic between variables or values.
 * 5: Unary operator's only have one operande, which comes either before or after the operator. (!, typeOf, -, +, etc..)
 * 6: The ternery operator is the only JavaScript operator that has 3 operands: a condition, followed by an expression
 * to execute if truthy, then an expression to execute if falsy.
 */

// Assignment Operators //
    // Assignment operators are used to assign values to variables //
    var myVar = 13; // '=' is just one of a multitude of assignment operators //

    x += y; // Same as x = x + y //

    x -= y; // ==> x = x - y //

// Arithmetic Operators //
    // Arithmetic operators perform arithmetic on values (math man math) //
    var add = 6 + 1; // ==> 7

    var mult = 6 * 2; // ==> 12

// Comparison Operators //
    // Assign a value to a variable //
    var compareMe = 10;
    // Log to print to the console, then use a comparison operator //
    console.log(compareMe === '10'); // ==> prints false //
                // strictly equal //
    console.log(compareMe == '10'); // ==> prints true //
                // loosely equal //
    console.log(compareMe !== 10); // ==> prints false //
                // does not equal //
    // There is also >, <, >=, <=, and != //

// Logical Operators //
    // Logical operators are used for multiple variables or values //
        // Assigning values to two variables //
    var oldNum = 6; 
    var newNum = 3;
        // We are saying the value of oldNum is less than 10 (which is true), AND the value of newNum is greater than 1 (also true) //
    console.log(oldNum < 10 && newNum > 1); // ==> prints true //
        // Since both are false, the console will print false //
    console.log(oldNum == 5 || newNum == 5); // ==> prints false //
        // The last logical operand is the NOT (!) //
        // Returns false if a single operand can be converted to true; otherwise, returns true //
    console.log(!(!oldNum == newNum)); // ==> returns true because the sattement is false //