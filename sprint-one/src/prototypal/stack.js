var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  

  return stack;
};

var stackMethods = {
  push: function(val){
    this.storage[this.count] = val;
    this.count++;
  },

  pop: function(){ 
    if(this.count > 0){
      this.count--;
    }
    var stored = this.storage[this.count];
    delete this.storage[this.count];
    return stored;
  },

  size: function(){
    return this.count;
  },

  count: 0,

  storage: {}
};



