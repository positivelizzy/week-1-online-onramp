function replaceDivisible(x, y) {
  var arr = [];
  for(var i in x){
    if(i % y === 0){
      arr.push("isDivisible")
    }else {
      arr.push(i)
    }
  }
  return arr;
}

module.exports = replaceDivisible
