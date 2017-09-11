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