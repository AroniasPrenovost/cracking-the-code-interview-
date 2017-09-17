/* 
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/
function rotate(matrix) {
  var n = matrix.length;
  for (var i = 0; i < n / 2; i++) {
    for (var j = 0; j < Math.floor(n / 2); j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
  return matrix;
}
rotate([
        [1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9]
      ]);
