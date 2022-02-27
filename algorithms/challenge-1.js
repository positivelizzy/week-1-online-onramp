function noOfElements(x, y, z) {
 let count =0;
  for (var i in x){
    if(y>=i && z<=i) count++;
  }
  return count;
}
module.exports = noOfElements
