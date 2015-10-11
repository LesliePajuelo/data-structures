var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //create a new object using Node
    var newNode = Node(value);
    //If there are no exisiting nodes
    //the same object will be the head and tail
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      //if there are existing nodes then...
      //the new node.prev should reference the old node
      
      newNode.prev = list.tail;
      //the next for the old node should hold the new node object.
      list.tail.next = newNode;
      //the old tail should now be replaced with the new node.
      list.tail = newNode;

    }
  
  };

  list.addToHead = function(value){
    //create a new object using Node
    var newNode = Node(value);
    //If there are no exisiting nodes
    //the same object will be the head and tail
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      //if there are existing nodes then...
      // set the reference in the new head to the old head
      
      newNode.next = list.head;
      // set the reference from the old head to the new head
      list.head.prev = newNode;
      // replace the old head with the new head
      list.head = newNode;

    }
  
  };

  list.removeHead = function(){
    //store new node with value of current head
    var stored = Node(list.head.value);
    //reassign current head to next node in line
    list.head = list.head.next;
    //if list.head is null just return the stored value
    if(!list.head){
      return stored.value;
    } else {
    //otherwise reassign list.head.prev null since tail
    //and head reference same object
      list.head.prev = null;
      return stored.value;
    }
  };

  list.removeTail = function(){
    //store new node with value of current tail
    var stored = Node(list.tail.value);
    //reassign current tail to next node in line
    list.tail = list.tail.prev;
    //set the reference in the new tail to null
    //since head and tail reference same object
    list.tail.next = null;
    //return the old tail
    return stored.value;
  };

  list.contains = function(target){
    var result = false;
    //loop over entire list object
    _.each(list, function(val){
      //loop over all values in list object
      _.each(val, function(item, key){
        //if value in object matches target 
        if(item === target){
          //reassign result variable to true
          result = true;
        }
      })
    })
    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail = O(1)
   removeHead = O(1)
   contains = O(n^2)
 * 
 */
