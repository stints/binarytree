class Node {
    constructor(parent) {
        this.data = null;
        this.left = null;
        this.right = null;
        this.parent = parent;
    }

    insert(value) {
        if (!this.data) {
            this.data = value;
        } else {
            if (value < this.data) {
                if (!this.left) {
                    this.left = new Node(this);
                }
                this.left.insert(value);
            } else {
                if (!this.right) {
                    this.right = new Node(this);
                }
                this.right.insert(value);
            }
        }
    }

    preorder() {
        let values = [];

        values.push(this.data);

        if (this.left) {
            values = values.concat(this.left.preorder());
        }

        if (this.right) {
            values = values.concat(this.right.preorder());
        }

        return values;
    }

    inorder() {
        let values = [];

        if (this.left) {
            values = values.concat(this.left.inorder());
        }

        values.push(this.data);

        if (this.right) {
            values = values.concat(this.right.inorder());
        }

        return values;
    }

    postorder() {
        let values = [];

        if (this.left) {
            values = values.concat(this.left.postorder());
        }

        if (this.right) {
            values = values.concat(this.right.postorder());
        }

        values.push(this.data);

        return values;
    }

    levelorder() {
        let queue = [];
        let order = [];
        order.push(this);

        while (order.length) {
            let node = order.shift();
            queue.push(node.data);
            if (node.left) {
                order.push(node.left);
            }
            if (node.right) {
                order.push(node.right);
            }
        }

        return queue;
    }

    search(value) {
        if (this.data === value) {
            return this;
        } else {
            if (value < this.data) {
                if (this.left) {
                    return this.left.search(value);
                }
            } else {
                if (this.right) {
                    return this.right.search(value);
                }
            }
        }
        return null;
    }

    delete(value) {
        if (value < this.data && this.left != null) {
            this.left = this.left.delete(value);
        } else if (value > this.data && this.right != null) {
            this.right = this.right.delete(value);
        } else {
            if (this.left === null) {
                return this.right;
            } else if (this.right === null) {
                return this.left;
            } else {
                this.data = this.left.rightmost.data;
                this.left = this.left.delete(this.data);
            }
        }
        return this;
    }

    get leftmost() {
        let node = this;

        while (node.left != null) {
            node = node.left;
        }

        return node;
    }

    get rightmost() {
        let node = this;

        while (node.right != null) {
            node = node.right;
        }

        return node;
    }

    get maxnode() {
        let max = this;

        if (this.left) {
            let leftmax = this.left.maxnode;

            if (leftmax.data > max.data) {
                max = leftmax;
            }
        }

        if (this.right) {
            let rightmax = this.right.maxnode;

            if (rightmax.data > max.data) {
                max = rightmax;
            }
        }

        return max;
    }

    get minnode() {
        let min = this;

        if (this.left) {
            let leftmin = this.left.minnode;

            if (leftmin.data < min.data) {
                min = leftmin;
            }
        }

        if (this.right) {
            let rightmin = this.right.minnode;

            if (rightmin.data < min.data) {
                min = rightmin;
            }
        }

        return min;
    }
}

class BinaryTree {
    constructor() {
        this._root = new Node(null);
    }

    insert(...values) {
        values.forEach(v => this._root.insert(v));
    }

    inorder() {
        return this._root.inorder();
    }

    preorder() {
        return this._root.preorder();
    }

    postorder() {
        return this._root.postorder();
    }

    levelorder() {
        return this._root.levelorder();
    }

    contains(value) {
        return this._root.search(value) != null;
    }

    remove(value) {
        this._root.delete(value);
    }

    get max() {
        const maxnode = this._root.maxnode;
        return maxnode != null ? maxnode.data : null;
    }

    get min() {
        const minnode = this._root.minnode;
        return minnode != null ? minnode.data : null;
    }
}