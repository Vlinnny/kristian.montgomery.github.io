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
    // looks through the array and returns the animal object if an animal with that name exsist
    for (i = 0; i < animals.length; i++) {
        // if animals name matches the given name //
        if (animals[i].name === string) {
            // return the animal object //
            return animals[i]; 
        } else {
            // return null // 
            return null;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//               array    string    object                          //
function replace(animals, name, replacement) {
    // If an animal with that name exists within the `animals` Array //
    if (animals.name === name) {
        // replace it's entire Object with the replacement Object //
        return animals.push(replacement());
    }

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
