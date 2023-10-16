/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable named 'animal' assigned to an empty object
var animal = {};
// using dot notation give 'animal' a property named 'species' with a value of an animal species
animal.species = 'cat';
// using bracket notation give 'animal' a property named 'name' with a value of a name
animal['name'] = 'Mars';
// give 'animal' a property of 'noises' assigned to an empty array
animal.noises = [];

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable named 'noises' assigned to an empty array
var noises = [];
// using bracket notation give elements its first value
noises[0] = 'meow';
// using an array function add another element to noises
noises.push('lick');
// using unshift add another element
noises.unshift('scratch');
// using bracket syntax add an element to the end of the array
noises.push('hiss');

console.log(noises.length);

console.log(noises.length - 1);

console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

  animal['noises'] = noises;
  noises.push('ANimal noises RAA');

  console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  bracket and dot notation and loops
 * 2. What are the different ways of accessing elements on arrays?
 *  bracket and dot notation and loops
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable names 'animals' assigned to an empty array
var animals = [];
// push the animal we created in animals
animals.push(animal);
// create a variable called 'duck' assigned to the given object
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}
// push duck to animals //
animals.push(duck);

// now create two more animals object
var dog = {
  species: 'dog',
  name: 'Fluffy',
  noises: ['woof', '*gross mouth noises*']
}
var bird = {
  species: 'bird',
  name: 'Bluey',
  noises: ['chirp', 'flap']
}

// push values to animals //
animals.push(dog, bird);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// the data structure imma choose is array, because arrays contains a 'list' of values which is what the directions ask
var friends = [];
// write a function called getRandom take our animals array and returns a random index of their input array  
function getRandom() {
friends.push(Math.random());


}


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}