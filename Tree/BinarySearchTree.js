class Node {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {

        const newNode = new Node(value);
        if (!this.root) return this.root = newNode;
        let temp = this.root;
        while (temp) {

            if(value == temp.value) return undefined;
            
            if (value > temp.value) {

                if (!temp.right) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            } else {
                if (!temp.left) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
        }
    }


    contains(value) {

        if(!this.root) return false;

        let temp = this.root;

        while(temp) { 
            if(temp.value == value) return true;
            if(value > temp.value) {
                temp = temp.right;
            } else {
                temp = temp.left;
            }
        }
        return false;
    }

    minValueNode(node) {
        if(!this.root || !node) return undefined;

        while(node.left != null) {
            node = node.left
        }
        return node;
    }
}

let bst = new BinarySearchTree();


bst.insert(5);

bst.insert(6)

bst.insert(4)

bst.insert(3)

bst.insert(8);


console.dir( bst, {depth: null})


console.log("8===>", bst.contains(8))
console.log("10===>", bst.contains(10))

console.dir(bst.minValueNode(bst.root))
