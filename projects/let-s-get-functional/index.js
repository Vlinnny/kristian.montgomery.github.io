// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./kristian.montgomery.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, customer => customer.gender === 'male');
    return males.length;
};

var femaleCount = function(array) {
    let females = _.reduce(array, function(result, customer) {if (customer.gender === 'female'){
    result++
    }return result; }, 0);
    
    return females;
}

var oldestCustomer = (array) => {
    return _.reduce(array, (oldest, array) => {
        if (!oldest || array.age > oldest.age) {
            return array;
        }
        return oldest;
    }, null).name;
};

var youngestCustomer = (customers) => {
    return _.reduce(customers, (youngest, customer) => {
      if (!youngest || customer.age < youngest.age) {
        return customer;
      }
      return youngest;
    }, null).name;
  };


var averageBalance = (array) => {
    let total = _.reduce(array, (sum, c) => {
        let balance = parseFloat(c.balance.replace(/[^0-9.-]/g, ''));
        return sum + balance;
    }, 0);
    return total / array.length;
}


var firstLetterCount;
  


var friendFirstLetterCount;
_
var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
