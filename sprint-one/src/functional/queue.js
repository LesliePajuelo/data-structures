var Queue = function(){
  var someInstance = {};
  var count = 0;
  var begining = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value){
    begining++;
    count++;
    storage[count] = value;

  };

  someInstance.dequeue = function(){
    if(begining > 0){
      begining--;
    }
    var keys = Object.keys(storage);
    var stored = storage[keys[0]];

    delete storage[keys[0]];
    return stored;
    
  };

  someInstance.size = function(){
    return begining;
  };

  return someInstance;
};
