var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  
  instance.count = 0;
  instance.storage = {};

  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;




  return instance;
};

var stackMethods = {

push : function(value){
  this.storage[this.count] = value;
  this.count++;
},

pop: function(){  
  if (this.count > 0) {
    this.count--;
  }
  
var stored = this.storage[this.count];


delete this.storage[this.count];
return stored; 

},

size: function(){
  return this.count;

}

};


