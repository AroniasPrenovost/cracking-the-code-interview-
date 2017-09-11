// Check if one string is a permuation of the other.
// This is case sensitive

var checkPermute = function(str1, str2) {
	if (str1.length !== str2.length) {
		return "Not a permutation.";
} // sort both strings alphabetically
str1 = str1.split('').sort().join('');
str2 = str2.split('').sort().join('');
if (str1 === str2) {
	return "Success! One string is a permutation of the other.";
}
return "Not a permutation.";
}
checkPermute("the test is here.", "here is the test.");