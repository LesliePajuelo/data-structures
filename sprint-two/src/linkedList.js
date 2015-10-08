
var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
    }
      list.tail = newNode;
  
  };

  list.removeHead = function(){
    var stored = list.head;
    list.head = Node(list.tail.value)
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
