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
// implement a function called 'search' that take a parameter representing an Array of animals and a parameter representing a string
function search(animals, string) {
    // declare new variable and use findIndex to get the index that satisfies the conditions //
    var output = animals.findIndex(z => z.name === string) // annonymous function designed to do one thing, compare given value to string
       if(output !== -1) {
        // if true return the object //
        return animals[output];
       } else {
        // otherwise return null //
        return null;
       }
    }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//               array    string    object                          //
function replace(animals, name, replacement) {
    // if an <animal> with <name> exist withing the animals array, replace it with the replacement object //
    if (animals === name) {
        
        return animals = copy(replacement);
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
    // loop over animals array //
    for (var i = 0; i < animals.length; i++) {
        // if statement with given conditions //
        // animal names length less 0    animal species length less 0      animals name is unique
    if (animals[i].name.length > 0 && animals[i].species.length > 0 && animals[i].name !== animal) {
        // return animals array with new object //
        return animals.join(animals);
    } 
 }
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
