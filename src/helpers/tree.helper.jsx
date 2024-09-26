export class Tree {
  constructor(value) {
    this.value = value; // value
    this.left = null; // child node in left
    this.right = null; // child node in right
  }
  
  calculatePaths() {
    const paths = [];

    const dfs = (node, currentPath) => {
      if (!node) return;

      currentPath.push(node.value);

      // Check if the current node is a leaf
      if (!node.left && !node.right) {
        paths.push([...currentPath]);
      } else {
        // Traverse left and right children
        dfs(node.left, currentPath);
        dfs(node.right, currentPath);
      }

      // Backtrack to explore other paths
      currentPath.pop();
    };

    // Start the DFS from the current instance (which is the root)
    dfs(this, []);
    return paths;
  }
}

// In-order tree traversal (left -> root -> right)
export const iterateTreeInOrder = (root) => {
  if (root !== null) {
    iterateTree(root.left);
    console.log(root.value);
    iterateTree(root.right);
  }
};

// Pre-order tree traversal (root -> left -> right)
export const iterateTreePreOrder = (root) => {
  if (root !== null) {
    console.log(root.value);
    iterateTree(root.left);
    iterateTree(root.right);
  }
};

export const push = (root, value) => {
  // root null
  if (root == null) {
    return new Tree(value);
  }

  // insert value in left
  if (root.value < value) {
    root.left = push(root.left, value);
  } else {
    // insert value in right
    root.right = push(root.right, value);
  }

  return root;
};

// Height of tree
export function heightOfTree(root) {
  if (!root) {
    return 0;
  } else {
    let leftHeight = heightOfTree(root.left);
    let rightHeight = heightOfTree(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

export function BFS(root) {
  if (root === null) return [];

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current.value);

    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }

  return result.join("->");
}

export function lowestCommonAncestor(root, v1, v2) {
  if (!root) return null;

  console.log(root.value, v1, v2);

  if (root.value > v1 && root.value > v2) {
    return lowestCommonAncestor(root.left, v1, v2);
  } else if (root.value < v1 && root.value < v2) {
    return lowestCommonAncestor(root.right, v1, v2);
  } else {
    return root.value;
  }
}

export const convertArrayToTree = (arr) => {
  let tree = new Tree(parseInt(arr[0]));
  // splice the first element
  arr.shift();
  // create new tree
  arr.forEach((element) => {
    // console.log(element);
    tree = push(tree, element);
  });

  return tree;
};

export function recoverBST(root) {
  let first = null,
    second = null,
    prev = null;

  const inorder = (node) => {
    if (!node) return;

    inorder(node.left);

    if (prev && node.value < prev.value) {
      if (!first) {
        first = prev;
      }
      second = node;
    }
    prev = node;

    inorder(node.right);
  };

  inorder(root);

  console.log(first, second);

  if (first && second) {
    const temp = first.value;
    first.value = second.value;
    second.value = temp;
  }

  return root;
}

export const buildTree = (values) => {
  if (!Array.isArray(values) || values.length === 0) return null;

  const createNode = (index) => {
    if (index >= values.length || values[index] === null) return null;
    const node = new Tree(values[index]);
    node.left = createNode(2 * index + 1); // left child
    node.right = createNode(2 * index + 2); // right child
    return node;
  };

  return createNode(0); // Start creating nodes from the root
};
