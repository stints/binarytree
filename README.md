# binarytree
Simple binary tree in javascript

```javascript
  // Create a tree instance
  let tree = new BinaryTree();
  
  // Insert data
  tree.insert(10, 2, 5, 1, 25, 19);
  
  // View data
  console.log(tree.inorder());  // [1, 2, 5, 10, 19, 25]
  console.log(tree.preorder());  // [10, 2, 1, 5, 25, 19]
  console.log(tree.postorder());  // [1, 5, 2, 19, 25, 10]
  console.log(tree.levelorder());  // [10, 2, 25, 1, 5, 19]
  
  // Check if value exists
  tree.contains(19); // true
  
  // Get max and min value
  tree.max;  // 25
  tree.min;  // 1
  
  // Remove value
  tree.remove(2)
  console.log(tree.inorder());  // [1, 5, 10, 19, 25]
  console.log(tree.preorder());  // [10, 1, 5, 25, 19]
  console.log(tree.postorder());  // [5, 1, 19, 25, 10]
  console.log(tree.levelorder());  // [10, 1, 25, 5, 19]
```
