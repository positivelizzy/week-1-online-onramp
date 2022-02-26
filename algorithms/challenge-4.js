function highestSum(x, y) {
  var sum1 = arraySum(x);
  var sum2 = arraySum(y);
  if(sum1 > sum2 ){
    return sum1;
  }else {
    return sum2;
  }
}

// sum all elements in an array
function arraySum(a){ 
  let sum = 0;
  for(var i in a){
    sum+=i;
  }
  return sum;
}

module.exports = highestSum
