const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        node.right = addNode(node.right, data);
      } else if (node.data > data) {
        node.left = addNode(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return checkForPresence(this.rootNode, data);

    function checkForPresence(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data < data) {
        return checkForPresence(node.right, data);
      } else if (node.data > data) {
        return checkForPresence(node.left, data);
      }
    }
  }

  find(data) {
    
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};