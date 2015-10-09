var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);

  tree.left = null;
  tree.right = null;
  tree.value = value;

  return tree;

};

BinarySearchTree.prototype.insert = function(value){
  //if value is less than existing value, and
  // there's nothing already there, 
  // create new binarySearcTree
  // if something is there then call insert again and test again that value.

  if (value < this.value){
    if(this.left === null){
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right === null){
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(target){
  if(this.value === target){
    return true;
  }

  if(this.left !== null){
    if (this.left.contains(target)) {
      return true;
    }
  }

   if(this.right !== null){
    if (this.right.contains(target)) {
      return true;
    }
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb){
  if(this.value !== null){
    cb(this.value);
  }

  if(this.left !== null){
    this.left.depthFirstLog(cb);
  }

  if(this.right !== null){
    this.right.depthFirstLog(cb);
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
  insert = O(log n)
  contains = O(log n)
  depthFirstLog = O(log n)
 */
