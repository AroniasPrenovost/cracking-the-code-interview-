// check if string has unique characters

// O(n^2) approach
// Exponential Runtime 

var allUniqueChars = function(string) {
for (var i = 0; i < string.length; i++) { // loop through characters in string
for (var j = i + 1; j < string.length; j++) { // check that character against all remaining
    if (string[i] === string[j]) {
      return false; 
    }
  }
}
return true; // if no matches and it cycles through successfully 
};

// note 
// you could check upfront against max unique charater length
// could be 128 unique characters vs. extended ASCII
if (string.length > 256) { 
  return false;
} 

/* for interviews --- 

ask if it's an ASCII string or a UNICODE string, will show solid computer science foundation 

*/