//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// Should take an object and return its values in an array
return Object.values(object);

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// Should take an object and return all its keys in a string each separated with a space
return Object.keys(object).join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
// Should take an object and return all its string values in a string each separated with a space
var val = Object.values(object); // stores values of object in val //

var strTest = val.filter((string) => typeof string === 'string'); // uses .filter method to filer the values thats a string, assigned to a new variable
    return strTest.join(' ');// returns the new variable //
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
// Should take a string of one word, and return the word with its first letter capitalized //
return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
// Should take a string of words and return a string with all the words capitalized //
let arrStr = string.split(' ');

for (var i = 0; i < arrStr.length; i++) {
    arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].substr(1);
}
return arrStr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
// Should take an object with a name property and return 'Welcome <Name>!' //
return 'Welcome ' + object.name.charAt(0).toUpperCase() + object.name.slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//  Should take an object with a name an a species and return '<Name> is a <Species>' //
return object.name.charAt(0).toUpperCase() + object.name.slice(1) + ' is a ' + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
// Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises' //
    if (object && object.noises) { // check for object and noises key //
        if (Array.isArray(object.noises)) { // see if object.noises is array //
            if (object.noises.length > 0) { // see if length is > 0 //
                return object.noises.join(' '); // if true return joined separated by a space //
            }
        }
    } 
    // if false there are no noises ;) //
    return 'there are no noises';
  }


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false. //
return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// Should take a name and an object and add the name to the object's friends array then return the object //
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise //
// if friends is an array and has a friends property //
if (Array.isArray(object.friends) && object.hasOwnProperty('friends')) {
    // loop over the length of the property //
     for (var i = 0; i < object.friends.length; i++) {
        // if name equals //
            if (name === object.friends[i]) {
            return true; // return true //
            }
        }
    }
    return false; // otherwise false //
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, arr) {
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with //
 let output1 = [];
 let output2 = [];
 let output3 = null;
 for(var i = 0; i < arr.length; i++) {
    if (name === arr[i].name) {
        output3 = arr[i];
    } else {
        output1.push(arr[i].name);
    }
 }
 if(output3 === null) {
    return output1;
 }
 for (var i = 0; i < output1.length; i++) {
    if (output3.friends.indexOf(output1[i]) == -1) {
        output2.push(output1[i]);
    }
 }
 return output2;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
// Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it //
  object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array> //
    

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//  Should take an array and return an array with all the duplicates removed //
return array.filter((x,y) => array.indexOf(x) === y);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}