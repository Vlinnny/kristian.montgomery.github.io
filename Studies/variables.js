/**
 * VARIABLES:
 * 
 * 0: In JavaScript variables are used as containers for storing values, var is one of three keywords that can be used to
 * declare a variable. All JavaScript variables must be identified with unique names, called identifiers, it's good practice
 * to declare these identifiers in camel-case; which is a naming convinction, in which we combine multiple words and make one
 * string by capitalizing the first character of each string except for the first. 
 * 
 * 1: After we declare a variable with one of our three keywords and create the identifier, we need to assign a value to
 * the variable. Variables can be assigned to many types of data such as strings, numbers, arrays, booleans etc... 
 * 
 * 2: There are three keywords to declare a variable in JavaScript, var, let, and const. Out of the three keywords it is
 * more preffered to use let or const when declaring a variable, this is because var can be re-declared to a different value,
 * while let or const can not.
 * 
 * 3: Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their respective
 * scopes before executed.
 */

//1. Declaration and Assignment //
    // Declaration //
    // At the declaration phase variable is identified with the unique identifier age
    var age;

    // Assignment //
    // Age is now assigned to number 23 //
    age = 23;

//2. Var, Let, and Const //
    // Var // 
    // Var is one of three keywords to declare a variable
    var myVar; // ==> undefined because it has no assignment

    // Let //
    // Let is another of the three keywords to declare a variable, let can not be re-assigned
    let fullName; // ==> undefined because it has no assignment

    // Const //
    // The last of the variable declaration keywords, it can not be re-assigned but works the same way
    const newVariable = 50; // ==>  the number 50, we can declare and assign variables in the same line

    //3. Hoisting //
    