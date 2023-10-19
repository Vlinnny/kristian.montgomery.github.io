// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object. 
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var output = {};

    output.id = id;
    output.nameFirst = nameFirst;
    output.nameLast = nameLast;

    return output;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; // contact list //
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact); // add contact object to the contact list //
        },
        findContact: function(fullName) { // returns contact object if found in contact-list, otherwise returns undefined //
            // loop over the contact list //
           for (var i = 0; i < contacts.length; i++) {
            // split full name and store it in a variable //  
            var arr = fullName.split(' ');
            // compare the nameFirst and nameLast values to the fullName //
            if (contacts[i].nameFirst === arr[0] && contacts[i].nameLast === arr[1])  {
                // return the object if true //
                return contacts[i];
            }
            
          }    
        },
        removeContact: function(contact){
            contacts.splice(contact, 1); // takes a contact object to be removed from contact list
        },
        printAllContactNames: function(name) { 
        // Should have an printAllContactNames API that returns new-line separated String of all full-names of contacts //
        // loop over contact life //
        for (var i = 0; i < contacts.length; i++) {
            // return full names separated, with a new line character //
           return contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
        }
           
        }
    } // ==> returns an object
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
