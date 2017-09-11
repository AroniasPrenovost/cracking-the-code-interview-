/* URLify: Write a method to replace all spaces in a string with '%20'. 
   You may assume that the string has sufficient space at the end to hold 
   the additional characters, and that you are given the "true"
   length of the string. 
*/

var URLify = function(str, trueLength) {
  str = str.slice(0, trueLength); // cut to true length
  str = str.split(' ').join('%20'); // replace spaces with "%20J"
  console.log(str);
};

URLify('This is a my string  ', 19);
