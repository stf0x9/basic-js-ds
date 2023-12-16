const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(data) {
    this.size += 1;
    this.storage[this.size] = data;
  }

  pop() {
    const data = this.storage[this.size]
    delete this.storage[this.size];
    this.size -= 1;
    return data;
  }

  peek() {
    return this.storage[this.size];
  }
}

module.exports = {
  Stack
};
