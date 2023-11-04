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




/**
 * _.unique: returns a new array containing unique elemetns from the input array
 * 
 * @param {array} the input array from which to extract unique elements
 * @param {array} a new array containing only unique elements
 */
_.unique = function(array) {
    let output = [];
    for (var i = 0; i < array.length; i++) {
     if (output.indexOf(array[i]) === -1) {
        output.push(array[i]);
     }
    }
    return output;
}
module.exports.unique = unique;




/**
 * _.filter: filters elements from an array based on given callback function
 * 
 * @param {array} input array to filter
 * @param {function} the filtering function determines what element to filter
 * @returns {array} a new array containing elements that meet the filtering function
 */
_.filter = function (array, func) {
    let output = [];
    for (var i = 0; i < array.length; i++) {
        if(func(array[i], i, array)) {
            output.push(array[i]);
        }  
    }
    return output;
}
module.exports.filter = filter;




/**
 * _.reject: rejects elements from an array based on given callback function
 * 
 * @param {array} the inut arrat to reject elements from
 * @param {function} the rejection function that determines which element to reject
 * @returns {array} a new array containing elements that do not meet the rejection criteria
 */
_.reject = function(array, func) {
    let output = [];
    for (var i = 0; i < array.length; i++) {
        if (!func(array[i], i, array)) {
            output.push(array[i]);
        }
    }
}
module.exports.reject = reject;




/**
 * _.partition {array} partitions an array into two arrays based on a given partitioning function
 * 
 * @param {function} the input array to be partitioned
 * @param {function} the partitioning function that determined into which arrays elents are placed
 * @returns {array} an array containing two arrays - one for truthy values and one for falsy values
 */
_.partition = function(arr, func) {
    let output = [];
    let output2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            output.push(arr[i]);
        }
        if (!func(arr[i], i, arr)) {
            output2.push(arr[i]);
        }
    }
    return [output].concat([output2]);
};
module.exports.partition = partition;




/**
 * _.map transforms elemetns in a collection using a provided function
 * 
 * @param {array||object} the input collection to be transformed
 * @param {function} the transformation function applied to each elemetn in the input
 * @returns {array} an array containing the transformed elements
 */
_.map = function(collection, func) {
    let output = [];
 if(Array.isArray(collection)) { 
     for(var i = 0; i < collection.length; i++) {
          output.push(func(collection[i], i, collection));
     }
    } else { 
     for(var key in collection) {
         output.push(func(collection[key], key, collection));
     }
    }
    return output;
 };
 module.exports.map = map;




 /**
  * _.pluck extracts a specific property from each elements in ana rray of objects
  * 
  * @param {array} an array of objects from which to extract
  * @param {string} the name of the property to extract from each object
  * @returns {array} an array containing the extracted values of the specified property
  */
 _.pluck = function(arr, prop) {
    return _.map(arr, x => x[prop]);
    };
module.exports.pluck = pluck;




/**
 * _.every checks if all elements in a collection pass a test
 * 
 * @param {array||object} the input collection to be tested
 * @param {function} the test function applied to each element
 * @returns {boolean} true if all elements pass or are truthy, otherwise false
 */
_.every = function (collection, func) {
    if (Array.isArray(collection)) {
        if (!func) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) {
                    return false;
                }
            }
        } else {
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i]) === false) {
                    return false;
                }
            }
        }
    } else {
        if (!func) {
            for (var key in collection) {
                if (!collection[key]) {
                    return false;
                }
            }
        } else {
            for (var key in collection) {
                if (func(collection[key], key, collection) === false) {
                    return false;
                }
            }
        }
    }
    return true;
};
module.exports.every = every;




/**
 * _.some checks if at least one element in a collection passes a test
 * 
 * @param {array||object} input collection to be tested
 * @param {function} test function applied to each element
 * @returns {boolean} returns true if at least one elemnt passes the test or is truthy
 */
_.some = function (collection, func) {
    if (Array.isArray(collection)) {
        if (!func) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]) {
                    return true;
                }
            }
        } else {
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection)) {
                    return true;
                }
            }
        }
    } else {
        if (!func) {
            for (var key in collection) {
                if (collection[key]) {
                    return true;
                }
            }
        } else {
            for (var key in collection) {
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
        }
    }
    return false;
};
module.exports.some = some;
