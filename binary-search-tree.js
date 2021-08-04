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

        const node = this.root
        if (node === null) {
            this.root = new TreeNode(val); //IF the root node is null, we set the new value to the null node.
            return;
        } else {
            const search = function(node) {
                if (val < node.val) { //left side of the tree
                    if (node.left === null) {
                        node.left = new TreeNode(val); //Puts values to the left side of the tree IF the node is null.
                        return;
                    } else if (node.left !== null) {
                        return search(node.left); //This continues searching to the left until the node is null.
                    }
                } else if (val > node.val) { //right side of the tree
                    if (node.right === null) {
                        node.right = new TreeNode(val); //Puts values to the right side of the tree IF the node is null.
                        return;
                    } else if (node.right !== null) {
                        return search(node.right) //This continues searching to the right until the node is null.
                    }
                } else {
                    return null;
                }
            }
            return search(node)
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