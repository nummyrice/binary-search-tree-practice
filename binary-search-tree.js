// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Fill this in
    this.root = null;
    // sets default to null
  }

  insert(val) {
    // Fill this in
    const node = this.root;
    if (node === null) {
      this.root = new TreeNode(val);
      // if root has no value, this puts a value in the root
      return;
    } else {
      const treeSearch = function(node) {
        if (val < node.val) {
          // searches to left side of the tree
          if (node.left === null) {
            node.left = new TreeNode(val);
            return;
          } else if (node.left !== null) {
            return treeSearch(node.left);
          }
        } else if (val >= node.val) {
          // searches to the right of the tree
          if (node.right === null) {
            node.right = new TreeNode(val);
            return;
          } else if (node.right !== null) {
            return treeSearch(node.right);
          }
        } else {
          return null;
        }
      }
    }
  }

  search(val) {
    // Fill this in
  }

  preOrderTraversal() {
    // Fill this in
  }

  inOrderTraversal() {
    // Fill this in
  }

  postOrderTraversal() {
    // Fill this in
  }

}

module.exports = BinarySearchTree;
