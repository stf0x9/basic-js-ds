const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() { // initialize root to null;
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this._insertNode(this.rootNode, newNode);
    }
  }

  _insertNode(node, newNode) { // handles case, where node is occupied
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }

    } else if (newNode.data > node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._search(this.rootNode, data) !== null;
  }

  find(data) {
    return this._search(this.rootNode, data);
  }

  _search(node, data) { // recursively searches for data in node. returns node
    if (node === null) { // not found, null
      return null;
    }

    if (node.data === data) {
      return node;
    } else if (data < node.data) {
      return this._search(node.left, data);
    } else if (data > node.data) {
      return this._search(node.right, data);
    }
  }

  remove(data) {
    if (this.rootNode === null) {
      return 'Empty root';
    }
    this._removeNode(this.rootNode, data)
  }

  _removeNode(node, data) {
    if (node === null) { // base case, no changes needed
      return node;
    }

    if (data < node.data) { // search for node in left subtree
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) { // search for node in right subtree
      node.right = this._removeNode(node.right, data);
    } else { // node found, next is removal
      if (node.left === null) { //has right child
        return node.right;
      } else if (node.right === null) { //has left child
        return node.left;
      } else { //has 2 children
        const minValue = this._findMinValue(node.right);
        node.data = minValue;
        node.right = this._removeNode(node.right, minValue);
      }
    }
    return node;
  }

  _findMinValue(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  _findMaxValue(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }

  min() {
    return this._findMinValue(this.rootNode);
  }

  max() {
    return this._findMaxValue(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree
};