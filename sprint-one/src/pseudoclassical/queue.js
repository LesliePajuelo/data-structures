var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.begining = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val){
  this.count++;
  this.begining++;
  this.storage[this.count] = val;

};

Queue.prototype.dequeue = function(){
  if (this.begining > 0) {
    this.begining--;
  }
  
  var keys = Object.keys(this.storage);
  var stored = this.storage[keys[0]];


  delete this.storage[keys[0]];
  return stored; 
};

Queue.prototype.size = function(){
  return this.begining;
};


