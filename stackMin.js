/*
Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.
*/

// Creates a stack
var Stack = function() {
  this.count = 0;
  this.storage = {};
  this.minValue = null;
  this.prevMinValue = null;
};

// Adds a value onto the end of the stack
Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  while (this.minValue === null) {
    // checks first item to be added
    this.minValue = value;
  }
  if (this.minValue >= value) {
    // compare first item incoming items
    this.prevMinValue = this.minValue;
    this.minValue = value;
  }
  this.count++;
};

// Removes and returns the value at the end of the stack
Stack.prototype.pop = function() {
  // Check to see if the stack is empty
  if (this.count === 0) {
    return undefined;
  }
  this.count--;
  var result = this.storage[this.count];
  // if number getting deleted is the min value,
  // set minimum to previous minimum
  if (result === this.minValue) {
    this.minValue = this.prevMinValue;
  }
  delete this.storage[this.count];
  return result;
};

// Returns minimum value of the stack
Stack.prototype.returnMin = function() {
  console.log(this.minValue);
};

var myStack = new Stack();

myStack.push(5);
myStack.push(6);
myStack.push(40);
myStack.push(4);
myStack.push(7);
myStack.push(2);
myStack.push(5);
myStack.pop();
myStack.pop();

console.log(myStack.returnMin());