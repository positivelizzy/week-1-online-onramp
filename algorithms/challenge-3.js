function isDivisbleByN(arr, n) {
  var result = [];
  for(var i in arr){
    if(i % n === 0){
      result.push(i);
    }
  }
  return result;
}

module.exports = isDivisbleByN
