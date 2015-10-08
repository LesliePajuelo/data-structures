var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var instance = {};
  
  instance.count = 0;
  instance.begining = 0;
  instance.storage = {};

  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;




  return instance;
};

var queueMethods = {

enqueue : function(value){
  this.count++;
  this.begining++;
  this.storage[this.count] = value;
  
},

dequeue: function(){  
  if (this.begining > 0) {
    this.begining--;
  }
  
  var keys = Object.keys(this.storage);
  var stored = this.storage[keys[0]];


  delete this.storage[ys[0]];
  return stored; 

},

size: function(){
  return this.begining;

} 
  
};



