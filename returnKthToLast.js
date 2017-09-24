/* 
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
*/

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function(value) {
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) indexes.push(currentIndex);
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};

LinkedList.prototype.returnKthToLast = function(k) {
  var counter = [];
  var count = 0;
  var currentNode = this.head;
  while (currentNode !== null) {
    counter.push(currentNode.value);
    count++;
    currentNode = currentNode.next;
  }
  k = count - k;
  console.log(counter[k]);
};

LinkedList.prototype.removeDupes = function() {
  var dupValues = [];
  var currentNode = this.head;
  while (currentNode !== null) {
    dupValues.push(currentNode.value); // .value turns it to plain numbers
    // remove non-duplicates
    var find_duplicates = function(arr) {
      var len = arr.length,
        out = [],
        counts = {};

      for (var i = 0; i < len; i++) {
        var item = arr[i];
        counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
        if (counts[item] === 2) {
          out.push(item);
        }
      }
      return out;
    };
    currentNode = currentNode.next;
  } // end while loop

  // store duplicate values in list
  dupValues = find_duplicates(dupValues);

  // loop through linked list and compare to dupValues
  currentNode = this.head;
  while (currentNode !== null) {
    if (dupValues.includes(currentNode.value)) {
      currentNode.value = 0;
    }
    currentNode = currentNode.next;
  }

  currentNode = this.head;
  while (currentNode !== null) {
    // If linked list is empty
    if (!this.head) {
      console.log('Linked list is empty.');
      return;
    }

    if (this.head.value === 0) {
      this.head = this.head.next;
    } else if (currentNode.value === 0) {
      var p1 = currentNode;
      var p2 = p1.prev;
      p1 = p2;
    } else {
      // nothing really goes here...
    }
    currentNode = currentNode.next;
  }
};

var myLL = new LinkedList();

myLL.addToHead(122);
myLL.addToHead(1);
myLL.addToHead(2);
myLL.addToHead('howwww');
myLL.addToHead('hob');
myLL.addToHead(1232);
myLL.addToHead('hello');
myLL.addToHead('ho');
myLL.addToHead('ho');
myLL.addToHead('ho');
myLL.addToHead('ho');
myLL.addToHead(5);
myLL.addToHead('h');
myLL.addToHead(4);
// myLL.removeDupes();
console.log(myLL.returnKthToLast(5));