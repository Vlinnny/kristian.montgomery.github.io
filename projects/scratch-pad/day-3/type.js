// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //Array.isArray determines if something is an array ;)
   return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * // look up how to figure out if something is an 'instance' of the date object
 * 
 * isObject({a: 1, b: 2}) //true
 * isObject(null); // false
 * isObject(new Date()); // false
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    // determine if input value is considered an object but is not null && and not date && not array
    
    if (typeof value !== 'object') { 
        return false;
    } else if (value === null || value instanceof Date || Array.isArray(value)) { // wasnt sure how to make these NOT equal to value //
        return false;
    } else {
        return true;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if (typeof value !== 'object') { 
        return false;
    } else if (value === null || value instanceof Date) { 
        return false;
    } else {
        return true;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    if (typeof value === 'string') {
        return 'string';
    } else if (typeof value === false || typeof value === true) {
        return 'boolean';
    } else if (value instanceof Date) {
        return 'date';
    } else if (typeof value === undefined) {
        return 'undefined';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (Array.isArray(value)) {
        return 'array';
    } else if (value == null) {
        return 'null';
    } else {
        return 'function';
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
