// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //


    return function (value) { // BRO u were right I was thinking WAY to hard about this hooolly //
       return value > base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    
    return function(value) {
        return value < base;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    
    return function(string) {
        if (string[0].toUpperCase() === startsWith.toUpperCase()) { // if given strings first char is loosely equal to startsWith //
            return true; // return true //
        } else {
            return false; // else return false //
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function (string) {

    if (string.charAt(string.length-1).toUpperCase() === endsWith.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) { // modify is a function
    // YOUR CODE BELOW HERE //
    var output = [];
    
    for (var i = 0; i < strings.length; i++) {
         //need to modify string? how ?
            output.push(modify(strings[i])); // this felt good to figure out, ik silly
        
     }
        return output;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 * 
 *  
 */
function allStringsPass(strings, test) { // test is a function will return true or false
    // YOUR CODE BELOW HERE //
   

    for (var i = 0; i < strings.length; i++) {  // loop over strings //
        
        strings.push(test(strings[i])); 
        // return true if all strings pass the test //
        if (string = string) {
            return true;
        } else {
            return false;
        }

        
    }
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
