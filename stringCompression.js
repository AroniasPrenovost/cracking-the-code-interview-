/* 
String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a. If the "compressed" string would not become smaller than the original string, your method shouldreturn the original string. You can assume the string has only uppercase and lowercase letters (a - z).
*/
var compressString = function(str) {
  // sort alphabetically
  str = str.split('').sort().join('').trim();

  // method to count characters
  String.prototype.count = function(s1) {
    return (
      (this.length - this.replace(new RegExp(s1, 'g'), '').length) / s1.length
    );
  };

  // count characters in string
  var charCount = [];
  for (var j = 0; j < str.length; j++) {
    charCount += str.count(str[j]);
  }

  var compressedString = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      compressedString += str[i] + charCount[i];
    }
  }

  if (compressedString.length < str.length) {
    return compressedString;
  }
  return str;
};

compressString('aaabbccddeeeffhhjjdsdsee');