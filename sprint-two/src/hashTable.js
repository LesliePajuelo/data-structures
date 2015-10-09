var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.bucket = [];
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(!this._storage[i]) {
    this._storage[i] = [[k,v]];
   } else if (_.contains(this._storage[i][0], k)){
    this._storage[i][0] = [k,v];

   } else {
    this._storage[i].push([k,v])
   }


};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i][0][1] === null){
    return null;
  }
  
  for(var j = 0; j < this._storage[i].length; j++){
    if (_.contains(this._storage[i][j], k)){
      return this._storage[i][j][1];
    }
  }
}

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i][0][1] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
