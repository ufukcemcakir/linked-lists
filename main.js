// main.js

const LinkedList = require('./LinkedList');

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

// Additional tests
console.log("Size:", list.size);
console.log("Head:", list.head.value);
console.log("Tail:", list.tail.value);
console.log("At index 2:", list.at(2).value);
console.log("Contains 'snake':", list.contains("snake"));
console.log("Find 'parrot':", list.find("parrot"));

list.pop();
console.log("After pop:", list.toString());

list.prepend("lion");
console.log("After prepend:", list.toString());

list.insertAt("elephant", 3);
console.log("After insertAt:", list.toString());

list.removeAt(2);
console.log("After removeAt:", list.toString());