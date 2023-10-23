/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// implement a function called 'search' that take a parameter represetning an Array of animals and a parameter reprseinting a string
function search(animals, string) {
         // loop through the animals array //
         for (var i = 0; i < animals.length; i++) {
            // temp storage for animals index //
            var animal = animals[i];
            // if statemnet to meet conditions given //
            if (animal.name === string) { // if animal with given string exist //
                // returns animal // 
                return animal;
            } else {
                // returns null if no animal with the name exsist //
                return null;
            }
         }
    }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//               array    string    object                          //
function replace(animals, name, replacement) {
    // if animal with given name exsist in animals array //
    if (animals.name === name) {
        // replace its entire object with the replacement object //
        animals = replacement;
    }
    // otherwise do nothing //
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//              array    string                                     //
function remove(animals, name) {
    // If an animal with that name exists within the `animals` Array, remove it //
    if (animals.name === name) {
        delete animals;
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {

}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
