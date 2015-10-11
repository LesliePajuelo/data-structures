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
      //
      
      newNode.next = list.head;
      //
      list.head.prev = newNode;
      //
      list.head = newNode;

    }
  
  };

  list.removeHead = function(){

    var stored = list.head;
    list.head = Node(list.tail.value)
    return stored.value;
  };

  list.removeTail = function(){

    var stored = list.tail;
    list.tail = Node(list.head.value)
    return stored.value;
  };

  list.contains = function(target){
    var result = false;
    _.each(list, function(val){
      _.each(val, function(item, key){
        if(item === target){
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
