/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
*/

/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
*/

var palinPermute = function(str, str2) {

  // create palindrome of string input
  var potentPalin = str2.split('').reverse().join('');

  // check if characters match
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== potentPalin[i]) {
      return false;
    }
  }
  return true;
};

palinPermute('tessetz', 'ztesset');




// Solution v2 - using a different method 

var palinPermute = function(str, str2) {
  // removes special characters, extra tabs/spaces (this function is case sensitive)
  str = str.replace(/[^a-zA-Z ]/g, '').replace(/\s\s+/g, ' ');
  str2 = str2.replace(/[^a-zA-Z ]/g, '').replace(/\s\s+/g, ' ');

  // covers universal error
  if (str.length !== str2.length) {
    return false;
  }

  // create method to count characters
  String.prototype.count = function(s1) {
    return (
      (this.length - this.replace(new RegExp(s1, 'g'), '').length) / s1.length
    );
  };

  // count characters in string
  var characterCounts = [];
  for (var i = 0; i < str.length; i++) {
    characterCounts += str.count(str[i]);
  }

  // count characters in string 2
  var characterCounts2 = [];
  for (var j = 0; j < str2.length; j++) {
    characterCounts2 += str2.count(str2[j]);
  }

  if (str.length % 2 > 0) {
    // odd

    // if it's a palindrome, middle digit must be only odd count
    var midIndex = (str.length - 1) / 2;
    var midIndex2 = (str2.length - 1) / 2;

    // if middle values differ, then it's not a palindrome
    var soloNum = characterCounts[midIndex];
    var soloNum2 = characterCounts2[midIndex2];
    if (soloNum != soloNum2) {
      return false;
    }

    // convert input to array for easy editing
    characterCounts = characterCounts.split('');
    characterCounts2 = characterCounts2.split('');
    delete characterCounts[midIndex];
    delete characterCounts2[midIndex2];
    characterCounts = characterCounts.join('');
    characterCounts2 = characterCounts2.join('');
    console.log(characterCounts);
    console.log(characterCounts2);

    // if they contain other odd numbers, they're not a palindrome
    for (var z = 0; z < characterCounts.length; z++) {
      if (characterCounts[z] % 2 > 0) {
        return false;
      }
    }
    for (var a = 0; a < characterCounts2.length; a++) {
      if (characterCounts2[a] % 2 > 0) {
        return false;
      }
    }

    return "It's odd - but it works!";
  } else {
    // an even length will have no odd numbers
    for (var e = 0; e < characterCounts.length; e++) {
      if (characterCounts[e] % 2 > 0) {
        return false;
      }
    }
    for (var v = 0; v < characterCounts2.length; v++) {
      if (characterCounts2[v] % 2 > 0) {
        return false;
      }
    }

    return 'Its even Stephen!';
  }
};

palinPermute('testtset', 'testtset');