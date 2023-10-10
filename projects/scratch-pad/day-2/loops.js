// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //loop over values and print with
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //loop over array backwards and print to console
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //create empty array to return
  var array = [];
  
  //use for in loop to return object's keys

  for (var key in object) {
    array.push(key);
    
  }
  //return array
  return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // loop over object
  for (var key in object) {
    //print its keys with console.log
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //create storage array
  var array = [];

  //loop over object
  for (var key in object) {
    //push values into empty array
    array.push(object[key]);
  }
  //return array
  return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //loop over object
  for (var key in object) {
    //print its values with console.log
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //create a variable to store the keys
  var output = Object.keys(object); // list all the objects keys with Object.keys (its like a for in loop but simpler)
    
  //count the number of keys in object assigned with a nre variable
  var numberKeys = output.length;

  //return the length which is the number of key/value pairs
  return numberKeys;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  /*
  Object.keys() method - gets an array of the objects keys
  .reverse() method - a method used to reverse an array
  forEach() method - method to iterate over an array and access the objects keys and values
  */
  
    //get an array of the objects keys
    var output = Object.keys(object).reverse(); // you can reverse them with .reverse() method
  
    //lets use forEach() method to log the keys in reverse
    output.forEach(key => {
      console.log(object[key]);
    });
  
    console.log(output);
    //wow im learning so many methods doing these 0.0

  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
