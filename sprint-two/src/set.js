var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this.contains(item)){
    this._storage.push(item);
  }

};

setPrototype.contains = function(item){
  if(this._storage.indexOf(item) >= 0){
    return true;
  }
  return false;
};

setPrototype.remove = function(item){
  var loc = this._storage.indexOf(item);
  if(this.contains(item)){
    this._storage.splice(loc, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add = O(1)
 * contains = O(1)
 * remove = O(1)
 */
