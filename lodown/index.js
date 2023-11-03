'use strict';

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



/**
 * _.last: Returns the last n elements of an array or a single elemnt from the end
 * 
 * @param {array} the input array from which elements are extracted
 * @param {number} the number of elements to extract from the end of the array
 * @returns {array|any} the extracted elements as an array or a single elemtns from the end
 */
_.last = function(array, number) {
     if (number < 0) {
        return [];
     } else if (number > array.length) {
        return array;
     } else if (!Array.isArray(array)) {
        return [];
     } else if (!number) {
        return array[array.length-1];
     } else {
        return array.splice(1, number); // return the last <number> items in <array> //
        }
    }
    module.exports.last = last;




    /**
     * _.indexOf: returns the index of the first occurence of a specified value in an array
     * 
     * @param {array} the input array in which to search for the value
     * @param {any value} the value to find within the array
     * @returns {number} the index of the first occurrence of the value, or -1 if the value is not found
     * 
     */
    _.indexOf = function(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            } 
            if (!array.includes(value)) {
                return -1;
            } 
            
        }
    }
    module.exports.indexOf = indexOf;




    /**
     * _.contains: checks if a specified value is present in an array
     * 
     * @param {array} the input array in which to check for the value
     * @param {any value} the value to search for within the array
     * @returns {boolean} true if the value is found in the array, otherwise false
     */
    _.contains = function(array, value) {
        for (var i = 0; i < array.length; i++) {
           return array.includes(value) ? true : false
        }
    }
    module.exports.contains = contains;




    /**
 * _.each: Iterates over elements in a collection (array or object) and applies a specified function to each element.
 *
 * @param {array|object} the input collection to iterate over, which can be an array or an object
 * @param {function} the function to be applied to each element in the collection
 */
/**
 * _.each: Iterates over elements in a collection (array or object) and applies a specified function to each element.
 *
 * @param {Array|Object} collection: The input collection to iterate over, which can be an array or an object.
 * @param {Function} func: The function to be applied to each element in the collection.
 */
module.exports.each = each;