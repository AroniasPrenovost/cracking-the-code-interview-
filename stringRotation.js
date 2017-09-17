  /* 
  String Rotation: Assume you have a method i 5Su b 5 tr ing which checks if one word is a substring of another. Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one call to i5Sub5tring (e.g., "waterbottle" is a rotation of" erbottlewat").
  */
  var stringRotation = function(str1, str2) {
      if (str1.length !== str2.length) {
    return false;
  }
  return (str2 + str2).includes(str1); 
  }
  stringRotation("testy", "estyt");
  
  /* 
  The runtime of this varies based on the runtime of isSubstring. But if you assume that isSubstring runs in O(A+B) time (on strings of length A and B), then the runtime of is Rotation isO(N).
  */