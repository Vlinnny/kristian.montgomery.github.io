'use strict';
// YOU KNOW WHAT TO DO //
//Documentation
//each documentation
/**
 *
 * idenity: Function takes in a value and returns the value unchanged
 *
 * @param {Any value}: Function takes in any value.
 * @returns {Any value}: Function returns input unchanged.
 *
 */
function identity(value) {
    return value
}
module.exports.identity = identity;





/**
 * _.typeOf: Determine the type of a given value.
 *
 * This function takes a value and returns its data type as a string.
 *
 * @param {Any} value - The value for which you want to determine the type.
 * @returns {string} - A string representing the data type of the input value.
 */
_.typeOf = function(value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else if (typeof value === 'object') {
        return 'object';
    } else {
        return typeof value;
    }
};
module.exports.typeOf = typeOf;




/**
 * _.first: Get the first n elements from an array.
 * 
 * This function retrieves the first n elemnts from an array and returns them in a new array
 * 
 * @param {array} array - The array from which to extract elements.
 * @param {number}  - The number of elements to retrieve from the beginning of the array.
 * @returns {array | any} - A new array containint the first n elements or the first element if n is not specified.
 */
_.first = function(array, number) {
    if (number < 0) {
        return [];
    } else if (number > array.length) {
        return array;
    } else if (!Array.isArray(array)) {
        return [];
    } else if (!number) {
        return [array[0]];
    } else {
        return array.slice(0, number);
    }
};
module.exports.first = first;