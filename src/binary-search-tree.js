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
    return hasNode(this.rootNode, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data < data) {
        return hasNode(node.right, data);
      } else if (node.data > data) {
        return hasNode(node.left, data);
      }
    }
  }

  find(data) {
    return findNode(this.rootNode, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        return findNode(node.right, data);
      } else if (node.data > data) {
        return findNode(node.left, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      // node not found, return null
      if (!node) {
        return null;
      }
      // search for node
      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        // node found

        if (!node.right && !node.left) { // has no children
          return null;
        }

        if (!node.right) { // has left child
          node = node.left;
          return node;
        }

        if (!node.left) { // has right child
          node = node.right;
          return node;
        }

        // both children

        let minRightChild = node.right;
        while (minRightChild.left) {
          minRightChild = minRightChild.left;
        }
        node.data = minRightChild.data;
        node.right = removeNode(node.right, minRightChild.data);
        return node;
      }
    }
  }

  min() {

    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {

    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};